export function renderEwallet() {
  return `
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
      /* Custom styles for the scrollbar */
      .no-scrollbar::-webkit-scrollbar {
          display: none;
      }
      .no-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
      }
    </style>
    <div class="w-full min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div class="w-full max-w-5xl bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">

        <!-- Left Section: GrabPay Card and Status -->
        <div class="md:w-1/2 p-8 bg-gradient-to-br from-blue-700 to-blue-500 text-white flex flex-col justify-between">
          <div class="mb-8">
            <h2 class="text-3xl font-bold mb-6">GrabPay</h2>

            <!-- GrabPay Card -->
            <div class="relative w-full h-48 bg-gradient-to-r from-green-400 to-green-600 rounded-2xl shadow-lg p-6 flex flex-col justify-between transform transition-transform duration-300 hover:scale-[1.02]">
              <div class="flex justify-between items-start">
                <div class="flex items-center">
                  <img src="https://placehold.co/30x30/FFFFFF/000000?text=GP" alt="GrabPay Logo" class="w-8 h-8 rounded-full mr-2">
                  <span class="text-xl font-semibold">GrabPay</span>
                </div>
                <span class="bg-purple-700 text-white text-xs font-semibold px-3 py-1 rounded-full">Primary</span>
              </div>
              <div class="text-lg tracking-wide font-mono mt-4">382 - 2349 - 2341 - 1312</div>
              <div class="flex justify-between items-end mt-auto">
                <div class="text-4xl font-bold">RM 446.30</div>
                <div class="text-sm font-medium">DANIEL JORDAN</div>
              </div>
            </div>

            <!-- Card Status -->
            <div class="mt-8">
              <div class="flex justify-between items-center text-white">
                <span class="text-lg font-semibold">Card Status</span>
                <span class="bg-green-500 text-white text-sm font-semibold px-4 py-1 rounded-full">Connected</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Section: Transactions -->
        <div class="md:w-1/2 p-8 bg-gray-50 flex flex-col">
          <h2 class="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-receipt text-blue-500 mr-2"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 17v1"/><path d="M12 6v1"/></svg>
            Transactions
          </h2>

          <!-- Transaction List -->
          <div class="flex-grow overflow-y-auto no-scrollbar">
            <!-- Transaction Item 1 -->
            <div class="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm mb-3 border border-gray-200 transform transition-transform duration-200 hover:scale-[1.01]">
              <div class="flex items-center">
                <div class="bg-blue-100 text-blue-600 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wallet"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h12a2 2 0 0 1 0 4H5a2 2 0 0 0 0 4h12a2 2 0 0 0 2-2v-3"/><path d="M10 12h.01"/></svg>
                </div>
                <div>
                  <div class="font-semibold text-gray-800">Golden Egg Restaurant</div>
                  <div class="text-sm text-gray-500">29 June 2025, 9:34PM</div>
                </div>
              </div>
              <div class="text-lg font-bold text-red-500">-RM256.70</div>
            </div>

            <!-- Transaction Item 2 -->
            <div class="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm mb-3 border border-gray-200 transform transition-transform duration-200 hover:scale-[1.01]">
              <div class="flex items-center">
                <div class="bg-blue-100 text-blue-600 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wallet"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h12a2 2 0 0 1 0 4H5a2 2 0 0 0 0 4h12a2 2 0 0 0 2-2v-3"/><path d="M10 12h.01"/></svg>
                </div>
                <div>
                  <div class="font-semibold text-gray-800">Jack Daniels</div>
                  <div class="text-sm text-gray-500">17 June 2025, 2:09PM</div>
                </div>
              </div>
              <div class="text-lg font-bold text-red-500">-RM80.70</div>
            </div>

            <!-- Transaction Item 3 -->
            <div class="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm mb-3 border border-gray-200 transform transition-transform duration-200 hover:scale-[1.01]">
              <div class="flex items-center">
                <div class="bg-blue-100 text-blue-600 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wallet"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h12a2 2 0 0 1 0 4H5a2 2 0 0 0 0 4h12a2 2 0 0 0 2-2v-3"/><path d="M10 12h.01"/></svg>
                </div>
                <div>
                  <div class="font-semibold text-gray-800">Yuki Ichiiba</div>
                  <div class="text-sm text-gray-500">10 June 2025, 5:00PM</div>
                </div>
              </div>
              <div class="text-lg font-bold text-green-500">+RM60.89</div>
            </div>

            <!-- Transaction Item 4 -->
            <div class="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm mb-3 border border-gray-200 transform transition-transform duration-200 hover:scale-[1.01]">
              <div class="flex items-center">
                <div class="bg-blue-100 text-blue-600 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wallet"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h12a2 2 0 0 1 0 4H5a2 2 0 0 0 0 4h12a2 2 0 0 0 2-2v-3"/><path d="M10 12h.01"/></svg>
                </div>
                <div>
                  <div class="font-semibold text-gray-800">Local Grocer</div>
                  <div class="text-sm text-gray-500">05 June 2025, 11:15AM</div>
                </div>
              </div>
              <div class="text-lg font-bold text-red-500">-RM45.00</div>
            </div>

            <!-- Transaction Item 5 -->
            <div class="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm mb-3 border border-gray-200 transform transition-transform duration-200 hover:scale-[1.01]">
              <div class="flex items-center">
                <div class="bg-blue-100 text-blue-600 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wallet"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h12a2 2 0 0 1 0 4H5a2 2 0 0 0 0 4h12a2 2 0 0 0 2-2v-3"/><path d="M10 12h.01"/></svg>
                </div>
                <div>
                  <div class="font-semibold text-gray-800">Online Subscription</div>
                  <div class="text-sm text-gray-500">01 June 2025, 8:00AM</div>
                </div>
              </div>
              <div class="text-lg font-bold text-red-500">-RM15.99</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}
