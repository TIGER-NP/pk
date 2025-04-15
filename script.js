const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const closeButtons = document.querySelectorAll('.icon-close');
const navigationLinks = document.querySelectorAll('.navigation a');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const open = document.getElementById("open");
const modal = document.getElementById("myModal");

// Function to show the login form
function showLoginForm() {
    wrapper.classList.add('active-popup');
    wrapper.classList.remove('active-register');
}

// Function to show the register form
function showRegisterForm() {
    wrapper.classList.add('active-register');
    wrapper.classList.remove('active-popup');
}

// Function to hide both forms
function hideForms() {
    wrapper.classList.remove('active-popup', 'active-register');
}

// Show login form when navigation links are clicked
navigationLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        showLoginForm();
    });
});

// Show login form when the login button is clicked
btnPopup.addEventListener('click', () => {
    modal.style.display = "flex"; // Show modal
    showLoginForm();
});

// Close buttons functionality
closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        modal.style.display = "none"; // Hide modal
        hideForms();
    });
});

// Show the registration form when register link is clicked
registerLink.addEventListener('click', showRegisterForm);

// Show login form when login link is clicked
loginLink.addEventListener('click', showLoginForm);

// Handle the login form submission (for demo, just redirecting to home.html)
loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const emailInput = loginForm.email.value;
    const passwordInput = loginForm.password.value;

    if (!emailInput || !passwordInput) {
        alert("Please enter both email and password.");
        return;
    }

    // Client-side redirection for testing purposes (replace with actual backend validation)
    window.location.href = "home.html";
});

// Handle the register form submission (for demo, just redirecting to home.html)
registerForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const usernameInput = registerForm.regUsername.value;
    const emailInput = registerForm.regEmail.value;
    const passwordInput = registerForm.regPassword.value;
    const termsChecked = registerForm.terms.checked;

    if (!usernameInput || !emailInput || !passwordInput || !termsChecked) {
        alert("Please first fill .");
        return;
    }

    // Client-side redirection for testing purposes (replace with actual backend validation)
    window.location.href = "home.html";
});

// Open modal when the button is clicked
open.addEventListener("click", function() {
    modal.style.display = "flex";
});

// Close modal when the close button is clicked (using closeButtons)
closeButtons.forEach(button => {
    button.addEventListener("click", function() {
        modal.style.display = "none";
    });
});

// Optionally, close modal if clicked outside of the modal content
window.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
