// Login Script
document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const errorElement = document.getElementById('error');

    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Data login (hardcoded untuk contoh ini)
            const validUsername = 'admin';
            const validPassword = '1234';

            // Ambil input user
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // Periksa kredensial
            if (username === validUsername && password === validPassword) {
                // Set sessionStorage untuk admin
                sessionStorage.setItem('isAdmin', true);

                // Redirect ke dashboard
                window.location.href = 'dashboard.html';
            } else {
                // Tampilkan error
                errorElement.textContent = 'Username atau password salah.';
            }
        });
    }
});
