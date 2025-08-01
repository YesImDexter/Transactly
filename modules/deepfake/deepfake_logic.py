import cv2
import mediapipe as mp
import numpy as np
import random
import time
from flask import jsonify

# Mediapipe setup
mp_face_mesh = mp.solutions.face_mesh
face_mesh = mp_face_mesh.FaceMesh(
    static_image_mode=False, max_num_faces=1, min_detection_confidence=0.7
)

mp_hands = mp.solutions.hands
hands = mp_hands.Hands(min_detection_confidence=0.7)
mp_draw = mp.solutions.drawing_utils

# Module-level state
prev_gray = None
current_challenge = None
challenge_start_time = None
action_successful = False


def generate_video_frames():
    global prev_gray, current_challenge, challenge_start_time, action_successful

    challenges = ["peace_sign", "high_five", "thumbs_up"]
    current_challenge = random.choice(challenges)
    challenge_start_time = None
    action_successful = False

    cap = cv2.VideoCapture(2)  # Use camera index 1
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

        gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
        if prev_gray is not None:
            diff = cv2.absdiff(prev_gray, gray)
            if np.count_nonzero(diff) > 10000:
                print("[MOTION] Detected.")
        prev_gray = gray

        # Action detection
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

        # Timer logic
        if action_detected:
            if challenge_start_time is None:
                challenge_start_time = time.time()
            elif time.time() - challenge_start_time >= 4:
                action_successful = True
            generate_video_frames._last_lost_time = None
        else:
            if challenge_start_time is not None:
                if (
                    not hasattr(generate_video_frames, "_last_lost_time")
                    or generate_video_frames._last_lost_time is None
                ):
                    generate_video_frames._last_lost_time = time.time()
                elif time.time() - generate_video_frames._last_lost_time > 0.5:
                    challenge_start_time = None
                    generate_video_frames._last_lost_time = None
            else:
                generate_video_frames._last_lost_time = None

        # Text rendering
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
        yield b"--frame\r\n" b"Content-Type: image/jpeg\r\n\r\n" + frame_bytes + b"\r\n"

    cap.release()


def get_challenge_status():
    global challenge_start_time, current_challenge, action_successful
    start_time = None
    if challenge_start_time is not None:
        start_time = int(challenge_start_time * 1000)  # ms
    return {
        "success": action_successful,
        "challenge": current_challenge,
        "start_time": start_time,
    }


# Gesture detection helpers
def is_peace_sign(hand_landmarks):
    tip_ids = [4, 8, 12, 16, 20]
    finger_states = []
    for i in range(1, 5):
        tip = hand_landmarks.landmark[tip_ids[i]]
        pip = hand_landmarks.landmark[tip_ids[i] - 2]
        finger_states.append(tip.y < pip.y)
    return finger_states == [True, True, False, False]


def is_high_five(hand_landmarks):
    tip_ids = [4, 8, 12, 16, 20]
    return all(
        hand_landmarks.landmark[tip_ids[i]].y
        < hand_landmarks.landmark[tip_ids[i] - 2].y
        for i in range(5)
    )


def is_thumbs_up(hand_landmarks):
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
