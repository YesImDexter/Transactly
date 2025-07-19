# 🛡️ Transactly — Secure Identity Challenge System

Transactly is a prototype web application focused on strengthening identity verification using **hand-gesture-based challenges** powered by computer vision and machine learning. It is suitable for detecting deepfakes, bots, or spoofing attempts in real-time through webcam interaction.

## 🔍 Features

- 👋 **Hand Gesture Challenges**: Randomly selects from challenges like peace sign, thumbs up, high five, and finger gun.
- 🧠 **Liveness Detection**: Uses motion and MediaPipe hand landmarks to confirm real human presence.
- 🕒 **Gesture Timer**: Requires users to hold a correct gesture for 3 seconds to pass.
- 📷 **Webcam Streaming**: Live video feed processed via OpenCV and streamed to browser via Flask.
- ✅ **Challenge Success Feedback**: Prompts success message and allows user to proceed.
- 📱 **Mobile-Responsive UI**: Clean and user-friendly interface using blue color scheme and Poppins font.
- 🤖 **Bot Automation Script** *(Optional)*: Includes Selenium automation for UI or test simulation.

## 🛠️ Tech Stack

- **Python** (3.9+)
- **Flask**
- **OpenCV**
- **MediaPipe**
- **Selenium** (for bot.py)
- HTML + CSS + JavaScript (template engine via Jinja2)

## 📸 How It Works

1. User accesses the `/` page.
2. A random hand-based challenge is displayed.
3. The user must perform the gesture in front of the webcam.
4. The system detects motion and uses MediaPipe to validate the gesture.
5. If successful for 3 seconds → user can proceed.

## 🧩 Project Structure
