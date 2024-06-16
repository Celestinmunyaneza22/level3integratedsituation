const form = document.getElementById('registration-form');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const rollNo = document.getElementById('roll-no').value;
    const course = document.getElementById('course').value;

    // Validate form fields
    if (!name ||!email ||!password ||!confirmPassword ||!rollNo ||!course) {
        errorMessage.textContent = 'Please fill in all fields';
        return;
    }

    if (password!== confirmPassword) {
        errorMessage.textContent = 'Passwords do not match';
        return;
    }

    alert('Registration successful!');
});