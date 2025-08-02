/**
 * Returns the HTML string for the Signup form.
 */
export function renderSignupForm() {
  return `
    <div class="w-full max-w-md mx-auto my-16 p-8 bg-gray-800 rounded-3xl shadow-2xl text-center">
      <h2 class="text-4xl font-bold gradient-text mb-6">Create Your Trust-X Account</h2>
      <p class="text-gray-300 mb-8 text-lg">
        Sign up to start your journey with secure and easy financial management.
      </p>
      <form id="signupForm" class="space-y-6">
        <div>
          <label for="full-name" class="sr-only">Full Name</label>
          <input id="full-name" name="full-name" type="text" autocomplete="name" required
                 class="block w-full px-4 py-3 rounded-xl border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                 placeholder="Full Name">
        </div>
        <div>
          <label for="phone-number" class="sr-only">Phone Number</label>
          <input id="phone-number" name="phone-number" type="tel" autocomplete="tel"
                 class="block w-full px-4 py-3 rounded-xl border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                 placeholder="Phone Number">
        </div>
        <div>
          <label for="email" class="sr-only">Email address</label>
          <input id="email" name="email" type="email" autocomplete="email" required
                 class="block w-full px-4 py-3 rounded-xl border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                 placeholder="Email address">
        </div>
        <div>
          <label for="password" class="sr-only">Password</label>
          <input id="password" name="password" type="password" autocomplete="new-password" required
                 class="block w-full px-4 py-3 rounded-xl border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                 placeholder="Password">
        </div>
        <div>
          <label for="confirm-password" class="sr-only">Confirm Password</label>
          <input id="confirm-password" name="confirm-password" type="password" autocomplete="new-password" required
                 class="block w-full px-4 py-3 rounded-xl border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                 placeholder="Confirm Password">
        </div>
        <div>
          <button type="submit"
                  class="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-lg font-bold text-white bg-gradient-to-r from-primary-600 to-secondary-500 hover:from-primary-500 hover:to-secondary-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all duration-300 transform hover:scale-105">
            Sign Up
          </button>
        </div>
      </form>
      <p class="mt-8 text-center text-base text-gray-400">
        Already have an account?
        <a href="login.html" class="font-medium text-primary-400 hover:text-primary-300 transition-colors duration-200">
          Log in here
        </a>
      </p>
    </div>
  `;
}
