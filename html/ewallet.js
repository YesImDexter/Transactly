// Define wallet data with associated transactions
const walletData = [
  {
    id: 'grabpay',
    name: 'GrabPay',
    logo: 'https://placehold.co/30x30/FFFFFF/000000?text=GP',
    type: 'Primary',
    cardNumber: '382 - 2349 - 2341 - 1312',
    balance: '446.30',
    bgColor: 'from-green-400 to-green-600',
    transactions: [
      { id: 1, name: 'Golden Egg Restaurant', date: '29 June 2025, 9:34PM', amount: '-256.70' },
      { id: 2, name: 'Local Grocer', date: '05 June 2025, 11:15AM', amount: '-45.00' },
      { id: 3, name: 'Online Subscription', date: '01 June 2025, 8:00AM', amount: '-15.99' },
      { id: 4, name: 'Coffee Shop', date: '28 May 2025, 10:00AM', amount: '-12.50' },
      { id: 5, name: 'Bakery', date: '27 May 2025, 3:00PM', amount: '-30.00' }
    ]
  },
  {
    id: 'visa_credit',
    name: 'Visa Credit',
    logo: 'https://placehold.co/30x30/FFFFFF/000000?text=Visa',
    type: 'Credit',
    cardNumber: '421 - 5678 - 9012 - 3456',
    balance: '1,200.50',
    bgColor: 'from-blue-400 to-blue-600',
    transactions: [
      { id: 6, name: 'Airline Ticket', date: '28 June 2025, 10:00AM', amount: '-550.00' },
      { id: 7, name: 'Hotel Booking', date: '25 June 2025, 3:30PM', amount: '-300.00' },
      { id: 8, name: 'Duty Free Shop', date: '20 June 2025, 9:00PM', amount: '-75.20' },
      { id: 9, name: 'Online Course', date: '15 June 2025, 1:00PM', amount: '-150.00' },
      { id: 10, name: 'Designer Clothes', date: '10 June 2025, 5:00PM', amount: '-250.00' }
    ]
  },
  {
    id: 'mastercard_debit',
    name: 'Mastercard Debit',
    logo: 'https://placehold.co/30x30/FFFFFF/000000?text=MC',
    type: 'Debit',
    cardNumber: '543 - 2109 - 8765 - 4321',
    balance: '890.15',
    bgColor: 'from-gray-700 to-gray-900',
    transactions: [
      { id: 11, name: 'Supermarket', date: '15 July 2025, 1:00PM', amount: '-88.50' },
      { id: 12, name: 'Petrol Station', date: '14 July 2025, 4:00PM', amount: '-60.00' },
      { id: 13, name: 'Online Shopping', date: '12 July 2025, 11:00AM', amount: '-120.00' },
      { id: 14, name: 'Utility Bill', date: '10 July 2025, 9:00AM', amount: '-70.00' },
      { id: 15, name: 'Restaurant Dinner', date: '08 July 2025, 8:00PM', amount: '-95.00' }
    ]
  },
  {
    id: 'tng_ewallet',
    name: 'Touch \'n Go',
    logo: 'https://placehold.co/30x30/FFFFFF/000000?text=TnG',
    type: 'Secondary',
    cardNumber: '789 - 1234 - 5678 - 9012',
    balance: '123.45',
    bgColor: 'from-pink-400 to-red-500',
    transactions: [
      { id: 16, name: 'Toll Payment', date: '10 July 2025, 7:00AM', amount: '-5.20' },
      { id: 17, name: 'Parking Fee', date: '09 July 2025, 6:00PM', amount: '-3.00' },
      { id: 18, name: 'Convenience Store', date: '08 July 2025, 1:00PM', amount: '-18.70' },
      { id: 19, name: 'QR Payment Food', date: '07 July 2025, 12:00PM', amount: '-25.00' },
      { id: 20, name: 'Bus Fare', date: '06 July 2025, 8:00AM', amount: '-2.50' }
    ]
  }
];

