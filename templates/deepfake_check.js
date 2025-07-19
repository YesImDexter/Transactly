const video = document.getElementById('video');
const statusText = document.getElementById('status');
const startBtn = document.getElementById('startCheck');

let stream;
let motionDetected = false;
let prevFrame = null;

async function initCamera() {
    try {
        stream = await navigator.mediaDevices.getUserMedia({ video: true });
        video.srcObject = stream;
    } catch (error) {
        alert("Camera access denied or unavailable.");
        console.error(error);
    }
}

// Start camera on page load
initCamera();

startBtn.addEventListener('click', () => {
    statusText.textContent = "Analyzing... Please move slightly.";
    analyzeMotion();
});

function analyzeMotion() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    const checkInterval = setInterval(() => {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

        const frame = ctx.getImageData(0, 0, canvas.width, canvas.height).data;

        if (prevFrame) {
            let diff = 0;
            for (let i = 0; i < frame.length; i += 4) {
                diff += Math.abs(frame[i] - prevFrame[i]); // compare red channel
            }

            const averageDiff = diff / (frame.length / 4);
            if (averageDiff > 5) {
                motionDetected = true;
                clearInterval(checkInterval);
                statusText.textContent = "✅ Liveness confirmed. Real user.";
            }
        }

        prevFrame = frame;
    }, 500);

    setTimeout(() => {
        if (!motionDetected) {
            clearInterval(checkInterval);
            statusText.textContent = "⚠️ No motion detected. Possibly spoofed.";
        }
    }, 5000);
}