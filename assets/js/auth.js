// Authentication JavaScript (auth.js)
document.addEventListener('DOMContentLoaded', function() {
    console.log('Auth page loaded - JavaScript is running');
    
    // Get references to form elements
    const emailInput = document.querySelector('input[placeholder="Enter your email"]');
    const passwordInput = document.querySelector('input[placeholder="Enter your password"]');
    const signUpButton = document.querySelector('button:has(span:contains("Sign Up"))');
    const googleButton = document.querySelector('button:has(span:contains("SearchEngineCo"))');
    const appleButton = document.querySelector('button:has(span:contains("FruitCo"))');
    
    // Alternative selectors if the above don't work
    const allButtons = document.querySelectorAll('button');
    let signUpBtn, googleBtn, appleBtn;
    
    allButtons.forEach(button => {
        const buttonText = button.textContent.trim();
        if (buttonText.includes('Sign Up') && !buttonText.includes('Continue')) {
            signUpBtn = button;
        } else if (buttonText.includes('SearchEngineCo')) {
            googleBtn = button;
        } else if (buttonText.includes('FruitCo')) {
            appleBtn = button;
        }
    });
    
    // Use alternative selectors if primary ones failed
    const finalSignUpButton = signUpButton || signUpBtn;
    const finalGoogleButton = googleButton || googleBtn;
    const finalAppleButton = appleButton || appleBtn;
    
    // Email validation function
    function isValidEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }
    
    // Display error message function
    function displayError(message, inputElement) {
        // Remove any existing error messages
        clearErrors();
        
        // Create error message element
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.style.color = '#ef4444';
        errorDiv.style.fontSize = '14px';
        errorDiv.style.marginTop = '4px';
        errorDiv.textContent = message;
        
        // Insert error message after the input's parent
        const inputParent = inputElement.closest('label') || inputElement.parentElement;
        inputParent.appendChild(errorDiv);
        
        // Add red border to input
        inputElement.style.borderColor = '#ef4444';
    }
    
    // Clear error messages function
    function clearErrors() {
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(error => error.remove());
        
        // Reset input border colors
        if (emailInput) emailInput.style.borderColor = '';
        if (passwordInput) passwordInput.style.borderColor = '';
    }
    
    // Handle sign up form submission
    function handleSignUp(event) {
        event.preventDefault();
        console.log('Sign Up button clicked');
        
        // Clear previous errors
        clearErrors();
        
        // Get form values
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        
        let hasErrors = false;
        
        // Validate email
        if (!email) {
            displayError('Email is required', emailInput);
            hasErrors = true;
        } else if (!isValidEmail(email)) {
            displayError('Please enter a valid email address', emailInput);
            hasErrors = true;
        }
        
        // Validate password
        if (!password) {
            displayError('Password is required', passwordInput);
            hasErrors = true;
        } else if (password.length < 6) {
            displayError('Password must be at least 6 characters long', passwordInput);
            hasErrors = true;
        }
        
        // If validation passes
        if (!hasErrors) {
            console.log('Form validation passed');
            console.log('Email:', email);
            console.log('Password:', password);
            console.log('Simulating API call to register user...');
            
            // Show success message
            alert('Account created successfully! (This is a simulation)');
            
            // Clear form
            emailInput.value = '';
            passwordInput.value = '';
            
            // In a real app, you would redirect to dashboard or login
            console.log('In a real app, user would be redirected to dashboard');
        } else {
            console.log('Form validation failed');
        }
    }
    
    // Handle social login buttons
    function handleGoogleLogin(event) {
        event.preventDefault();
        console.log('SearchEngineCo login clicked. Backend integration needed.');
        alert('SearchEngineCo login clicked. OAuth integration would be implemented here.');
    }
    
    function handleAppleLogin(event) {
        event.preventDefault();
        console.log('FruitCo login clicked. Backend integration needed.');
        alert('FruitCo login clicked. OAuth integration would be implemented here.');
    }
    
    // Add event listeners
    if (finalSignUpButton) {
        finalSignUpButton.addEventListener('click', handleSignUp);
        console.log('Event listener added to Sign Up button');
    } else {
        console.error('Sign Up button not found');
    }
    
    if (finalGoogleButton) {
        finalGoogleButton.addEventListener('click', handleGoogleLogin);
        console.log('Event listener added to SearchEngineCo button');
    } else {
        console.error('SearchEngineCo button not found');
    }
    
    if (finalAppleButton) {
        finalAppleButton.addEventListener('click', handleAppleLogin);
        console.log('Event listener added to FruitCo button');
    } else {
        console.error('FruitCo button not found');
    }
    
    // Handle form submission on Enter key
    if (emailInput && passwordInput) {
        [emailInput, passwordInput].forEach(input => {
            input.addEventListener('keypress', function(event) {
                if (event.key === 'Enter') {
                    handleSignUp(event);
                }
            });
        });
    }
    
    console.log('Auth page JavaScript setup complete');
}); 