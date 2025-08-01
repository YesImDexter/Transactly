from flask import Flask, Response, render_template, jsonify, request, redirect, url_for
from werkzeug.utils import secure_filename
import os

from modules.deepfake.deepfake_logic import generate_video_frames, get_challenge_status
from modules.ai_analyse.analyse import run_ai_analysis

app = Flask(__name__)
app.config["UPLOAD_FOLDER"] = "uploads/"
app.config["MAX_CONTENT_LENGTH"] = 50 * 1024 * 1024  # 50MB max upload

# Ensure upload folder exists
os.makedirs(app.config["UPLOAD_FOLDER"], exist_ok=True)


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/deepfake")
def deepfake():
    return render_template("deepfake.html")


@app.route("/video")
def video():
    return Response(
        generate_video_frames(), mimetype="multipart/x-mixed-replace; boundary=frame"
    )


@app.route("/challenge-status")
def challenge_status():
    return jsonify(get_challenge_status())


@app.route("/ai_analyse", methods=["GET", "POST"])
def ai_analyse():
    if request.method == "POST":
        file = request.files.get("parquet_file")
        if not file or not file.filename.endswith(".parquet"):
            return "Please upload a valid .parquet file.", 400

        filename = secure_filename(file.filename)
        filepath = os.path.join(app.config["UPLOAD_FOLDER"], filename)
        file.save(filepath)

        try:
            result = run_ai_analysis(filepath)
        except Exception as e:
            return f"Error during analysis: {e}", 500

        return render_template("ai_analyse.html", result=result)

    return render_template("ai_upload.html")  # A simple upload form
