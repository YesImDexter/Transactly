// trust-score.js
document.addEventListener('DOMContentLoaded', () => {
  const dummyData = [
    { username: 'john_doe', email: 'john@example.com', score: 94, risk: 'Low', status: 'Clear' },
    { username: 'jane_smith', email: 'jane@domain.com', score: 67, risk: 'Medium', status: 'Review' },
    { username: 'suspicious_bot', email: 'bot@fraud.com', score: 21, risk: 'High', status: 'Flagged' },
  ];

  const tbody = document.getElementById('trust-score-body');
  dummyData.forEach(user => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td class="px-4 py-3">${user.username}</td>
      <td class="px-4 py-3">${user.email}</td>
      <td class="px-4 py-3 font-semibold">${user.score}</td>
      <td class="px-4 py-3">${user.risk}</td>
      <td class="px-4 py-3">${user.status}</td>
      <td class="px-4 py-3">
        <button class="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-xs">Flag</button>
      </td>
    `;
    tbody.appendChild(row);
  });
});
