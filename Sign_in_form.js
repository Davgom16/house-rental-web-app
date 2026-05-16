// Function to validate the sign-up form before submission
function validatesigninform() {

    // Retrieve the values entered by the user in each input field
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone_number').value;
    var newusername = document.getElementById('newusername').value;
    var newpassword = document.getElementById('newpassword').value;
    var newpassword2 = document.getElementById('newpassword2').value;

    // -------------------------------
    // Regular expression patterns for validation
    // -------------------------------
    var namePattern = /^[A-Za-z\s]+$/;           // Only letters and spaces for full name
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Standard email format
    var phonePattern = /^[0-9]{9,10}$/;          // 9–10 digits for phone number
    var usernamePattern = /^[A-Za-z]{6}$/;       // Exactly 6 letters for username
    var passwordPattern = /^[a-zA-Z0-9]{8}$/;    // Exactly 8 letters or numbers for password

    // -------------------------------
    // Validate the name
    // -------------------------------
    if(name == "" || !namePattern.test(name)) {
        alert("Enter a valid name"); // Show error if empty or invalid
        return false;               // Stop form submission
    }

    // -------------------------------
    // Validate the email
    // -------------------------------
    if(email == "" || !emailPattern.test(email)) {
        alert("Please enter a valid email address");
        return false;
    }

    // -------------------------------
    // Validate the phone number
    // -------------------------------
    if(phone == "" || !phonePattern.test(phone)) {
        alert("Please enter a valid phone number");
        return false;
    }

    // -------------------------------
    // Validate the username
    // -------------------------------
    if(newusername == "" || !usernamePattern.test(newusername)) {
        alert("Enter a valid username");
        return false;
    }

    // -------------------------------
    // Validate the password
    // -------------------------------
    if(newpassword == "" || !passwordPattern.test(newpassword)) {
        alert("Invalid password, try again");
        return false;
    }

    // -------------------------------
    // Confirm that both passwords match
    // -------------------------------
    if(newpassword2 == "" || newpassword !== newpassword2) {
        alert("Passwords don't match");
        return false;
    }

    // -------------------------------
    // If all validations pass
    // -------------------------------
    alert("Account created successfully"); // Show success message
    return true;                            // Allow form submission
}
