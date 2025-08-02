/**
 * Renders the HTML for Step 3: Completion.
 */
function renderStepThree() {
    return `
        <div class="text-center">
            <div class="flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24 text-green-500 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
            <h2 class="text-2xl font-bold text-green-400 mb-4">Verification Submitted!</h2>
            <p class="text-gray-300 mb-6">
                Thank you for completing the verification process. Your data has been securely submitted for review.
                <br>
                We will notify you once your account has been fully verified.
            </p>
            <a href="dashboard.html" class="btn-primary inline-block">Go to Dashboard</a>
        </div>
    `;
}

// Initial render when the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('completion-container');
    if (container) {
        container.innerHTML = `
            <div class="w-full max-w-2xl bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl p-8 md:p-12 fade-in">
                <div class="flex justify-between items-center mb-8">
                    <h1 class="text-2xl font-bold gradient-text">Verification Form</h1>
                    <div class="text-sm text-gray-400">Completed</div>
                </div>
                <div class="w-full h-2 bg-gray-700 rounded-full mb-8 overflow-hidden">
                    <div class="h-full bg-gradient-to-r from-primary-500 to-secondary-500 transition-all duration-500"
                        style="width: 100%"></div>
                </div>
                ${renderStepThree()}
            </div>
        `;
    }
});
