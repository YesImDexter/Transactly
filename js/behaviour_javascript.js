// Load FingerprintJS
const loadFingerprint = async () => {
    const fpPromise = import('https://openfpcdn.io/fingerprintjs/v3').then(FingerprintJS => FingerprintJS.load());
    return fpPromise;
};

// Load heatmap.js
const script = document.createElement('script');
script.src = 'https://cdn.jsdelivr.net/npm/heatmap.js@2.0.5/build/heatmap.min.js';
script.onload = initHeatmap;
document.head.appendChild(script);

let tracking = false;
let movementCount = 0;
let clickCount = 0;
let scrollCount = 0;
let keyPressCount = 0;
let cursorPath = [];
let trackingStartTime = null;
let fingerprintVisitorId = null;

document.getElementById('startTracking').addEventListener('click', () => {
    tracking = true;
    trackingStartTime = Date.now();
    console.log("✅ Behavior tracking started.");
});

// Modal logic for toggles
window.addEventListener('DOMContentLoaded', () => {
    const openModalBtn = document.getElementById('openModal');
    const modal = document.getElementById('optionsModal');
    const closeModalBtn = document.getElementById('closeModal');
    const heatmapToggle = document.getElementById('modalHeatmapToggle');
    const fingerprintToggle = document.getElementById('modalFingerprintToggle');
    const fingerprintIdDisplay = document.getElementById('fingerprintIdDisplay');

    if (openModalBtn && modal) {
        openModalBtn.addEventListener('click', () => {
            modal.style.display = 'block';
        });
    }
    if (closeModalBtn && modal) {
        closeModalBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }
    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };

    // Heatmap toggle
    if (heatmapToggle) {
        heatmapToggle.addEventListener('change', function () {
            heatmapVisible = heatmapToggle.checked;
            if (heatmapContainer) {
                heatmapContainer.style.display = heatmapVisible ? 'block' : 'none';
            }
        });
    }

    // Fingerprint toggle
    if (fingerprintToggle) {
        fingerprintToggle.addEventListener('change', function () {
            if (fingerprintToggle.checked && fingerprintVisitorId) {
                fingerprintIdDisplay.textContent = `Fingerprint ID: ${fingerprintVisitorId}`;
            } else {
                fingerprintIdDisplay.textContent = '';
            }
        });
    }
});

document.addEventListener('mousemove', (e) => {
    if (tracking) {
        movementCount++;
        cursorPath.push({ x: e.clientX, y: e.clientY, time: Date.now() });
        console.log(`[Tracking] Mouse moved to (${e.clientX}, ${e.clientY}) | movementCount: ${movementCount}`);
    }
});

document.addEventListener('click', (e) => {
    if (tracking) {
        clickCount++;
        console.log(`[Tracking] Mouse click at (${e.clientX}, ${e.clientY}) | clickCount: ${clickCount}`);
    }
});

document.addEventListener('scroll', () => {
    if (tracking) {
        scrollCount++;
        console.log(`[Tracking] Page scrolled | scrollCount: ${scrollCount}`);
    }
});

document.addEventListener('keydown', () => {
    if (tracking) {
        keyPressCount++;
        console.log(`[Tracking] Key pressed | keyPressCount: ${keyPressCount}`);
    }
});


document.getElementById('sampleForm').addEventListener('submit', (e) => {
    e.preventDefault();
    if (!tracking) {
        alert("Start tracking first!");
        return;
    }

    let finalScore = calculateScore();
    const timeElapsed = (Date.now() - trackingStartTime) / 1000; // seconds
    let botDetected = false;

    // Bot detection logic
    if (timeElapsed < 2) {
        botDetected = true;
        console.warn("[Bot Detection] Form submitted too quickly.");
    }
    if (movementCount < 5 && clickCount < 2 && scrollCount < 1 && keyPressCount < 2) {
        botDetected = true;
        console.warn("[Bot Detection] Not enough user interaction.");
    }
    if (cursorPath.length === 0 || cursorPath.every(p => p.x === cursorPath[0].x && p.y === cursorPath[0].y)) {
        botDetected = true;
        console.warn("[Bot Detection] Cursor path is empty or static.");
    }

    if (botDetected) {
        finalScore = 0;
        alert("⚠️ Bot-like behavior detected!");
    } else {
        alert(`Final Behavior Score: ${finalScore}`);
    }
    console.log(`Final Behavior Score: ${finalScore}`);
    console.log("Cursor movement path:", cursorPath);
    console.log("Total key presses:", keyPressCount);
});

