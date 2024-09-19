// Function to validate the login form inputs for Officer role
function validateLogin() {
    // Get form fields
    const userId = document.getElementById('userId').value;
    const password = document.getElementById('password').value;

    // Get error message elements
    const userIdError = document.getElementById('userIdError');
    const passwordError = document.getElementById('passwordError');
    const loginSuccess = document.getElementById('loginSuccess');

    // Clear previous error messages
    userIdError.textContent = '';
    passwordError.textContent = '';
    loginSuccess.textContent = '';

    let valid = true;

    // Validate User ID (min 5 and max 20 characters)
    if (userId.length < 5 || userId.length > 20) {
        userIdError.textContent = 'User ID must be between 5 and 20 characters.';
        valid = false;
    }

    // Validate Password (Max 30 chars, must include upper, lower, and special character)
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{1,30}$/;
    if (!passwordPattern.test(password)) {
        passwordError.textContent = 'Password must be max 30 characters with at least one uppercase, one lowercase, and one special character.';
        valid = false;
    }

    // If valid, show success message and mock redirection
    if (valid) {
        loginSuccess.textContent = 'Login successful! Redirecting to the officer dashboard...';
        setTimeout(() => {
            // Mock redirection to officer dashboard
            window.location.href = 'officer_dashboard.html'; // Replace with actual officer dashboard URL
        }, 1500);
    }

    return false; // Prevent form submission for validation purposes
}
