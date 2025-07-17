export function renderSettings() {
  return `
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
      /* Custom styles for the toggle switch */
      .toggle-switch {
        position: relative;
        display: inline-block;
        width: 48px;
        height: 28px;
      }

      .toggle-switch input {
        opacity: 0;
        width: 0;
        height: 0;
      }

      .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        -webkit-transition: .4s;
        transition: .4s;
        border-radius: 28px;
      }

      .slider:before {
        position: absolute;
        content: "";
        height: 20px;
        width: 20px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        -webkit-transition: .4s;
        transition: .4s;
        border-radius: 50%;
      }

      input:checked + .slider {
        background-color: #2563eb; /* blue-600 */
      }

      input:focus + .slider {
        box-shadow: 0 0 1px #2563eb;
      }

      input:checked + .slider:before {
        -webkit-transform: translateX(20px);
        -ms-transform: translateX(20px);
        transform: translateX(20px);
      }
    </style>

    <div id="settings-main" class="w-full max-w-6xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden my-8 md:flex">
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

        <div class="p-6 bg-gray-50 flex-grow rounded-2xl md:rounded-t-none md:rounded-b-2xl">
          <!-- General Section -->
          <div class="mb-6">
            <h3 class="text-lg font-semibold text-gray-800 mb-4">General</h3>
            <ul class="bg-white rounded-xl shadow-sm overflow-hidden">
              <li class="border-b border-gray-200 last:border-b-0">
                <!-- Changed to an anchor tag to navigate to edit_profile_page.html -->
                <a href="edit_profile_page.html" class="w-full flex justify-between items-center p-4 hover:bg-gray-100 transition-colors duration-200">
                  <span class="text-gray-700">Edit Profile</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right text-gray-400"><path d="m9 18 6-6-6-6"/></svg>
                </a>
              </li>
              <li class="border-b border-gray-200 last:border-b-0">
                <a href="#" class="w-full flex justify-between items-center p-4 hover:bg-gray-100 transition-colors duration-200">
                  <span class="text-gray-700">Linked eWallets</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right text-gray-400"><path d="m9 18 6-6-6-6"/></svg>
                </a>
              </li>
              <li class="border-b border-gray-200 last:border-b-0">
                <a href="#" class="w-full flex justify-between items-center p-4 hover:bg-gray-100 transition-colors duration-200">
                  <span class="text-gray-700">Daily Spending Limit</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right text-gray-400"><path d="m9 18 6-6-6-6"/></svg>
                </a>
              </li>
              <li class="border-b border-gray-200 last:border-b-0">
                <div class="w-full flex justify-between items-center p-4">
                  <span class="text-gray-700">Enable offline mode</span>
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
      <div class="p-6 md:p-10 bg-gray-50 flex-grow md:w-1/2 lg:w-3/5">
        <!-- Notification Section -->
        <div class="mb-6">
          <h3 class="text-lg font-semibold text-gray-800 mb-4">Notification</h3>
          <ul class="bg-white rounded-xl shadow-sm overflow-hidden">
            <li class="border-b border-gray-200 last:border-b-0">
              <div class="w-full flex justify-between items-center p-4">
                <span class="text-gray-700">Push Notification</span>
                <label class="toggle-switch">
                  <input type="checkbox" checked>
                  <span class="slider"></span>
                </label>
              </div>
            </li>
            <li class="border-b border-gray-200 last:border-b-0">
              <div class="w-full flex justify-between items-center p-4">
                <span class="text-gray-700">Email Alerts</span>
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
          <h3 class="text-lg font-semibold text-gray-800 mb-4">Security & Privacy</h3>
          <ul class="bg-white rounded-xl shadow-sm overflow-hidden">
            <li class="border-b border-gray-200 last:border-b-0">
              <a href="#" class="w-full flex justify-between items-center p-4 hover:bg-gray-100 transition-colors duration-200">
                <span class="text-gray-700">Biometric Authentication</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right text-gray-400"><path d="m9 18 6-6-6-6"/></svg>
              </a>
            </li>
            <li class="border-b border-gray-200 last:border-b-0">
              <a href="#" class="w-full flex justify-between items-center p-4 hover:bg-gray-100 transition-colors duration-200">
                <span class="text-gray-700">Recent Login Activity</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right text-gray-400"><path d="m9 18 6-6-6-6"/></svg>
              </a>
            </li>
            <li class="border-b border-gray-200 last:border-b-0">
              <a href="#" class="w-full flex justify-between items-center p-4 hover:bg-gray-100 transition-colors duration-200">
                <span class="text-gray-700">Data Privacy Setting</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right text-gray-400"><path d="m9 18 6-6-6-6"/></svg>
              </a>
            </li>
          </ul>
        </div>

        <!-- Language Section -->
        <div class="mb-6">
          <h3 class="text-lg font-semibold text-gray-800 mb-4">Language</h3>
          <ul class="bg-white rounded-xl shadow-sm overflow-hidden">
            <li class="border-b border-gray-200 last:border-b-0">
              <a href="#" class="w-full flex justify-between items-center p-4 hover:bg-gray-100 transition-colors duration-200">
                <span class="text-gray-700">Language Selection</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right text-gray-400"><path d="m9 18 6-6-6-6"/></svg>
              </a>
            </li>
            <li class="border-b border-gray-200 last:border-b-0">
              <a href="#" class="w-full flex justify-between items-center p-4 hover:bg-gray-100 transition-colors duration-200">
                <span class="text-gray-700">Currency Format</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right text-gray-400"><path d="m9 18 6-6-6-6"/></svg>
              </a>
            </li>
          </ul>
        </div>

        <!-- Help & Support Section -->
        <div class="mb-6">
          <h3 class="text-lg font-semibold text-gray-800 mb-4">Help & Support</h3>
          <ul class="bg-white rounded-xl shadow-sm overflow-hidden">
            <li class="border-b border-gray-200 last:border-b-0">
              <a href="#" class="w-full flex justify-between items-center p-4 hover:bg-gray-100 transition-colors duration-200">
                <span class="text-gray-700">FAQ</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right text-gray-400"><path d="m9 18 6-6-6-6"/></svg>
              </a>
            </li>
            <li class="border-b border-gray-200 last:border-b-0">
              <a href="#" class="w-full flex justify-between items-center p-4 hover:bg-gray-100 transition-colors duration-200">
                <span class="text-gray-700">Contact Support</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right text-gray-400"><path d="m9 18 6-6-6-6"/></svg>
              </a>
            </li>
            <li class="border-b border-gray-200 last:border-b-0">
              <a href="#" class="w-full flex justify-between items-center p-4 hover:bg-gray-100 transition-colors duration-200">
                <span class="text-gray-700">Report a Problem</span>
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

    <script>
      // The showEditProfile and hideEditProfile functions are no longer needed
      // as navigation is handled by direct links.
    </script>
  `;
}
