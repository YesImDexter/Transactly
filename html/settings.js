export function renderSettings() {
  return `
    <div id="settings-main" class="w-full max-w-6xl mx-auto bg-gray-800 rounded-3xl shadow-xl overflow-hidden my-8 md:flex border border-gray-700">
      <!-- Left Section for Profile and General Settings -->
      <div class="relative bg-gradient-to-br from-blue-700 to-blue-500 p-8 md:p-10 text-white rounded-b-3xl md:rounded-r-none md:rounded-l-3xl flex flex-col justify-between md:w-1/2 lg:w-2/5">
        <!-- Profile Section -->
        <div class="p-6 text-white flex items-center">
          <img src="https://placehold.co/60x60/ADD8E6/000000?text=JD" alt="User Profile" class="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md mr-4">
          <div>
            <div class="text-xl font-bold">Daniel Jordan</div>
            <div class="text-sm text-blue-100">ID: 273018404823</div>
          </div>
        </div>

        <div class="p-6 bg-gray-900 flex-grow rounded-2xl md:rounded-t-none md:rounded-b-2xl border border-gray-700">
          <!-- General Section -->
          <div class="mb-6">
            <h3 class="text-lg font-semibold text-gray-100 mb-4">General</h3>
            <ul class="bg-gray-800 rounded-xl shadow-sm overflow-hidden border border-gray-700">
              <li class="border-b border-gray-700 last:border-b-0">
                <!-- Changed to an anchor tag to navigate to profile.html -->
                <a href="profile.html" class="w-full flex justify-between items-center p-4 hover:bg-gray-700 transition-colors duration-200">
                  <span class="text-gray-200">Edit Profile</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right text-gray-400"><path d="m9 18 6-6-6-6"/></svg>
                </a>
              </li>
              <li class="border-b border-gray-700 last:border-b-0">
                <a href="#" class="w-full flex justify-between items-center p-4 hover:bg-gray-700 transition-colors duration-200">
                  <span class="text-gray-200">Linked eWallets</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right text-gray-400"><path d="m9 18 6-6-6-6"/></svg>
                </a>
              </li>
              <li class="border-b border-gray-700 last:border-b-0">
                <a href="#" class="w-full flex justify-between items-center p-4 hover:bg-gray-700 transition-colors duration-200">
                  <span class="text-gray-200">Daily Spending Limit</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right text-gray-400"><path d="m9 18 6-6-6-6"/></svg>
                </a>
              </li>
              <li class="border-b border-gray-700 last:border-b-0">
                <div class="w-full flex justify-between items-center p-4">
                  <span class="text-gray-200">Enable offline mode</span>
                  <label class="toggle-switch">
                    <input type="checkbox" checked>
                    <span class="slider"></span>
                  </label>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Right Section for Other Settings Categories -->
      <div class="p-6 md:p-10 bg-gray-900 flex-grow md:w-1/2 lg:w-3/5">
        <!-- Notification Section -->
        <div class="mb-6">
          <h3 class="text-lg font-semibold text-gray-100 mb-4">Notification</h3>
          <ul class="bg-gray-800 rounded-xl shadow-sm overflow-hidden border border-gray-700">
            <li class="border-b border-gray-700 last:border-b-0">
              <div class="w-full flex justify-between items-center p-4">
                <span class="text-gray-200">Push Notification</span>
                <label class="toggle-switch">
                  <input type="checkbox" checked>
                  <span class="slider"></span>
                </label>
              </div>
            </li>
            <li class="border-b border-gray-700 last:border-b-0">
              <div class="w-full flex justify-between items-center p-4">
                <span class="text-gray-200">Email Alerts</span>
                <label class="toggle-switch">
                  <input type="checkbox">
                  <span class="slider"></span>
                </label>
              </div>
            </li>
          </ul>
        </div>

        <!-- Security & Privacy Section -->
        <div class="mb-6">
          <h3 class="text-lg font-semibold text-gray-100 mb-4">Security & Privacy</h3>
          <ul class="bg-gray-800 rounded-xl shadow-sm overflow-hidden border border-gray-700">
            <li class="border-b border-gray-700 last:border-b-0">
              <a href="#" class="w-full flex justify-between items-center p-4 hover:bg-gray-700 transition-colors duration-200">
                <span class="text-gray-200">Biometric Authentication</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right text-gray-400"><path d="m9 18 6-6-6-6"/></svg>
              </a>
            </li>
            <li class="border-b border-gray-700 last:border-b-0">
              <a href="#" class="w-full flex justify-between items-center p-4 hover:bg-gray-700 transition-colors duration-200">
                <span class="text-gray-200">Recent Login Activity</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right text-gray-400"><path d="m9 18 6-6-6-6"/></svg>
              </a>
            </li>
            <li class="border-b border-gray-700 last:border-b-0">
              <a href="#" class="w-full flex justify-between items-center p-4 hover:bg-gray-700 transition-colors duration-200">
                <span class="text-gray-200">Data Privacy Setting</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right text-gray-400"><path d="m9 18 6-6-6-6"/></svg>
              </a>
            </li>
          </ul>
        </div>

        <!-- Language Section -->
        <div class="mb-6">
          <h3 class="text-lg font-semibold text-gray-100 mb-4">Language</h3>
          <ul class="bg-gray-800 rounded-xl shadow-sm overflow-hidden border border-gray-700">
            <li class="border-b border-gray-700 last:border-b-0">
              <a href="#" class="w-full flex justify-between items-center p-4 hover:bg-gray-700 transition-colors duration-200">
                <span class="text-gray-200">Language Selection</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right text-gray-400"><path d="m9 18 6-6-6-6"/></svg>
              </a>
            </li>
            <li class="border-b border-gray-700 last:border-b-0">
              <a href="#" class="w-full flex justify-between items-center p-4 hover:bg-gray-700 transition-colors duration-200">
                <span class="text-gray-200">Currency Format</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right text-gray-400"><path d="m9 18 6-6-6-6"/></svg>
              </a>
            </li>
          </ul>
        </div>

        <!-- Help & Support Section -->
        <div class="mb-6">
          <h3 class="text-lg font-semibold text-gray-100 mb-4">Help & Support</h3>
          <ul class="bg-gray-800 rounded-xl shadow-sm overflow-hidden border border-gray-700">
            <li class="border-b border-gray-700 last:border-b-0">
              <a href="#" class="w-full flex justify-between items-center p-4 hover:bg-gray-700 transition-colors duration-200">
                <span class="text-gray-200">FAQ</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right text-gray-400"><path d="m9 18 6-6-6-6"/></svg>
              </a>
            </li>
            <li class="border-b border-gray-700 last:border-b-0">
              <a href="#" class="w-full flex justify-between items-center p-4 hover:bg-gray-700 transition-colors duration-200">
                <span class="text-gray-200">Contact Support</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right text-gray-400"><path d="m9 18 6-6-6-6"/></svg>
              </a>
            </li>
            <li class="border-b border-gray-700 last:border-b-0">
              <a href="#" class="w-full flex justify-between items-center p-4 hover:bg-gray-700 transition-colors duration-200">
                <span class="text-gray-200">Report a Problem</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right text-gray-400"><path d="m9 18 6-6-6-6"/></svg>
              </a>
            </li>
          </ul>
        </div>

        <!-- Logout Button - Now an anchor tag to navigate to index.html -->
        <a href="../index.html" class="block w-full bg-red-500 text-white py-3 rounded-lg font-semibold text-center hover:bg-red-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
          Log out
        </a>
      </div>
    </div>
  `;
}