// Helper function to render transactions for a given array
function generateTransactionHTML(transactions) {
  if (!transactions || transactions.length === 0) {
    return `<div class="text-center text-gray-500 py-4">No transactions found for this wallet.</div>`;
  }
  return transactions.map(transaction => `
    <div class="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm mb-3 border border-gray-200 transform transition-transform duration-200 hover:scale-[1.01]">
      <div class="flex items-center">
        <div class="bg-blue-100 text-blue-600 p-3 rounded-full mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wallet"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h12a2 2 0 0 1 0 4H5a2 2 0 0 0 0 4h12a2 2 0 0 0 2-2v-3"/><path d="M10 12h.01"/></svg>
        </div>
        <div>
          <div class="font-semibold text-gray-800">${transaction.name}</div>
          <div class="text-sm text-gray-500">${transaction.date}</div>
        </div>
      </div>
      <div class="text-lg font-bold ${parseFloat(transaction.amount) < 0 ? 'text-red-500' : 'text-green-500'}">RM${transaction.amount}</div>
    </div>
  `).join('');
}

export function renderEwallet() {
  // Get initial transactions for the first wallet
  const initialTransactionsHTML = generateTransactionHTML(walletData[0].transactions);

  return `
    <div class="w-full min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div class="w-full max-w-5xl bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">

        <div class="md:w-1/2 p-8 bg-gradient-to-br from-blue-700 to-blue-500 text-white flex flex-col justify-between">
          <div class="mb-8">
            <h2 class="text-3xl font-bold mb-6">Your Wallets</h2>

            <div class="flex space-x-6 overflow-x-auto pb-4 no-scrollbar">
              ${walletData.map((wallet, index) => `
                <div class="wallet-card flex-shrink-0 relative w-80 h-48 bg-gradient-to-r ${wallet.bgColor} rounded-2xl shadow-lg p-6 flex flex-col justify-between transform transition-transform duration-300 hover:scale-[1.02] cursor-pointer ${index === 0 ? 'border-4 border-yellow-300' : ''}" data-wallet-id="${wallet.id}">
                  <div class="flex justify-between items-start">
                    <div class="flex items-center">
                      <img src="${wallet.logo}" alt="${wallet.name} Logo" class="w-8 h-8 rounded-full mr-2">
                      <span class="text-xl font-semibold">${wallet.name}</span>
                    </div>
                    <span class="bg-purple-700 text-white text-xs font-semibold px-3 py-1 rounded-full">${wallet.type}</span>
                  </div>
                  <div class="text-lg tracking-wide font-mono mt-4">${wallet.cardNumber}</div>
                  <div class="flex justify-between items-end mt-auto">
                    <div class="text-4xl font-bold">RM ${wallet.balance}</div>
                    <div class="text-sm font-medium">DANIEL JORDAN</div>
                  </div>
                </div>
              `).join('')}
            </div> <button class="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold text-lg hover:bg-indigo-700 transition-colors duration-200 mt-6">
              + Add New Wallet
            </button>
          </div>
        </div>

        <div class="md:w-1/2 p-8 bg-gray-50 flex flex-col">
          <h2 class="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-receipt text-blue-500 mr-2"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 17v1"/><path d="M12 6v1"/></svg>
            Transactions
          </h2>

          <div id="transaction-list" class="flex-grow overflow-y-auto no-scrollbar">
            ${initialTransactionsHTML}
          </div>
        </div>
      </div>
    </div>
  `;
}

// Function to set up interactivity after the HTML is rendered
export function setupEwalletInteractivity() {
  const walletCards = document.querySelectorAll('.wallet-card');
  const transactionListContainer = document.getElementById('transaction-list');

  // Function to render transactions based on wallet ID
  const updateTransactions = (walletId) => {
    const selectedWallet = walletData.find(wallet => wallet.id === walletId);
    if (selectedWallet) {
      transactionListContainer.innerHTML = generateTransactionHTML(selectedWallet.transactions);
    } else {
      transactionListContainer.innerHTML = `<div class="text-center text-gray-500 py-4">Wallet not found.</div>`;
    }
  };

  // Add click event listener to each wallet card
  walletCards.forEach(card => {
    card.addEventListener('click', () => {
      // Remove active class from all cards
      walletCards.forEach(wc => wc.classList.remove('border-4', 'border-yellow-300'));
      // Add active class to clicked card
      card.classList.add('border-4', 'border-yellow-300');
      
      const walletId = card.dataset.walletId;
      updateTransactions(walletId);
    });
  });

  // Initial selection (first wallet is already highlighted by renderEwallet)
  // If you want to explicitly trigger a render for the first wallet's transactions
  // upon interactivity setup, uncomment the line below:
  // updateTransactions(walletData[0].id);
}