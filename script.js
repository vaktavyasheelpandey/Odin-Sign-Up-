document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirm-password').value;
    let errorElement = document.getElementById('password-error');

    if (password !== confirmPassword) {
        errorElement.textContent = "Passwords do not match!";
    } else {
        errorElement.textContent = "";
        alert("Account successfully created!");
        // Proceed with form submission
    }
});
