/**
 * Returns the HTML string for a simple E-KYC Dashboard, including promotions and information.
 * This version assumes the registration process is in a separate HTML page.
 */
export function renderDashboard() {
  return `
    <div class="w-full max-w-4xl mx-auto rounded-xl shadow-2xl overflow-hidden my-6 transition-all duration-300 hover:shadow-xl relative">
      <div class="relative p-8 md:p-10 text-white flex flex-col justify-between">
        <div class="text-2xl font-semibold drop-shadow-sm mb-6">Hello, <span class="gradient-text font-bold">User</span>!</div>
        
        <div class="w-full bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg text-white mt-auto transform transition-all duration-300 hover:scale-[1.02] border border-white/10">
          <div class="flex justify-between items-center mb-4">
            <h3 class="text-lg font-semibold">Get Started</h3>
          </div>
          <p class="text-sm text-gray-300 mb-4">Complete your E-KYC registration to unlock full access to your account.</p>
          
          <a href="registration.html" class="block w-full text-center bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-lg text-sm font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-200">
            Start Verification Process
          </a>
        </div>
      </div>

      <div class="p-6 md:p-10 bg-gray-800/50 flex-grow backdrop-blur-sm">
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
        
        <h2 class="text-gray-100 font-semibold text-lg mb-4">Use your eKYC to register for accounts</h2>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">

            <div class="flex flex-col items-center justify-center p-3 bg-gray-700/50 rounded-lg shadow-md text-center hover:bg-gray-600/50 transition-colors duration-200">
              <img src="../images/maybank.png" alt="Maybank Logo" class="w-10 h-10 rounded-full object-cover mb-2">
              <h4 class="text-sm font-semibold text-gray-100">Maybank</h4>
              <p class="text-xs text-gray-400">Leading Malaysian bank</p>
            </div>
            <div class="flex flex-col items-center justify-center p-3 bg-gray-700/50 rounded-lg shadow-md text-center hover:bg-gray-600/50 transition-colors duration-200">
              <img src="../images/touchngo.png" alt="Touch ‘n Go eWallet Logo" class="w-10 h-10 rounded-full object-cover mb-2">
              <h4 class="text-sm font-semibold text-gray-100">Touch ‘n Go eWallet</h4>
              <p class="text-xs text-gray-400">Popular digital wallet in Malaysia</p>
            </div>
            <div class="flex flex-col items-center justify-center p-3 bg-gray-700/50 rounded-lg shadow-md text-center hover:bg-gray-600/50 transition-colors duration-200">
              <img src="../images/luno.png" alt="Luno Logo" class="w-10 h-10 rounded-full object-cover mb-2">
              <h4 class="text-sm font-semibold text-gray-100">Luno</h4>
              <p class="text-xs text-gray-400">Licensed cryptocurrency exchange</p>
            </div>
            <div class="flex flex-col items-center justify-center p-3 bg-gray-700/50 rounded-lg shadow-md text-center hover:bg-gray-600/50 transition-colors duration-200">
              <img src="../images/jpn.png" alt="Jabatan Pendaftaran Negara (JPN) Logo" class="w-10 h-10 rounded-full object-cover mb-2">
              <h4 class="text-sm font-semibold text-gray-100">JPN e-Daftar</h4>
              <p class="text-xs text-gray-400">National registration department</p>
            </div>
            <div class="flex flex-col items-center justify-center p-3 bg-gray-700/50 rounded-lg shadow-md text-center hover:bg-gray-600/50 transition-colors duration-200">
              <img src="../images/mytax.png" alt="Lembaga Hasil Dalam Negeri (LHDN) Logo" class="w-10 h-10 rounded-full object-cover mb-2">
              <h4 class="text-sm font-semibold text-gray-100">MyTax</h4>
              <p class="text-xs text-gray-400">Inland Revenue Board</p>
            </div>
            <div class="flex flex-col items-center justify-center p-3 bg-gray-700/50 rounded-lg shadow-md text-center hover:bg-gray-600/50 transition-colors duration-200">
              <img src="../images/myimm.png" alt="Jabatan Imigresen Malaysia Logo" class="w-10 h-10 rounded-full object-cover mb-2">
              <h4 class="text-sm font-semibold text-gray-100">MyIMM</h4>
              <p class="text-xs text-gray-400">Immigration department</p>
            </div>
            <div class="flex flex-col items-center justify-center p-3 bg-gray-700/50 rounded-lg shadow-md text-center hover:bg-gray-600/50 transition-colors duration-200">
              <img src="../images/jobstreet.png" alt="JobStreet Logo" class="w-10 h-10 rounded-full object-cover mb-2">
              <h4 class="text-sm font-semibold text-gray-100">JobStreet</h4>
              <p class="text-xs text-gray-400">Malaysia’s top job portal</p>
            </div>
            <div class="flex flex-col items-center justify-center p-3 bg-gray-700/50 rounded-lg shadow-md text-center hover:bg-gray-600/50 transition-colors duration-200">
              <img src="../images/linkedin.png" alt="LinkedIn Logo" class="w-10 h-10 rounded-full object-cover mb-2">
              <h4 class="text-sm font-semibold text-gray-100">LinkedIn</h4>
              <p class="text-xs text-gray-400">Global professional network</p>
            </div>
            <div class="flex flex-col items-center justify-center p-3 bg-gray-700/50 rounded-lg shadow-md text-center hover:bg-gray-600/50 transition-colors duration-200">
              <img src="../images/upwork.png" alt="Upwork Logo" class="w-10 h-10 rounded-full object-cover mb-2">
              <h4 class="text-sm font-semibold text-gray-100">Upwork</h4>
              <p class="text-xs text-gray-400">Leading freelance marketplace</p>
            </div>
            <div class="flex flex-col items-center justify-center p-3 bg-gray-700/50 rounded-lg shadow-md text-center hover:bg-gray-600/50 transition-colors duration-200">
              <img src="../images/shopee.png" alt="Shopee Logo" class="w-10 h-10 rounded-full object-cover mb-2">
              <h4 class="text-sm font-semibold text-gray-100">Shopee</h4>
              <p class="text-xs text-gray-400">E-commerce platform with financial services</p>
            </div>
            <div class="flex flex-col items-center justify-center p-3 bg-gray-700/50 rounded-lg shadow-md text-center hover:bg-gray-600/50 transition-colors duration-200">
              <img src="../images/jtexpress.png" alt="J&T Express Logo" class="w-10 h-10 rounded-full object-cover mb-2">
              <h4 class="text-sm font-semibold text-gray-100">J&T Express</h4>
              <p class="text-xs text-gray-400">Courier and delivery service</p>
            </div>
            <div class="flex flex-col items-center justify-center p-3 bg-gray-700/50 rounded-lg shadow-md text-center hover:bg-gray-600/50 transition-colors duration-200">
              <img src="../images/atome.png" alt="Atome Logo" class="w-10 h-10 rounded-full object-cover mb-2">
              <h4 class="text-sm font-semibold text-gray-100">Atome</h4>
              <p class="text-xs text-gray-400">Buy Now, Pay Later provider</p>
            </div>
            <div class="flex flex-col items-center justify-center p-3 bg-gray-700/50 rounded-lg shadow-md text-center hover:bg-gray-600/50 transition-colors duration-200">
              <img src="../images/kpj.png" alt="KPJ Healthcare Logo" class="w-10 h-10 rounded-full object-cover mb-2">
              <h4 class="text-sm font-semibold text-gray-100">KPJ Healthcare</h4>
              <p class="text-xs text-gray-400">Major hospital group</p>
            </div>
            <div class="flex flex-col items-center justify-center p-3 bg-gray-700/50 rounded-lg shadow-md text-center hover:bg-gray-600/50 transition-colors duration-200">
              <img src="../images/doctoroncall.png" alt="DoctorOnCall Logo" class="w-10 h-10 rounded-full object-cover mb-2">
              <h4 class="text-sm font-semibold text-gray-100">DoctorOnCall</h4>
              <p class="text-xs text-gray-400">Telemedicine platform</p>
            </div>
            <div class="flex flex-col items-center justify-center p-3 bg-gray-700/50 rounded-lg shadow-md text-center hover:bg-gray-600/50 transition-colors duration-200">
              <img src="../images/pruservices.png" alt="Prudential Malaysia Logo" class="w-10 h-10 rounded-full object-cover mb-2">
              <h4 class="text-sm font-semibold text-gray-100">PRUServices</h4>
              <p class="text-xs text-gray-400">Insurance with health benefits</p>
            </div>
            <div class="flex flex-col items-center justify-center p-3 bg-gray-700/50 rounded-lg shadow-md text-center hover:bg-gray-600/50 transition-colors duration-200">
              <img src="../images/airasia.png" alt="AirAsia Logo" class="w-10 h-10 rounded-full object-cover mb-2">
              <h4 class="text-sm font-semibold text-gray-100">AirAsia</h4>
              <p class="text-xs text-gray-400">Budget airline with super app services</p>
            </div>
            <div class="flex flex-col items-center justify-center p-3 bg-gray-700/50 rounded-lg shadow-md text-center hover:bg-gray-600/50 transition-colors duration-200">
              <img src="../images/myairport.png" alt="KLIA (Malaysia Airports) Logo" class="w-10 h-10 rounded-full object-cover mb-2">
              <h4 class="text-sm font-semibold text-gray-100">MYAirport</h4>
              <p class="text-xs text-gray-400">National airport operator</p>
            </div>
            <div class="flex flex-col items-center justify-center p-3 bg-gray-700/50 rounded-lg shadow-md text-center hover:bg-gray-600/50 transition-colors duration-200">
              <img src="../images/agoda.png" alt="Agoda Logo" class="w-10 h-10 rounded-full object-cover mb-2">
              <h4 class="text-sm font-semibold text-gray-100">Agoda</h4>
              <p class="text-xs text-gray-400">Online hotel and travel booking platform</p>
            </div>
            <div class="flex flex-col items-center justify-center p-3 bg-gray-700/50 rounded-lg shadow-md text-center hover:bg-gray-600/50 transition-colors duration-200">
              <img src="../images/tinder.png" alt="Tinder Logo" class="w-10 h-10 rounded-full object-cover mb-2">
              <h4 class="text-sm font-semibold text-gray-100">Tinder</h4>
              <p class="text-xs text-gray-400">Dating app with identity verification</p>
            </div>
            <div class="flex flex-col items-center justify-center p-3 bg-gray-700/50 rounded-lg shadow-md text-center hover:bg-gray-600/50 transition-colors duration-200">
              <img src="../images/facebook.png" alt="Meta (Facebook) Logo" class="w-10 h-10 rounded-full object-cover mb-2">
              <h4 class="text-sm font-semibold text-gray-100">Facebook</h4>
              <p class="text-xs text-gray-400">Social platform with verified accounts</p>
            </div>
            <div class="flex flex-col items-center justify-center p-3 bg-gray-700/50 rounded-lg shadow-md text-center hover:bg-gray-600/50 transition-colors duration-200">
              <img src="../images/instagram.png" alt="Meta (Instagram) Logo" class="w-10 h-10 rounded-full object-cover mb-2">
              <h4 class="text-sm font-semibold text-gray-100">Instagram</h4>
              <p class="text-xs text-gray-400">Social platform with verified accounts</p>
            </div>
            <div class="flex flex-col items-center justify-center p-3 bg-gray-700/50 rounded-lg shadow-md text-center hover:bg-gray-600/50 transition-colors duration-200">
              <img src="../images/coursera.png" alt="Coursera Logo" class="w-10 h-10 rounded-full object-cover mb-2">
              <h4 class="text-sm font-semibold text-gray-100">Coursera</h4>
              <p class="text-xs text-gray-400">Online learning with identity-linked certifications</p>
            </div>

        </div>
      </div>
    </div>
  `;
}