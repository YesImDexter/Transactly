document.addEventListener('DOMContentLoaded', () => {
  // Load header and footer
  loadHTML('header.html', 'header-placeholder');
  loadHTML('footer.html', 'footer-placeholder');

  const loginForm = document.getElementById('login-form');
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === 'admin') {
      window.location.href = 'admin_dashboard.html';
    } else {
      window.location.href = 'home.html';
    }
  });
});
