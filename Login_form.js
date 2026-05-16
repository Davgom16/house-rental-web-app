// Function to validate the login form before allowing submission
function Login_form() {

    // Get the values entered in the username and password input fields
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // -------------------------------------
    // Regular expression patterns for validation
    // -------------------------------------

    // Username must contain only letters (A–Z or a–z) and be exactly 6 characters long
    var usernamePattern = /^[A-Za-z]{6}$/;

    // Password can contain letters and numbers (A–Z, a–z, 0–9) and must be exactly 8 characters long
    var passwordPattern = /^[a-zA-Z0-9]{8}$/;

    // -------------------------------------
    // Validate the username
    // -------------------------------------
    // If the username field is empty OR doesn't match the allowed pattern
    if (username == "" || !usernamePattern.test(username)) {
        alert("Enter a valid username"); // Show an error message
        return false; // Stop form submission
    }

    // -------------------------------------
    // Validate the password
    // -------------------------------------
    // If the password field is empty OR doesn't match the allowed pattern
    if (password == "" || !passwordPattern.test(password)) {
        alert("Invalid password, try again"); // Show an error message
        return false; // Stop form submission
    }

    // -------------------------------------
    // If both username and password are valid
    // -------------------------------------
    alert("Login successfully"); // Show a success message
    return true; // Allow form submission
}