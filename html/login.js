/**
 * Returns the HTML string for the Login form.
 */
export function renderLoginForm() {
  return `
    <div class="w-full max-w-md mx-auto my-16 p-8 bg-gray-800 rounded-3xl shadow-2xl text-center">
      <h2 class="text-4xl font-bold gradient-text mb-6">Welcome Back to Trust-X!</h2>
      <p class="text-gray-300 mb-8 text-lg">
        Please log in to access your account and manage your finances.
      </p>
      <form id="loginForm" class="space-y-6">
        <div>
          <label for="username" class="sr-only">Username</label>
          <input id="username" name="username" type="text" autocomplete="username" required
                 class="block w-full px-4 py-3 rounded-xl border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                 placeholder="Username">
        </div>
        <div>
          <label for="password" class="sr-only">Password</label>
          <input id="password" name="password" type="password" autocomplete="current-password" required
                 class="block w-full px-4 py-3 rounded-xl border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                 placeholder="Password">
        </div>
        <div class="flex items-center justify-between">
          <div class="text-sm">
            <a href="#" class="font-medium text-primary-400 hover:text-primary-300 transition-colors duration-200">
              Forgot your password?
            </a>
          </div>
        </div>
        <div>
          <button type="submit"
                  class="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-lg font-bold text-white bg-gradient-to-r from-primary-600 to-secondary-500 hover:from-primary-500 hover:to-secondary-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all duration-300 transform hover:scale-105">
            Log In
          </button>
        </div>
        <div class="relative">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-t border-gray-700"></div>
          </div>
          <div class="relative flex justify-center text-sm">
            <span class="px-2 bg-gray-800 text-gray-400">Or</span>
          </div>
        </div>
        <div>
          <button type="button" id="logoutBtn"
                  class="w-full flex justify-center py-2 px-4 border border-gray-600 rounded-xl shadow-sm text-base font-medium text-gray-300 bg-transparent hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-all duration-300">
            Log Out from Other Devices
          </button>
        </div>
      </form>
      <p class="mt-8 text-center text-base text-gray-400">
        Don't have an account?
        <a href="signup.html" class="font-medium text-primary-400 hover:text-primary-300 transition-colors duration-200">
          Sign up now
        </a>
      </p>
    </div>
  `;
}

// Add this function to handle form submission and redirection
export function setupLoginRedirect() {
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', (event) => {
      event.preventDefault(); // Prevent default form submission

      const username = loginForm.username.value;
      const password = loginForm.password.value;

      if (username === 'admin' && password === 'admin') {
        console.log('Admin login successful!');
        window.location.href = 'admin_dashboard.html'; // Redirect to an admin dashboard page
      } else {
        console.log('Simulating user login...');
        window.location.href = 'dashboard.html'; // Redirect to regular user dashboard
      }
    });
  }

  // Handle logout button
  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      // In a real app, this would make an API call to invalidate sessions on other devices
      console.log('Logging out from other devices...');
      // Show confirmation to user
      alert('Successfully logged out from all other devices.');
    });
  }
}