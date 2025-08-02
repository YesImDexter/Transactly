/**
 * Returns the HTML string for the E-Wallet Dashboard with enhanced UI
 * @param {boolean} isUserVerified - A flag to indicate if the user is verified.
 */
export function renderDashboard(isUserVerified = false) { // Added isUserVerified parameter
  if (!isUserVerified) {
    return `
      <div class="w-full max-w-2xl mx-auto my-16 p-8 bg-gray-800 rounded-3xl shadow-2xl text-center">
        <h2 class="text-4xl font-bold gradient-text mb-6">Welcome to TransX!</h2>
        <p class="text-gray-300 mb-8 text-lg">
          To ensure the security of your account and unlock all features, please complete our
          One-Flow Identity Verification process. It's quick, easy, and keeps your data safe.
        </p>
        <ul class="text-left text-gray-400 text-base mb-8 space-y-3 mx-auto max-w-md">
          <li class="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>Basic Info & Device Security</li>
          <li class="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>AI-Powered ID Document Verification</li>
          <li class="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>Face Scan with Liveness Detection</li>
          <li class="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>Smart Risk Check & Secure Approval</li>
        </ul>
        <a href="registration.html" class="inline-block bg-gradient-to-r from-primary-600 to-secondary-500 text-white font-bold py-4 px-10 rounded-full shadow-lg hover:from-primary-500 hover:to-secondary-400 transform transition-all duration-300 scale-105 animate-pulse-slow">
          Start Verification Now
        </a>
        <p class="text-gray-500 text-sm mt-6">It only takes a few minutes!</p>
      </div>
    `;
  } else {
    return `
      <div class="w-full max-w-6xl mx-auto bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl overflow-hidden my-8 md:flex transition-all duration-300 hover:shadow-xl relative">
        <div class="relative bg-gradient-to-br from-primary-700 to-primary-500 p-8 md:p-10 text-white rounded-b-3xl md:rounded-r-none md:rounded-l-3xl flex flex-col justify-between md:w-1/2 lg:w-2/5">
          <div class="flex justify-between items-center mb-6">
            <div class="text-2xl font-semibold drop-shadow-sm">Hello, <span class="gradient-text font-bold">User</span>!</div>
            <div class="flex space-x-4">
              <button class="relative p-2 rounded-full hover:bg-white hover:bg-opacity-20 transition-all duration-200 group">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/>
                  <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>
                </svg>
                <span class="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              </button>
              <a href="#" class="p-2 rounded-full hover:bg-white hover:bg-opacity-20 transition-all duration-200 flex items-center justify-center">
                <div class="w-8 h-8 rounded-full bg-gradient-to-r from-secondary-500 to-primary-400 flex items-center justify-center text-white font-bold">
                  U
                </div>
              </a>
            </div>
          </div>

          <div class="mb-8">
            <div class="text-sm text-primary-100 mb-1">Welcome back</div>
            <div class="text-4xl font-bold drop-shadow-md animate-float">Good Morning</div>
          </div>

          <div class="balance-card w-full bg-white/10 backdrop-blur-sm p-6 rounded-2xl shadow-lg text-white mt-auto transform transition-all duration-300 hover:scale-[1.02] border border-white/10">
            <div class="flex justify-between items-center">
              <div>
                <div class="text-sm text-primary-100 mb-1">Total E-Wallet Balance</div>
                <div class="text-3xl font-bold">RM 34,246.<span class="text-primary-200">61</span></div>
              </div>
              <div class="bg-white/20 p-3 rounded-full shadow-md backdrop-blur-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h12a2 2 0 0 1 0 4H5a2 2 0 0 0 0 4h12a2 2 0 0 0 2-2v-3"/>
                  <path d="M10 12h.01"/>
                </svg>
              </div>
            </div>
            <div class="mt-4 flex justify-between items-center text-xs">
              <span class="bg-white/10 px-2 py-1 rounded-full">+12.5% this month</span>
              <button class="text-primary-100 hover:text-white flex items-center">
                View details
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-1">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div class="p-6 md:p-10 bg-gray-800/50 flex-grow md:w-1/2 lg:w-3/5 backdrop-blur-sm">
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            <a href="send.html" class="flex flex-col items-center group">
              <div class="bg-gradient-to-br from-primary-600 to-primary-400 text-white p-4 rounded-xl mb-2 shadow-sm group-hover:from-primary-500 group-hover:to-primary-300 group-hover:scale-105 transition-all duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="m5 12 7-7 7 7"/>
                  <path d="M12 19V5"/>
                </svg>
              </div>
              <span class="text-sm text-gray-300 font-medium group-hover:text-white">Send</span>
            </a>
            <a href="receive.html" class="flex flex-col items-center group">
              <div class="bg-gradient-to-br from-secondary-600 to-secondary-400 text-white p-4 rounded-xl mb-2 shadow-sm group-hover:from-secondary-500 group-hover:to-secondary-300 group-hover:scale-105 transition-all duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 5v14"/>
                  <path d="m19 12-7 7-7-7"/>
                </svg>
              </div>
              <span class="text-sm text-gray-300 font-medium group-hover:text-white">Receive</span>
            </a>
            <div class="flex flex-col items-center group">
              <button class="bg-gradient-to-br from-purple-600 to-indigo-500 text-white p-4 rounded-xl mb-2 shadow-sm group-hover:from-purple-500 group-hover:to-indigo-400 group-hover:scale-105 transition-all duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M3 3v18h18"/>
                  <path d="m18 7-5 5-4-4-3 3"/>
                </svg>
              </button>
              <span class="text-sm text-gray-300 font-medium group-hover:text-white">Activity</span>
            </div>
            <div class="flex flex-col items-center group">
              <button class="bg-gradient-to-br from-green-600 to-teal-500 text-white p-4 rounded-xl mb-2 shadow-sm group-hover:from-green-500 group-hover:to-teal-400 group-hover:scale-105 transition-all duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="12" x2="12" y1="2" y2="22"/>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
              </button>
              <span class="text-sm text-gray-300 font-medium group-hover:text-white">Exchange</span>
            </div>
          </div>

          <div class="mb-10">
            <div class="flex justify-between items-center mb-4">
              <div class="flex items-center text-gray-100 font-semibold text-lg">
                <div class="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M4 14a1 1 0 0 1-.37-.7c-.2-.54-.1-1.07.2-1.5l7.5-10a1 1 0 0 1 1.6.6c.2.54.1 1.07-.2 1.5l-7.5 10a1 1 0 0 1-1.6-.6Z"/>
                    <path d="M18 10a1 1 0 0 1 .37.7c-.2.54-.1 1.07-.2 1.5l-7.5 10a1 1 0 0 1-1.6-.6c-.2-.54-.1 1.07-.2 1.5l7.5-10a1 1 0 0 1 1.6.6Z"/>
                  </svg>
                </div>
                Instant Send
              </div>
              <button class="text-sm text-primary-400 hover:text-primary-300 transition-colors duration-200">
                View All
              </button>
            </div>
            <div class="flex items-center overflow-x-auto no-scrollbar space-x-4 py-2">
              <div class="flex-shrink-0 text-center transform transition-all duration-200 hover:scale-105 group">
                <div class="relative">
                  <img src="https://placehold.co/60x60/ADD8E6/000000?text=Isaac" alt="Isaac" class="w-16 h-16 rounded-full object-cover mb-1 shadow-md border-2 border-transparent group-hover:border-primary-400 transition-all duration-200">
                  <div class="absolute -bottom-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-2 border-gray-800"></div>
                </div>
                <span class="text-sm text-gray-300 font-medium">Isaac</span>
              </div>
              <div class="flex-shrink-0 text-center transform transition-all duration-200 hover:scale-105 group">
                <div class="relative">
                  <img src="https://placehold.co/60x60/FFB6C1/000000?text=Katy" alt="Katy" class="w-16 h-16 rounded-full object-cover mb-1 shadow-md border-2 border-transparent group-hover:border-primary-400 transition-all duration-200">
                  <div class="absolute -bottom-1 -right-1 w-5 h-5 bg-yellow-400 rounded-full border-2 border-gray-800"></div>
                </div>
                <span class="text-sm text-gray-300 font-medium">Katy</span>
              </div>
              <div class="flex-shrink-0 text-center transform transition-all duration-200 hover:scale-105 group">
                <div class="relative">
                  <img src="https://placehold.co/60x60/90EE90/000000?text=Jess" alt="Jess" class="w-16 h-16 rounded-full object-cover mb-1 shadow-md border-2 border-transparent group-hover:border-primary-400 transition-all duration-200">
                  <div class="absolute -bottom-1 -right-1 w-5 h-5 bg-red-400 rounded-full border-2 border-gray-800"></div>
                </div>
                <span class="text-sm text-gray-300 font-medium">Jess</span>
              </div>
              <div class="flex-shrink-0 text-center transform transition-all duration-200 hover:scale-105 group">
                <div class="relative">
                  <img src="https://placehold.co/60x60/FFD700/000000?text=Amy" alt="Amy" class="w-16 h-16 rounded-full object-cover mb-1 shadow-md border-2 border-transparent group-hover:border-primary-400 transition-all duration-200">
                  <div class="absolute -bottom-1 -right-1 w-5 h-5 bg-blue-400 rounded-full border-2 border-gray-800"></div>
                </div>
                <span class="text-sm text-gray-300 font-medium">Amy</span>
              </div>
              <div class="flex-shrink-0 text-center transform transition-all duration-200 hover:scale-105 group">
                <div class="w-16 h-16 bg-gray-700/50 rounded-full flex items-center justify-center shadow-md group-hover:bg-gray-600/50 transition-all duration-200 cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-400 group-hover:text-white">
                    <path d="M12 5v14"/><path d="M5 12h14"/>
                  </svg>
                </div>
                <span class="text-sm text-gray-400 font-medium">Add New</span>
              </div>
            </div>
          </div>

          <div>
            <div class="flex justify-between items-center mb-4">
              <div class="flex items-center text-gray-100 font-semibold text-lg">
                <div class="w-6 h-6 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center text-white mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                </div>
                Promotions
              </div>
              <button class="text-sm text-primary-400 hover:text-primary-300 transition-colors duration-200">
                See All
              </button>
            </div>
            <div class="flex overflow-x-auto no-scrollbar space-x-4 pb-2">
              <div class="flex-shrink-0 w-72 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-600/50 transform transition-all duration-300 hover:scale-[1.02] group">
                <div class="relative h-36 overflow-hidden">
                  <img src="https://placehold.co/600x300/6A5ACD/FFFFFF?text=MYDIN+PAY+Promo" alt="MYDIN PAY Promotion" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                  <div class="absolute top-2 left-2 bg-yellow-400 text-gray-900 text-xs font-bold px-2 py-1 rounded-full">
                    NEW
                  </div>
                </div>
                <div class="p-4">
                  <div class="flex items-center text-sm font-semibold text-gray-100 mb-2">
                    <div class="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold mr-2">M</div>
                    MYDIN PAY
                  </div>
                  <p class="text-xs text-gray-400 mb-2">Imbas & Bayar</p>
                  <p class="text-sm text-gray-300 mb-4">Install MYDIN PAY to get some rewards.</p>
                  <button class="w-full bg-gradient-to-r from-primary-600 to-primary-500 text-white py-2 rounded-lg text-sm font-semibold hover:from-primary-500 hover:to-primary-400 transition-all duration-200">
                    Learn More
                  </button>
                </div>
              </div>
              <div class="flex-shrink-0 w-72 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-600/50 transform transition-all duration-300 hover:scale-[1.02] group">
                <div class="relative h-36 overflow-hidden">
                  <img src="https://placehold.co/600x300/87CEEB/FFFFFF?text=Special+Offer" alt="Special Offer" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                  <div class="absolute top-2 left-2 bg-pink-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    LIMITED
                  </div>
                </div>
                <div class="p-4">
                  <div class="flex items-center text-sm font-semibold text-gray-100 mb-2">
                    <div class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold mr-2">P</div>
                    Partner Offers
                  </div>
                  <p class="text-xs text-gray-400 mb-2">Exclusive Deals</p>
                  <p class="text-sm text-gray-300 mb-4">Discover great savings from our partners.</p>
                  <button class="w-full bg-gradient-to-r from-secondary-600 to-secondary-500 text-white py-2 rounded-lg text-sm font-semibold hover:from-secondary-500 hover:to-secondary-400 transition-all duration-200">
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
}