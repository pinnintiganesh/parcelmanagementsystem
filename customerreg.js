// Function to validate the registration form
function validateRegistration() {
    // Get form values
    const customerName = document.getElementById('customerName').value;
    const email = document.getElementById('email').value;
    const countryCode = document.getElementById('countryCode').value;
    const mobile = document.getElementById('mobile').value;
    const address = document.getElementById('address').value;
    const userId = document.getElementById('userId').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const preferences = document.getElementById('preferences').value;

    // Get success message element
    const successMessage = document.getElementById('successMessage');
    successMessage.textContent = '';

    // Validation flags
    let valid = true;

    // Validate Customer Name
    if (customerName.length === 0 || customerName.length > 50) {
        alert('Customer Name must be between 1 and 50 characters.');
        valid = false;
    }

    // Validate Mobile Number (10 digits)
    if (!/^\d{10}$/.test(mobile)) {
        alert('Mobile number must be 10 digits.');
        valid = false;
    }

    // Validate Address
    if (address.length === 0) {
        alert('Address cannot be empty.');
        valid = false;
    }

    // Validate User ID (min 5 and max 20 characters)
    if (userId.length < 5 || userId.length > 20) {
        alert('User ID must be between 5 and 20 characters.');
        valid = false;
    }

    // Validate Password and Confirm Password
    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        valid = false;
    } else if (password.length > 30) {
        alert('Password must be 30 characters or less.');
        valid = false;
    }

    if (valid) {
        // Generate a random customer username
        const randomUsername = `cust_${Math.floor(Math.random() * 10000)}`;

        // Display success message and acknowledgment
        successMessage.innerHTML = `
            <strong>Registration successful!</strong><br>
            <p><b>Customer Username:</b> ${randomUsername}</p>
            <p><b>Customer Name:</b> ${customerName}</p>
            <p><b>Email:</b> ${email}</p>
        `;

        // Clear the form after success
        document.getElementById('registrationForm').reset();
    }

    return false; // Prevent form submission for validation
}
