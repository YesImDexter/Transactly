/**
 * Returns the HTML string for the E-Wallet Dashboard with improved UI and styling for landscape view.
 * This function encapsulates the entire dashboard's visual structure.
 * @returns {string} The HTML content for the dashboard.
 */
export function renderDashboard() {
  return `
        <div class="w-full max-w-6xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden my-8 md:flex">

            <!-- Left Section: Top Greeting and E-Wallet Balance Card -->
            <div class="relative bg-gradient-to-br from-blue-700 to-blue-500 p-8 md:p-10 text-white rounded-b-3xl md:rounded-r-none md:rounded-l-3xl flex flex-col justify-between md:w-1/2 lg:w-2/5">
                <div class="flex justify-between items-center mb-6">
                    <div class="text-2xl font-semibold drop-shadow-sm">Hello!</div>
                    <div class="flex space-x-4">
                        <!-- Notification Bell Icon -->
                        <button class="p-2 rounded-full hover:bg-white hover:bg-opacity-20 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bell"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
                        </button>
                        <!-- User Profile Icon -->
                        <a href="#" class="p-2 rounded-full hover:bg-white hover:bg-opacity-20 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                        </a>
                    </div>
                </div>
                <div class="text-4xl font-bold mb-8 drop-shadow-md">Good Morning</div>

                <!-- E-Wallet Balance Card -->
                <div class="w-full bg-white p-6 rounded-2xl shadow-lg text-gray-800 mt-auto transform transition-transform duration-300 hover:scale-[1.02]">
                    <div class="flex justify-between items-center">
                        <div>
                            <div class="text-sm text-gray-500 mb-1">Total E-Wallet Balance</div>
                            <div class="text-3xl font-bold text-gray-900">RM 34,246.61</div>
                        </div>
                        <!-- Wallet Icon -->
                        <div class="bg-blue-100 text-blue-600 p-3 rounded-full shadow-md">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wallet"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h12a2 2 0 0 1 0 4H5a2 2 0 0 0 0 4h12a2 2 0 0 0 2-2v-3"/><path d="M10 12h.01"/></svg>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Right Section: Main Content Area -->
            <div class="p-6 md:p-10 bg-gray-50 flex-grow md:w-1/2 lg:w-3/5">
                <!-- Action Buttons -->
                <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
                    <!-- Send button is a link to send.html -->
                    <a href="send.html" class="flex flex-col items-center group">
                        <div class="bg-blue-100 text-blue-600 p-4 rounded-xl mb-2 shadow-sm group-hover:bg-blue-200 group-hover:scale-105 transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up"><path d="m5 12 7-7 7 7"/><path d="M12 19V5"/></svg>
                        </div>
                        <span class="text-sm text-gray-700 font-medium">Send</span>
                    </a>
                    <a href = "receive.html">
                    <div class="flex flex-col items-center group">
                        <button class="bg-blue-100 text-blue-600 p-4 rounded-xl mb-2 shadow-sm group-hover:bg-blue-200 group-hover:scale-105 transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-down"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>
                        </button>
                        <span class="text-sm text-gray-700 font-medium">Receive</span>
                    </div>
                    </a>
                    <div class="flex flex-col items-center group">
                        <button class="bg-blue-100 text-blue-600 p-4 rounded-xl mb-2 shadow-sm group-hover:bg-blue-200 group-hover:scale-105 transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-line-chart"><path d="M3 3v18h18"/><path d="m18 7-5 5-4-4-3 3"/></svg>
                        </button>
                        <span class="text-sm text-gray-700 font-medium">Activity</span>
                    </div>
                    <div class="flex flex-col items-center group">
                        <button class="bg-blue-100 text-blue-600 p-4 rounded-xl mb-2 shadow-sm group-hover:bg-blue-200 group-hover:scale-105 transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-dollar-sign"><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                        </button>
                        <span class="text-sm text-gray-700 font-medium">Exchange</span>
                    </div>
                </div>

                <!-- Instant Send Section -->
                <div class="mb-10">
                    <div class="flex justify-between items-center mb-4">
                        <div class="flex items-center text-gray-900 font-semibold text-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-zap text-blue-500 mr-2"><path d="M4 14a1 1 0 0 1-.37-.7c-.2-.54-.1-1.07.2-1.5l7.5-10a1 1 0 0 1 1.6.6c.2.54.1 1.07-.2 1.5l-7.5 10a1 1 0 0 1-1.6-.6Z"/><path d="M18 10a1 1 0 0 1 .37.7c-.2.54-.1 1.07-.2 1.5l-7.5 10a1 1 0 0 1-1.6-.6c-.2-.54-.1-1.07.2-1.5l7.5-10a1 1 0 0 1 1.6.6Z"/></svg>
                            Instant Send
                        </div>
                    </div>
                    <div class="flex items-center overflow-x-auto no-scrollbar space-x-4 py-2">
                        <!-- Contacts -->
                        <div class="flex-shrink-0 text-center transform transition-transform duration-200 hover:scale-105">
                            <img src="https://placehold.co/60x60/ADD8E6/000000?text=Isaac" alt="Isaac" class="w-16 h-16 rounded-full object-cover mb-1 shadow-md border-2 border-transparent hover:border-blue-400 transition-colors">
                            <span class="text-sm text-gray-700 font-medium">Isaac</span>
                        </div>
                        <div class="flex-shrink-0 text-center transform transition-transform duration-200 hover:scale-105">
                            <img src="https://placehold.co/60x60/FFB6C1/000000?text=Katy" alt="Katy" class="w-16 h-16 rounded-full object-cover mb-1 shadow-md border-2 border-transparent hover:border-blue-400 transition-colors">
                            <span class="text-sm text-gray-700 font-medium">Katy</span>
                        </div>
                        <div class="flex-shrink-0 text-center transform transition-transform duration-200 hover:scale-105">
                            <img src="https://placehold.co/60x60/90EE90/000000?text=Jess" alt="Jess" class="w-16 h-16 rounded-full object-cover mb-1 shadow-md border-2 border-transparent hover:border-blue-400 transition-colors">
                            <span class="text-sm text-gray-700 font-medium">Jess</span>
                        </div>
                        <div class="flex-shrink-0 text-center transform transition-transform duration-200 hover:scale-105">
                            <img src="https://placehold.co/60x60/FFD700/000000?text=Amy" alt="Amy" class="w-16 h-16 rounded-full object-cover mb-1 shadow-md border-2 border-transparent hover:border-blue-400 transition-colors">
                            <span class="text-sm text-gray-700 font-medium">Amy</span>
                        </div>
                        <div class="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 text-gray-600 shadow-md transform transition-transform duration-200 hover:scale-105 hover:bg-gray-200 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
                        </div>
                    </div>
                </div>

                <!-- Promotions Section -->
                <div>
                    <div class="flex justify-between items-center mb-4">
                        <div class="flex items-center text-gray-900 font-semibold text-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star text-yellow-500 mr-2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                            Promotions
                        </div>
                        <button class="p-1 rounded-full text-gray-500 hover:bg-gray-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-info"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
                        </button>
                    </div>
                    <div class="flex overflow-x-auto no-scrollbar space-x-4 pb-2">
                        <!-- Promotion Cards -->
                        <div class="flex-shrink-0 w-64 bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 transform transition-transform duration-200 hover:scale-[1.02]">
                            <img src="https://placehold.co/600x300/6A5ACD/FFFFFF?text=MYDIN+PAY+Promo" alt="MYDIN PAY Promotion" class="w-full h-32 object-cover">
                            <div class="p-4">
                                <div class="flex items-center text-sm font-semibold text-gray-800 mb-2">
                                    <img src="https://placehold.co/20x20/FF0000/FFFFFF?text=M" alt="MYDIN logo" class="w-5 h-5 rounded-full mr-2">
                                    MYDIN PAY
                                </div>
                                <p class="text-xs text-gray-500 mb-2">Imbas & Bayar</p>
                                <p class="text-sm text-gray-700 mb-4">Install MYDIN PAY to get some rewards.</p>
                                <button class="w-full bg-blue-600 text-white py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                                    Learn More
                                </button>
                            </div>
                        </div>
                        <div class="flex-shrink-0 w-64 bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 transform transition-transform duration-200 hover:scale-[1.02]">
                            <img src="https://placehold.co/600x300/87CEEB/FFFFFF?text=Another+Promo" alt="Another Promotion" class="w-full h-32 object-cover">
                            <div class="p-4">
                                <div class="flex items-center text-sm font-semibold text-gray-800 mb-2">
                                    <img src="https://placehold.co/20x20/008000/FFFFFF?text=P" alt="Partner logo" class="w-5 h-5 rounded-full mr-2">
                                    Partner Offers
                                </div>
                                <p class="text-xs text-gray-500 mb-2">Exclusive Deals</p>
                                <p class="text-sm text-gray-700 mb-4">Discover great savings from our partners.</p>
                                <button class="w-full bg-blue-600 text-white py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                                    Explore
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}
