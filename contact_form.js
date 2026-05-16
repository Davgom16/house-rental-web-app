// Function that validates the contact form before submission
function contactForm() {

    // Get the values entered by the user in the form fields
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('Phone_number').value;
    var message = document.getElementById('message').value;

    // -------------------------------
    // Validate the Name field
    // -------------------------------
    // Only allows letters (A–Z, a–z) and spaces
    var namePattern = /^[A-Za-z\s]+$/;
    if (name == "" || !namePattern.test(name)) {
        alert("Enter a valid name"); // Show an alert if invalid
        return false; // Stop form submission
    }

    // -------------------------------
    // Validate the Email field
    // -------------------------------
    // Checks that the email follows the correct format
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email == "" || !emailPattern.test(email)) {
        alert("Please enter a valid email address");
        return false;
    }

    // -------------------------------
    // Validate the Phone Number field
    // -------------------------------
    // Allows only digits and ensures the number is 9 or 10 digits long
    var phonePattern = /^[0-9]{9,10}$/;
    if (phone == "" || !phonePattern.test(phone)) {
        alert("Please enter a valid phone number");
        return false;
    }

    // -------------------------------
    // Validate the Message field
    // -------------------------------
    // Ensures the message box is not empty
    if (message == "") {
        alert("Message must be filled");
        return false;
    }

    // -------------------------------
    // If all validations pass
    // -------------------------------
    alert("Form submission successful"); // Show success message
    return true; // Allow form submission
}