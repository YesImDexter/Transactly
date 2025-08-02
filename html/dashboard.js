/**
 * Returns the HTML string for a simple E-KYC Dashboard, including promotions and information.
 * This version assumes the registration process is in a separate HTML page.
 */
export function renderDashboard() {
  return `
    <div class="w-full max-w-6xl mx-auto rounded-xl shadow-2xl overflow-hidden my-6 md:flex transition-all duration-300 hover:shadow-xl relative">
      <div class="relative p-8 md:p-10 text-white flex flex-col justify-between md:w-1/2 lg:w-2/5">
        <div class="text-2xl font-semibold drop-shadow-sm mb-6">Hello, <span class="gradient-text font-bold">User</span>!</div>
        
        <div class="w-full bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg text-white mt-auto transform transition-all duration-300 hover:scale-[1.02] border border-white/10">
          <div class="flex justify-between items-center mb-4">
            <h3 class="text-lg font-semibold">Get Started</h3>
          </div>
          <p class="text-sm text-gray-300 mb-4">Complete your E-KYC registration to unlock full access to your account.</p>
          <button class="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-lg text-sm font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-200">
            Start Verification Process
          </button>
        </div>
      </div>

      <div class="p-6 md:p-10 bg-gray-800/50 flex-grow md:w-1/2 lg:w-3/5 backdrop-blur-sm">
        <h2 class="text-gray-100 font-semibold text-lg mb-4">Information</h2>
        <div class="space-y-4 mb-10">
          <div class="w-full text-left p-4 bg-gray-700/50 rounded-lg shadow-md">
            <h3 class="text-lg font-semibold text-gray-100 mb-2">What is E-KYC?</h3>
            <p class="text-sm text-gray-400">E-KYC is the electronic process of verifying your identity to ensure a secure and trusted account. It typically involves uploading an ID and performing a face scan.</p>
          </div>
          <div class="w-full text-left p-4 bg-gray-700/50 rounded-lg shadow-md">
            <h3 class="text-lg font-semibold text-gray-100 mb-2">Why is it required?</h3>
            <p class="text-sm text-gray-400">This process helps us comply with regulatory requirements and protect your account from fraud, ensuring a safe platform for all users.</p>
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