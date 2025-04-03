document.addEventListener('DOMContentLoaded', function() {
    // Form validation
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('login_email');
    const passwordInput = document.getElementById('login_password');
    const togglePassword = document.getElementById('login_toggle_password');

    // Registration form elements
    const registerForm = document.getElementById('registerForm');
    const registerTogglePassword = document.getElementById('register_toggle_password');
    const loginFormContainer = document.querySelector('.login_form_container');
    const registerFormContainer = document.querySelector('.register_form_container');
    const createAccountLink = document.querySelector('.login_signup_link');
    const signInLink = document.querySelector('.login_signin_link');

    // Handle switching between login and registration forms
    createAccountLink.addEventListener('click', function(e) {
        e.preventDefault();
        loginFormContainer.style.display = 'none';
        registerFormContainer.style.display = 'flex';
    });

    signInLink.addEventListener('click', function(e) {
        e.preventDefault();
        registerFormContainer.style.display = 'none';
        loginFormContainer.style.display = 'flex';
    });

    // Toggle password visibility for registration form
    registerTogglePassword.addEventListener('click', function() {
        const registerPasswordInput = document.getElementById('register_password');
        const type = registerPasswordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        registerPasswordInput.setAttribute('type', type);

        // Change the icon
        const icon = registerTogglePassword.querySelector('i');
        icon.className = type === 'password' ? 'far fa-eye' : 'far fa-eye-slash';
    });

    // Register form submission
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Basic validation
            let isValid = true;
            const nameInput = document.getElementById('register_name');
            const registerEmailInput = document.getElementById('register_email');
            const registerPasswordInput = document.getElementById('register_password');
            const confirmPasswordInput = document.getElementById('register_confirm_password');

            if (!nameInput.value.trim()) {
                showError(nameInput, 'Name is required');
                isValid = false;
            } else {
                removeError(nameInput);
            }

            if (!registerEmailInput.value.trim()) {
                showError(registerEmailInput, 'Email is required');
                isValid = false;
            } else if (!isValidEmail(registerEmailInput.value)) {
                showError(registerEmailInput, 'Please enter a valid email');
                isValid = false;
            } else {
                removeError(registerEmailInput);
            }

            if (!registerPasswordInput.value.trim()) {
                showError(registerPasswordInput, 'Password is required');
                isValid = false;
            } else {
                removeError(registerPasswordInput);
            }

            if (!confirmPasswordInput.value.trim()) {
                showError(confirmPasswordInput, 'Please confirm your password');
                isValid = false;
            } else if (confirmPasswordInput.value !== registerPasswordInput.value) {
                showError(confirmPasswordInput, 'Passwords do not match');
                isValid = false;
            } else {
                removeError(confirmPasswordInput);
            }

            if (isValid) {
                console.log('Registration form submitted:', {
                    name: nameInput.value,
                    email: registerEmailInput.value,
                    password: registerPasswordInput.value
                });

                // For demo purposes: show success message
                showRegistrationSuccess();
            }
        });
    }

    // Toggle password visibility
    togglePassword.addEventListener('click', function() {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);

        // Change the icon
        const icon = togglePassword.querySelector('i');
        icon.className = type === 'password' ? 'far fa-eye' : 'far fa-eye-slash';
    });

    // Form submission
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Basic validation
        let isValid = true;

        if (!emailInput.value.trim()) {
            showError(emailInput, 'Email is required');
            isValid = false;
        } else if (!isValidEmail(emailInput.value)) {
            showError(emailInput, 'Please enter a valid email');
            isValid = false;
        } else {
            removeError(emailInput);
        }

        if (!passwordInput.value.trim()) {
            showError(passwordInput, 'Password is required');
            isValid = false;
        } else {
            removeError(passwordInput);
        }

        if (isValid) {
            // Here you would normally send the form data to a server
            console.log('Login form submitted:', {
                email: emailInput.value,
                password: passwordInput.value,
                rememberMe: document.getElementById('login_remember_me').checked
            });

            // For demo purposes: show success message
            showLoginSuccess();
        }
    });

    // Slideshow functionality
    let currentSlide = 0;
    const slides = document.querySelectorAll('.login_feature_img');
    const dots = document.querySelectorAll('.login_pagination_dot');
    const totalSlides = slides.length;

    // Initialize slideshow
    function showSlide(index) {
        // Remove active class from all slides and dots
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('login_pagination_active'));

        // Add active class to current slide and dot
        slides[index].classList.add('active');
        dots[index].classList.add('login_pagination_active');

        currentSlide = index;
    }

    // Auto-advance slides
    function nextSlide() {
        let nextIndex = (currentSlide + 1) % totalSlides;
        showSlide(nextIndex);
    }

    // Set up click listeners for pagination dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
            resetTimer(); // Reset timer when manually changing slides
        });
    });

    // Create timer for slideshow
    let slideTimer = setInterval(nextSlide, 5000);

    // Reset timer function
    function resetTimer() {
        clearInterval(slideTimer);
        slideTimer = setInterval(nextSlide, 5000);
    }

    // Initialize first slide
    showSlide(0);

    // Helper functions
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function showError(input, message) {
        const inputGroup = input.closest('.login_input_group');

        // Remove any existing error message
        const existingError = inputGroup.querySelector('.login_error_message');
        if (existingError) {
            existingError.remove();
        }

        // Add error class and message
        input.classList.add('login_input_error');
        const errorElement = document.createElement('div');
        errorElement.className = 'login_error_message';
        errorElement.textContent = message;
        errorElement.style.color = '#e74c3c';
        errorElement.style.fontSize = '12px';
        errorElement.style.marginTop = '5px';
        inputGroup.appendChild(errorElement);
    }

    function removeError(input) {
        const inputGroup = input.closest('.login_input_group');
        input.classList.remove('login_input_error');

        const existingError = inputGroup.querySelector('.login_error_message');
        if (existingError) {
            existingError.remove();
        }
    }

    function showLoginSuccess() {
        // Create success message
        const successMessage = document.createElement('div');
        successMessage.className = 'login_success_message';
        successMessage.textContent = 'Login successful!';
        successMessage.style.backgroundColor = '#4CAF50';
        successMessage.style.color = 'white';
        successMessage.style.padding = '10px';
        successMessage.style.borderRadius = '6px';
        successMessage.style.textAlign = 'center';
        successMessage.style.marginTop = '20px';

        // Add to form
        loginForm.appendChild(successMessage);

        // Remove after 3 seconds
        setTimeout(() => {
            successMessage.remove();
        }, 3000);
    }

    function showRegistrationSuccess() {
        // Create success message
        const successMessage = document.createElement('div');
        successMessage.className = 'login_success_message';
        successMessage.textContent = 'Registration successful!';
        successMessage.style.backgroundColor = '#4CAF50';
        successMessage.style.color = 'white';
        successMessage.style.padding = '10px';
        successMessage.style.borderRadius = '6px';
        successMessage.style.textAlign = 'center';
        successMessage.style.marginTop = '20px';

        // Add to form
        registerForm.appendChild(successMessage);

        // Remove after 3 seconds
        setTimeout(() => {
            successMessage.remove();
            // Switch back to login form
            registerFormContainer.style.display = 'none';
            loginFormContainer.style.display = 'flex';
        }, 3000);
    }
});