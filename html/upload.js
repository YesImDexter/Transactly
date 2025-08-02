/**
 * Renders the HTML for Step 2: Document Upload & Face Scan.
 */
function renderStepTwo() {
    return `
        <div>
            <h2 class="text-xl font-semibold text-gray-200 mb-4">2. Document & Face Scan</h2>
            <p class="text-gray-400 mb-6">We will securely verify your identity with AI. Please have your IC/Passport ready.</p>
            <form id="verification-form-step-2">
                <div class="mb-6">
                    <label for="idDocument" class="block text-sm font-medium text-gray-400 mb-2">Upload ID Document (Front)</label>
                    <input type="file" id="idDocument" name="idDocument" accept="image/*" class="w-full text-gray-300 bg-gray-800 p-2 rounded-md border border-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-primary-500 file:text-white hover:file:bg-primary-600 transition-colors duration-200" required />
                </div>
                <div class="mb-6">
                    <h3 class="block text-sm font-medium text-gray-400 mb-2">Live Face Scan</h3>
                    <p class="text-gray-500 text-xs mb-2">Please follow the on-screen instructions.</p>
                    <div class="relative w-full aspect-video bg-gray-900 rounded-xl border-2 border-dashed border-primary-500 flex items-center justify-center text-center">
                        <p class="text-gray-500">
                            <span class="block mb-2">Position your face in the frame.</span>
                            <span class="block">Live video stream placeholder.</span>
                        </p>
                    </div>
                </div>
                <button type="submit" class="btn-primary w-full">Submit for Verification</button>
            </form>
        </div>
    `;
}

/**
 * Attaches event listeners for Step 2.
 */
function attachEventListeners() {
    const form2 = document.getElementById('verification-form-step-2');
    if (form2) {
        form2.addEventListener('submit', (e) => {
            e.preventDefault();
            console.log("Form submitted for step 2. Redirecting to completion page.");
            // In a real application, you'd send data to a backend here.
            window.location.href = 'completion.html'; // Redirect to the completion page
        });
    }
}

// Initial render when the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('upload-container');
    if (container) {
        container.innerHTML = `
            <div class="w-full max-w-2xl bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl p-8 md:p-12 fade-in">
                <div class="flex justify-between items-center mb-8">
                    <h1 class="text-2xl font-bold gradient-text">Verification Form</h1>
                    <div class="text-sm text-gray-400">Step 2 of 3</div>
                </div>
                <div class="w-full h-2 bg-gray-700 rounded-full mb-8 overflow-hidden">
                    <div class="h-full bg-gradient-to-r from-primary-500 to-secondary-500 transition-all duration-500"
                        style="width: 66.66%"></div>
                </div>
                ${renderStepTwo()}
            </div>
        `;
        attachEventListeners();
    }
});
