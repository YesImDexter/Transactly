from flask import Flask, Response, render_template, jsonify
import cv2
import mediapipe as mp
import numpy as np
import random

# For face mesh
mp_face_mesh = mp.solutions.face_mesh
face_mesh = mp_face_mesh.FaceMesh(
    static_image_mode=False, max_num_faces=1, min_detection_confidence=0.7
)

app = Flask(__name__)

mp_hands = mp.solutions.hands
hands = mp_hands.Hands(min_detection_confidence=0.7)
mp_draw = mp.solutions.drawing_utils

prev_gray = None
current_challenge = None
challenge_start_time = None
action_successful = False


def generate():
    global prev_gray, current_challenge, challenge_start_time, action_successful
    import time

    challenges = ["peace_sign", "high_five", "thumbs_up"]
    current_challenge = random.choice(challenges)
    challenge_start_time = None
    action_successful = False

    cap = cv2.VideoCapture(2)
    if not cap.isOpened():
        print("[ERROR] Camera not accessible")
        return

    print(f"[CHALLENGE] Please perform: {current_challenge}")

    while True:
        success, frame = cap.read()
        if not success:
            break

        frame_rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
        results = hands.process(frame_rgb)
        face_results = face_mesh.process(frame_rgb)

        # Motion detection
        gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
        if prev_gray is not None:
            diff = cv2.absdiff(prev_gray, gray)
            if np.count_nonzero(diff) > 10000:
                print("[MOTION] Detected.")
        prev_gray = gray

        # Action Detection
        action_detected = False
        if results.multi_hand_landmarks:
            for hand_landmarks in results.multi_hand_landmarks:
                mp_draw.draw_landmarks(
                    frame,
                    hand_landmarks,
                    mp_hands.HAND_CONNECTIONS,
                    mp_draw.DrawingSpec(
                        color=(0, 0, 255), thickness=5, circle_radius=4
                    ),
                    mp_draw.DrawingSpec(color=(255, 0, 0), thickness=2),
                )
                if current_challenge == "peace_sign" and is_peace_sign(hand_landmarks):
                    action_detected = True
                elif current_challenge == "high_five" and is_high_five(hand_landmarks):
                    action_detected = True
                elif current_challenge == "thumbs_up" and is_thumbs_up(hand_landmarks):
                    action_detected = True

        # Removed wink_right and turn_left detection blocks

        if action_detected:
            if challenge_start_time is None:
                challenge_start_time = time.time()
            elif time.time() - challenge_start_time >= 4:
                action_successful = True
            # Reset lost time marker
            generate._last_lost_time = None
        else:
            # Only reset timer if it was running and the gesture is lost for >0.5s
            if challenge_start_time is not None:
                if (
                    not hasattr(generate, "_last_lost_time")
                    or generate._last_lost_time is None
                ):
                    generate._last_lost_time = time.time()
                elif time.time() - generate._last_lost_time > 0.5:
                    challenge_start_time = None
                    generate._last_lost_time = None
            else:
                generate._last_lost_time = None

        if action_successful:
            cv2.putText(
                frame,
                "✅ Challenge Passed!",
                (10, 50),
                cv2.FONT_HERSHEY_SIMPLEX,
                1.2,
                (0, 255, 0),
                3,
            )
        else:
            text = {
                "peace_sign": "Challenge: Hold a peace sign",
                "high_five": "Challenge: Show a high five",
                "thumbs_up": "Challenge: Give a thumbs up",
            }[current_challenge]
            cv2.putText(
                frame, text, (10, 50), cv2.FONT_HERSHEY_SIMPLEX, 1.0, (255, 255, 0), 2
            )

        _, buffer = cv2.imencode(".jpg", frame)
        frame_bytes = buffer.tobytes()
        yield (
            b"--frame\r\n" b"Content-Type: image/jpeg\r\n\r\n" + frame_bytes + b"\r\n"
        )

    cap.release()


def is_peace_sign(hand_landmarks):
    # Peace sign = Index and Middle finger extended, others folded
    finger_states = []
    tip_ids = [4, 8, 12, 16, 20]  # Thumb, Index, Middle, Ring, Pinky

    for i in range(1, 5):  # Ignore thumb for simplicity
        tip = hand_landmarks.landmark[tip_ids[i]]
        pip = hand_landmarks.landmark[tip_ids[i] - 2]
        finger_states.append(tip.y < pip.y)  # True if extended

    return finger_states == [True, True, False, False]  # Only Index & Middle extended


def is_high_five(hand_landmarks):
    # High five: All fingers extended
    tip_ids = [4, 8, 12, 16, 20]
    return all(
        hand_landmarks.landmark[tip_ids[i]].y
        < hand_landmarks.landmark[tip_ids[i] - 2].y
        for i in range(5)
    )


def is_thumbs_up(hand_landmarks):
    # Thumbs up: Thumb up, other fingers folded
    tip_ids = [4, 8, 12, 16, 20]
    thumb_tip = hand_landmarks.landmark[tip_ids[0]]
    thumb_ip = hand_landmarks.landmark[tip_ids[0] - 2]
    thumb_up = thumb_tip.y < thumb_ip.y

    others_folded = all(
        hand_landmarks.landmark[tip_ids[i]].y
        > hand_landmarks.landmark[tip_ids[i] - 2].y
        for i in [1, 2, 3, 4]
    )

    return thumb_up and others_folded


@app.route("/video")
def video():
    return Response(generate(), mimetype="multipart/x-mixed-replace; boundary=frame")


@app.route("/")
def index():
    return render_template("deepfake.html")


@app.route("/challenge-status")
def challenge_status():
    # Send start_time to frontend if timer is running
    start_time = None
    if challenge_start_time is not None:
        start_time = int(challenge_start_time * 1000)  # ms for JS
    return jsonify(
        {
            "success": action_successful,
            "challenge": current_challenge,
            "start_time": start_time,
        }
    )


if __name__ == "__main__":
    port = 5050
    print(f"[INFO] Flask app running on http://127.0.0.1:{port}")
    app.run(debug=True, host="127.0.0.1", port=port)