function calculateScore() {
    // New scoring model:
    // Higher score = more bot-like (fast, low interaction, static cursor)
    // Lower score = more human-like (slower, diverse interaction)
    let score = 0;
    const timeElapsed = trackingStartTime ? (Date.now() - trackingStartTime) / 1000 : 0;

    // Bot-like: very fast submission
    if (timeElapsed > 0 && timeElapsed < 2) {
        score += 60;
    } else if (timeElapsed >= 2 && timeElapsed < 5) {
        score += 30;
    }

    // Bot-like: very low interaction
    if (movementCount < 5) score += 40;
    if (clickCount < 2) score += 30;
    if (scrollCount < 1) score += 15;
    if (keyPressCount < 2) score += 20;

    // Bot-like: static or empty cursor path
    if (cursorPath.length === 0 || cursorPath.every(p => p.x === cursorPath[0].x && p.y === cursorPath[0].y)) {
        score += 50;
    }

    // Human-like: diverse interaction reduces score
    let diversity = 0;
    if (movementCount > 0) diversity++;
    if (clickCount > 0) diversity++;
    if (scrollCount > 0) diversity++;
    if (keyPressCount > 0) diversity++;
    score -= diversity * 10;

    // Clamp score to minimum 0
    return Math.max(0, Math.round(score));
};

// Initialize heatmap instance
let heatmapInstance;
let heatmapContainer;
let heatmapVisible = true;
function initHeatmap() {
    heatmapContainer = document.createElement('div');
    heatmapContainer.style.position = 'fixed';
    heatmapContainer.style.top = '0';
    heatmapContainer.style.left = '0';
    heatmapContainer.style.width = '100vw';
    heatmapContainer.style.height = '100vh';
    heatmapContainer.style.pointerEvents = 'none';
    heatmapContainer.style.zIndex = '9999';
    heatmapContainer.style.opacity = '0.35'; // Lower opacity for better visibility
    heatmapContainer.id = 'heatmapContainer';
    document.body.appendChild(heatmapContainer);

    heatmapInstance = h337.create({
        container: heatmapContainer,
        opacity: 0.35 // Lower opacity for heatmap.js rendering
    });

    // Set willReadFrequently on canvas for performance after creation
    setTimeout(() => {
        const canvas = heatmapContainer.querySelector('canvas');
        if (canvas) {
            canvas.getContext('2d', { willReadFrequently: true });
        }
    }, 500);

    document.addEventListener('mousemove', function (ev) {
        if (heatmapInstance && heatmapVisible) {
            heatmapContainer.style.display = 'block'; // Always show when toggled
            heatmapInstance.addData({ x: ev.pageX, y: ev.pageY, value: 1 });
        }
    });
}
// Setup toggle button
const toggleBtn = document.getElementById('toggleHeatmap');
if (toggleBtn) {
    toggleBtn.addEventListener('click', function () {
        heatmapVisible = !heatmapVisible;
        heatmapContainer.style.display = heatmapVisible ? 'block' : 'none';
        toggleBtn.textContent = heatmapVisible ? 'Hide Heatmap' : 'Show Heatmap';
    });
}

// Fetch and log device fingerprint
loadFingerprint().then(fp => {
    fp.get().then(result => {
        fingerprintVisitorId = result.visitorId;
        const components = result.components;
        let fingerprintData = [];
        for (const key in components) {
            if (components.hasOwnProperty(key)) {
                fingerprintData.push({
                    property: key,
                    value: components[key].value
                });
            }
        }
        console.log("==============================");
        console.log("🆔 FingerprintJS Visitor ID");
        console.log("ID:", fingerprintVisitorId);
        console.log("------------------------------");
        console.log("Properties:");
        fingerprintData.forEach(item => {
            console.log(`- ${item.property}:`, item.value);
        });
        console.log("==============================");
        // If modal toggle is checked, show fingerprint in modal
        const fingerprintToggle = document.getElementById('modalFingerprintToggle');
        const fingerprintIdDisplay = document.getElementById('fingerprintIdDisplay');
        if (fingerprintToggle && fingerprintIdDisplay && fingerprintToggle.checked) {
            fingerprintIdDisplay.textContent = `Fingerprint ID: ${fingerprintVisitorId}`;
        }
    });
});
