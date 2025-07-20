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

## How to install

Follow these steps to install and run the Transactly system on your machine:

1. Clone the repository

``` git clone https://github.com/your-username/transactly.git ```

``` cd transactly ```

2. Create and activate a virtual environment (Recommended)

```python3 -m venv .venv```

```source .venv/bin/activate```#macOS/Linux

# OR
```.venv\Scripts\activate```#Windows

3. Ensure you're using Python 3.9.x

Check your version:

```python --version```

If it's not 3.9.x, install the correct version using pyenv or Python installer:
https://www.python.org/downloads/release/python-390/

4. Install required dependencies

```pip install flask opencv-python mediapipe selenium numpy```

If any package fails due to architecture mismatch, make sure you're using a compatible Python version (preferably Python 3.9.x on Intel or Apple Silicon).

5. Run the system

Step A: Serve index.html (Landing Page)

Open index.html in Visual Studio Code.

Right-click and select "Open with Live Server" (you may need the Live Server extension).


Step B: Start the Flask App

```python app.py```

Once running, open your browser and navigate to:

> http://127.0.0.1:5050

You should see the gesture-based liveness verification interface.

✅ You're done!


Do reach out to the team leader for any installation guidance

```Whatsapp at : 0128850435 (Dexter)```

Or

```Email at : DexterS0202@gmail.com```
