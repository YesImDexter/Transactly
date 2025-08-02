# modules/ai_analyse/analyse.py

import pandas as pd
import numpy as np
from tqdm import tqdm
import openai

from dotenv import load_dotenv

load_dotenv()
import os

api_key = os.getenv("API_KEY")
openai.api_key = api_key


def run_ai_analysis(parquet_path: str) -> dict:
    # Load data
    df = pd.read_parquet(parquet_path)

    print("Processing dataset...")
    for _ in tqdm(range(len(df)), desc="Loading", unit="row"):
        pass

    # Basic stats
    unique_trxns = df["trxn_id"].nunique()
    total_trxns = df.shape[0]

    # Suspicion flagging
    df["suspicion_flag"] = ""

    threshold_high = df["trxn_amount"].quantile(0.99)
    df.loc[df["trxn_amount"] > threshold_high, "suspicion_flag"] += "HighValue|"

    sender_avg = df.groupby("ofi_acct_number")["trxn_amount"].transform("mean")
    df.loc[df["trxn_amount"] > sender_avg * 5, "suspicion_flag"] += "SpikeVsAvg|"

    sender_counts = df["ofi_acct_number"].value_counts()
    frequent_senders = sender_counts[sender_counts > 10].index
    df.loc[
        df["ofi_acct_number"].isin(frequent_senders), "suspicion_flag"
    ] += "FrequentSender|"

    df.loc[df["trxn_amount"] % 1000 == 0, "suspicion_flag"] += "RoundAmount|"

    df["repeated_amount_flag"] = df.duplicated(
        subset=["ofi_acct_number", "trxn_amount"], keep=False
    )
    df.loc[df["repeated_amount_flag"], "suspicion_flag"] += "RepeatAmount|"
    df.drop(columns="repeated_amount_flag", inplace=True)

    suspicious_df = (
        df[df["suspicion_flag"] != ""]
        .sort_values("trxn_amount", ascending=False)
        .head(5)
    )
    related = df[df["ofi_acct_number"].isin(suspicious_df["ofi_acct_number"])]
    related_sample = related.groupby("ofi_acct_number").head(3)

    parquet_columns = list(df.columns)

    ai_prompt = f"""
    You are a financial fraud detection AI. Review the following suspicious transactions and provide a structured analysis in JSON format.

    Structure of the transaction data (Parquet columns):
    {parquet_columns}

    Analyze the transactions and return a JSON object with this exact structure:
    {{
        "transactions": [
            {{
                "id": "transaction_id",
                "title": "A short title summarizing the suspicion",
                "risk_score": number between 0-100,
                "explanation": "1-3 sentences explaining the risk",
                "related_transactions": ["id1", "id2"] // optional, include if referencing other transactions
            }}
        ],
        "risk_summary": {{
            "high_risk_count": number of transactions with risk score > 70,
            "medium_risk_count": number of transactions with risk score 40-70,
            "total_risk_score": average risk score of all transactions,
            "summary_text": "2-3 sentences summarizing overall risk assessment"
        }}
    }}

    Available data:
    Flagged Transactions:
    {suspicious_df[['trxn_id', 'ofi_acct_number', 'trxn_amount', 'suspicion_flag']].to_json(orient='records')}

    Reference Transactions:
    {related_sample[['trxn_id', 'ofi_acct_number', 'trxn_amount']].to_json(orient='records')}
    """

    # OpenAI call
    response = openai.chat.completions.create(
        model="gpt-4",
        messages=[
            {
                "role": "system",
                "content": "You are a financial fraud detection assistant. Return your analysis as a valid JSON object following the exact structure specified in the prompt. Do not include any text outside the JSON object.",
            },
            {"role": "user", "content": ai_prompt},
        ],
        temperature=0.1,
    )

    # Process the AI response
    try:
        # Parse the JSON response
        import json

        ai_analysis = json.loads(response.choices[0].message.content)

        # Calculate additional statistics
        risk_scores = [t["risk_score"] for t in ai_analysis["transactions"]]
        risk_stats = {
            "max_risk": max(risk_scores) if risk_scores else 0,
            "avg_risk": sum(risk_scores) / len(risk_scores) if risk_scores else 0,
            "risk_levels": {
                "high": len([s for s in risk_scores if s > 70]),
                "medium": len([s for s in risk_scores if 40 <= s <= 70]),
                "low": len([s for s in risk_scores if s < 40]),
            },
        }

        # Return enriched structured data
        return {
            "unique_trxns": unique_trxns,
            "total_trxns": total_trxns,
            "analysis": {
                "transactions": ai_analysis["transactions"],
                "risk_summary": ai_analysis["risk_summary"],
                "risk_stats": risk_stats,
            },
            "flagged_transactions": suspicious_df.to_dict(orient="records"),
            "related_sample": related_sample.to_dict(orient="records"),
        }
    except json.JSONDecodeError as e:
        print(f"Error parsing GPT response: {str(e)}")
        print("Raw response:", response.choices[0].message.content)
        raise Exception("Failed to parse AI analysis response")
