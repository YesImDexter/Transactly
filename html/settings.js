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

    <div id="settings-main" class="w-full max-w-md mx-auto bg-white rounded-3xl shadow-xl overflow-hidden my-8">
      <!-- Profile Section -->
      <div class="bg-gradient-to-br from-blue-700 to-blue-500 p-6 text-white flex items-center rounded-t-3xl">
        <img src="https://placehold.co/60x60/ADD8E6/000000?text=JD" alt="User Profile" class="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md mr-4">
        <div>
          <div class="text-xl font-bold">Daniel Jordan</div>
          <div class="text-sm text-blue-100">ID: 273018404823</div>
        </div>
      </div>

      <div class="p-6 bg-gray-50">
        <!-- General Section -->
        <div class="mb-6">
          <h3 class="text-lg font-semibold text-gray-800 mb-4">General</h3>
          <ul class="bg-white rounded-xl shadow-sm overflow-hidden">
            <li class="border-b border-gray-200 last:border-b-0">
              <button class="w-full flex justify-between items-center p-4 hover:bg-gray-100 transition-colors duration-200" onclick="showEditProfile()">
                <span class="text-gray-700">Edit Profile</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right text-gray-400"><path d="m9 18 6-6-6-6"/></svg>
              </button>
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

        <!-- Logout Button -->
        <button class="w-full bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
          Log out
        </button>
      </div>
    </div>

    <!-- Edit Profile Sub-page -->
    <div id="edit-profile-page" class="w-full max-w-md mx-auto bg-white rounded-3xl shadow-xl overflow-hidden my-8 hidden">
      <div class="bg-gradient-to-br from-blue-700 to-blue-500 p-4 text-white flex items-center rounded-t-3xl">
        <button onclick="hideEditProfile()" class="p-2 rounded-full hover:bg-white hover:bg-opacity-20 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 mr-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-left"><path d="m15 18-6-6 6-6"/></svg>
        </button>
        <h2 class="text-xl font-bold flex-grow text-center">Edit Profile</h2>
        <div class="w-10"></div> <!-- Spacer to center the title -->
      </div>

      <div class="p-6 bg-gray-50 text-center">
        <div class="relative w-32 h-32 mx-auto mb-6">
          <img src="https://placehold.co/128x128/ADD8E6/000000?text=JD" alt="Profile Picture" class="w-full h-full rounded-full object-cover border-4 border-white shadow-lg">
          <button class="absolute bottom-0 right-0 bg-blue-600 text-white p-2 rounded-full shadow-md hover:bg-blue-700 transition-colors duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-camera"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>
          </button>
        </div>

        <div class="mb-4 text-left">
          <label for="fullName" class="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
          <input type="text" id="fullName" value="Daniel Jordan" class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
        </div>
        <div class="mb-4 text-left">
          <label for="username" class="block text-sm font-medium text-gray-700 mb-1">Username</label>
          <input type="text" id="username" value="Daniel" class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
        </div>
        <div class="mb-4 text-left">
          <label for="phoneNumber" class="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
          <input type="tel" id="phoneNumber" value="01112564893" class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
        </div>
        <div class="mb-4 text-left">
          <label for="emailAddress" class="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
          <input type="email" id="emailAddress" value="DanielJordan@gmail.com" class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
        </div>
        <div class="mb-6 text-left">
          <label for="password" class="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input type="password" id="password" value="********" class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
        </div>

        <button class="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
          Save Changes
        </button>
      </div>
    </div>

    <script>
      function showEditProfile() {
        document.getElementById('settings-main').classList.add('hidden');
        document.getElementById('edit-profile-page').classList.remove('hidden');
      }

      function hideEditProfile() {
        document.getElementById('settings-main').classList.remove('hidden');
        document.getElementById('edit-profile-page').classList.add('hidden');
      }
    </script>
  `;
}
