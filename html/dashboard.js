/*export function renderDashboard() {
  return `
    <h1>Dashboard</h1>
    <p>Welcome to your dashboard!</p>
  `;
}*/
export function renderDashboard() {
  // Inject Font Awesome if not already loaded
  if (!document.querySelector('link[href*="font-awesome"]')) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
    document.head.appendChild(link);
  }

  return `
    <div class="p-4 space-y-6">
      <!-- Greeting -->
      <div class="bg-gradient-to-r from-cyan-400 to-blue-600 text-white p-6 rounded-2xl shadow-md">
        <div class="flex justify-between items-start">
          <div>
            <h1 class="text-xl font-bold">Hello!</h1>
            <p class="text-sm">Good Morning Daniel</p>
          </div>
          <div class="flex gap-3">
            <div class="relative">
              <button class="bg-white text-blue-600 p-2 rounded-full shadow"><i class="fas fa-bell"></i></button>
              <span class="absolute top-0 right-0 bg-red-500 rounded-full w-2.5 h-2.5"></span>
            </div>
            <div class="relative">
              <button class="bg-white text-blue-600 p-2 rounded-full shadow"><i class="fas fa-user"></i></button>
              <span class="absolute top-0 right-0 bg-red-500 rounded-full w-2.5 h-2.5"></span>
            </div>
          </div>
        </div>

        <!-- E-Wallet Balance -->
        <div class="bg-white text-gray-800 rounded-xl p-4 mt-4 flex justify-between items-center shadow">
          <div>
            <p class="text-sm">Total E-Wallet Balance</p>
            <p class="text-2xl font-bold">RM 34,246.61</p>
          </div>
          <div class="bg-indigo-600 text-white p-3 rounded-xl shadow"><i class="fas fa-wallet"></i></div>
        </div>

        <!-- Actions -->
        <div class="grid grid-cols-4 gap-2 mt-6 text-center text-white">
          <div class="space-y-1">
            <div class="bg-white text-indigo-700 p-3 rounded-xl shadow inline-block"><i class="fas fa-arrow-up"></i></div>
            <p class="text-sm">Send</p>
          </div>
          <div class="space-y-1">
            <div class="bg-white text-indigo-700 p-3 rounded-xl shadow inline-block"><i class="fas fa-arrow-down"></i></div>
            <p class="text-sm">Receive</p>
          </div>
          <div class="space-y-1">
            <div class="bg-white text-indigo-700 p-3 rounded-xl shadow inline-block"><i class="fas fa-chart-line"></i></div>
            <p class="text-sm">Activity</p>
          </div>
          <div class="space-y-1">
            <div class="bg-white text-indigo-700 p-3 rounded-xl shadow inline-block"><i class="fas fa-exchange-alt"></i></div>
            <p class="text-sm">Exchange</p>
          </div>
        </div>
      </div>

      <!-- Instant Send -->
      <div>
        <h2 class="font-semibold text-gray-700 mb-2 flex items-center gap-1"><i class="fas fa-bolt text-indigo-600"></i> Instant Send</h2>
        <div class="bg-white p-3 rounded-xl shadow flex items-center gap-4 overflow-x-auto">
          <div class="flex-shrink-0 text-center">
            <img class="h-12 w-12 rounded-full object-cover" src="https://via.placeholder.com/48" alt="Issac" />
            <p class="text-sm mt-1">Issac</p>
          </div>
          <div class="flex-shrink-0 text-center">
            <img class="h-12 w-12 rounded-full object-cover" src="https://via.placeholder.com/48" alt="Katy" />
            <p class="text-sm mt-1">Katy</p>
          </div>
          <div class="flex-shrink-0 text-center">
            <img class="h-12 w-12 rounded-full object-cover" src="https://via.placeholder.com/48" alt="Jess" />
            <p class="text-sm mt-1">Jess</p>
          </div>
          <div class="flex-shrink-0 text-center">
            <img class="h-12 w-12 rounded-full object-cover" src="https://via.placeholder.com/48" alt="Amy" />
            <p class="text-sm mt-1">Amy</p>
          </div>
        </div>
      </div>

      <!-- Promotions -->
      <div>
        <h2 class="font-semibold text-gray-700 mb-2 flex items-center gap-1"><i class="fas fa-star text-indigo-600"></i> Promotions</h2>
        <div class="space-y-3">
          <div class="bg-white rounded-xl overflow-hidden shadow">
            <img src="https://via.placeholder.com/350x120.png?text=MYDIN+PAY+Promotion" alt="Promotion" class="w-full" />
            <div class="p-3">
              <p class="text-sm text-gray-600">Install MYDIN PAY to get some rewards.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}
