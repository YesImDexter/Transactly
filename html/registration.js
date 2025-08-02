// Global state for the CAPTCHA
let correctCaptcha = '';

/**
 * Renders the HTML for the Basic Information and CAPTCHA form.
 */
function renderStepOne() {
    correctCaptcha = generateCaptcha();
    return `
        <div>
            <h2 class="text-xl font-semibold text-gray-200 mb-4">1. Basic Information</h2>
            <p class="text-gray-400 mb-6">Please provide your personal details to begin the verification process.</p>
            <form id="verification-form-step-1">
                <div class="mb-4">
                    <label for="fullName" class="block text-sm font-medium text-gray-400 mb-2">Full Name (as per ID)</label>
                    <input type="text" id="fullName" name="fullName" class="input-field" placeholder="John Doe" required />
                </div>
                <div class="mb-4">
                    <label for="idNumber" class="block text-sm font-medium text-gray-400 mb-2">IC/Passport Number</label>
                    <input type="text" id="idNumber" name="idNumber" class="input-field" placeholder="910212-14-5678" required />
                </div>
                <div class="mb-6">
                    <label for="address" class="block text-sm font-medium text-gray-400 mb-2">Residential Address</label>
                    <textarea id="address" name="address" rows="3" class="input-field" placeholder="123 Example Street, City, Postcode" required></textarea>
                </div>
                <div class="mb-6">
                    <label for="captcha" class="block text-sm font-medium text-gray-400 mb-2">Security Check</label>
                    <div class="flex items-center space-x-4">
                        <input type="text" id="captcha" name="captcha" class="input-field" placeholder="Enter CAPTCHA" required />
                        <div id="captcha-display" class="bg-gray-700 text-gray-300 px-4 py-2 rounded-md font-bold text-lg select-none flex items-center justify-between min-w-[120px]">
                            <span id="captcha-text">${correctCaptcha}</span>
                            <button type="button" id="refresh-captcha" class="ml-2 p-1 rounded hover:bg-gray-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h.582m15.836 12-3.32-3.32a8 8 0 10-2.36-12.78m.54 3.78H20v-5m-1 7h-4m2 2v-4m-12 1h-4m2-2v4"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div id="captcha-error" class="text-red-500 text-sm mt-2 hidden">Incorrect CAPTCHA. Please try again.</div>
                </div>
                <button type="submit" class="btn-primary w-full">Continue</button>
            </form>
        </div>
    `;
}

/**
 * Attaches event listeners for Step 1.
 */
function attachEventListeners() {
    const form1 = document.getElementById('verification-form-step-1');
    if (form1) {
        form1.addEventListener('submit', (e) => {
            e.preventDefault();
            const captchaInput = document.getElementById('captcha').value;
            const errorDiv = document.getElementById('captcha-error');

            if (captchaInput === correctCaptcha) {
                console.log("CAPTCHA matched. Redirecting to upload page.");
                window.location.href = 'http://127.0.0.1:5050/fingerprint'; // Redirect to the new page
            } else {
                console.log("Incorrect CAPTCHA.");
                errorDiv.classList.remove('hidden');
                // Re-generate CAPTCHA and update the display
                correctCaptcha = generateCaptcha();
                document.getElementById('captcha-text').textContent = correctCaptcha; // Updated ID
                document.getElementById('captcha').value = '';
            }
        });

        // Handle refresh CAPTCHA button click
        document.getElementById('refresh-captcha').addEventListener('click', () => {
            correctCaptcha = generateCaptcha();
            document.getElementById('captcha-text').textContent = correctCaptcha; // Updated ID
            document.getElementById('captcha').value = '';
            document.getElementById('captcha-error').classList.add('hidden');
        });
    }
}

/**
 * Generates a simple CAPTCHA string.
 */
function generateCaptcha() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captcha = '';
    for (let i = 0; i < 6; i++) {
        captcha += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return captcha;
}

// Initial render when the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('registration-container');
    if (container) {
        // We only render step 1 on this page
        container.innerHTML = `
            <div class="w-full max-w-2xl bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl p-8 md:p-12 fade-in">
                <div class="flex justify-between items-center mb-8">
                    <h1 class="text-2xl font-bold gradient-text">E-KYC Verification</h1>
                    <div class="text-sm text-gray-400">Step 1 of 4</div>
                </div>
            <div class="w-full h-2 bg-gray-700 rounded-full mb-8 overflow-hidden">
                <div class="h-full bg-gradient-to-r from-primary-500 to-secondary-500 transition-all duration-500"
                    style="width: 0%"></div>
            </div>
                ${renderStepOne()}
            </div>
        `;
        attachEventListeners();
    }
});