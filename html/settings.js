export function renderSettings() {
  return `
      <!-- Profile Section -->
      <div class="flex items-center mb-8">
        <img src="https://placehold.co/60x60/374151/9CA3AF?text=JD" alt="User Profile" class="w-16 h-16 rounded-full object-cover border-2 border-gray-600 shadow-md mr-4">
        <div>
          <div class="text-xl font-bold text-gray-100">Daniel Jordan</div>
          <div class="text-sm text-gray-400">ID: 273018404823</div>
        </div>
      </div>
      
      <!-- General Section -->
      <div class="mb-6">
        <h3 class="text-lg font-semibold text-gray-100 mb-4">General</h3>
        <ul class="bg-gray-800 rounded-xl shadow-sm overflow-hidden border border-gray-700">
          <li class="border-b border-gray-700 last:border-b-0">
            <a href="profile.html" class="w-full flex justify-between items-center p-4 hover:bg-gray-700 transition-colors duration-200">
              <span class="text-gray-200">Edit Profile</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right text-gray-400"><path d="m9 18 6-6-6-6"/></svg>
            </a>
          </li>
          <li class="border-b border-gray-700 last:border-b-0">
            <a href="#" class="w-full flex justify-between items-center p-4 hover:bg-gray-700 transition-colors duration-200">
              <span class="text-gray-200">Check eKYC</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right text-gray-400"><path d="m9 18 6-6-6-6"/></svg>
            </a>
          </li>
        </ul>
      </div>

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

      <!-- Logout Button -->
      <a href="../index.html" class="block w-full bg-red-500 text-white py-3 rounded-lg font-semibold text-center hover:bg-red-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
        Log out
      </a>
  `;
}