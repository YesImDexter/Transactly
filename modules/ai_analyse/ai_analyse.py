# modules/ai_analyse/analyse.py

import pandas as pd
import numpy as np
from tqdm import tqdm
from openai import OpenAI

# Your API key (best practice: move to env variable later)
OPENAI_API_KEY = "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"


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
    You are a financial fraud detection AI. Review the following suspicious transactions and provide a short title and explanation for each. Where applicable, reference other related transactions to support your reasoning.

    Structure of the transaction data (Parquet columns):
    {parquet_columns}

    For each flagged transaction, return:
    - A short title summarizing the suspicion (e.g., "Unusual Spike in Transaction Volume")
    - A risk score (0–100)
    - An explanation (1–3 sentences)
    - Mention the row index of any related transaction you are referencing.

    Flagged Transactions:
    {suspicious_df[['trxn_id', 'ofi_acct_number', 'trxn_amount', 'suspicion_flag']].to_json(orient='records')}

    Reference Transactions:
    {related_sample[['trxn_id', 'ofi_acct_number', 'trxn_amount']].to_json(orient='records')}
    """

    # OpenAI call
    client = OpenAI(api_key=OPENAI_API_KEY)
    response = client.chat.completions.create(
        model="gpt-4",
        messages=[
            {
                "role": "system",
                "content": "You are a financial fraud detection assistant.",
            },
            {"role": "user", "content": ai_prompt},
        ],
        temperature=0.2,
    )

    # Return data as a dictionary
    return {
        "unique_trxns": unique_trxns,
        "total_trxns": total_trxns,
        "summary_text": response.choices[0].message.content,
        "flagged_transactions": suspicious_df.to_dict(orient="records"),
        "related_sample": related_sample.to_dict(orient="records"),
    }
