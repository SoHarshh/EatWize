// Landing Page JavaScript (landing.js)
document.addEventListener('DOMContentLoaded', function() {
    console.log('Landing page loaded - JavaScript is running');
    
    // Get references to the zip code input and buttons
    const zipCodeInput = document.querySelector('input[placeholder="Enter your zip code"]');
    const findMealButtons = document.querySelectorAll('button:has(span:contains("Find My EatWize Meal"))');
    
    // Alternative selector for the buttons if the above doesn't work
    const findMealButton1 = document.querySelector('label button');
    const findMealButton2 = document.querySelector('div.flex.justify-center button');
    
    // Function to handle zip code search
    function handleZipCodeSearch(event) {
        event.preventDefault();
        
        // Get the zip code value
        const zipCode = zipCodeInput?.value?.trim() || '';
        
        // Log the zip code
        console.log('Zip code entered:', zipCode);
        
        if (!zipCode) {
            // If no zip code entered, prompt for one
            const userZip = prompt('Please enter your zip code to find meals in your area:');
            if (!userZip) {
                alert('Zip code is required to find meals.');
                return;
            }
            
            // Validate the prompted zip code
            const zipCodePattern = /^\d{5}$/;
            if (!zipCodePattern.test(userZip.trim())) {
                alert('Please enter a valid 5-digit zip code.');
                return;
            }
            
            // Use the prompted zip code
            localStorage.setItem('userZipCode', userZip.trim());
            console.log('Zip code stored in localStorage:', userZip.trim());
            
            // Navigate to find-meal page
            console.log('Navigating to find-meal.html with zip code:', userZip.trim());
            window.location.href = `find-meal.html?zip=${encodeURIComponent(userZip.trim())}`;
            return;
        }
        
        // Validate basic zip code format (5 digits)
        const zipCodePattern = /^\d{5}$/;
        if (!zipCodePattern.test(zipCode)) {
            alert('Please enter a valid 5-digit zip code.');
            return;
        }
        
        // Store zip code for the find-meal page
        localStorage.setItem('userZipCode', zipCode);
        console.log('Zip code stored in localStorage:', zipCode);
        
        // Simulate navigation to find-meal.html
        console.log('Navigating to find-meal.html with zip code:', zipCode);
        
        // Option 1: Using URL parameters
        window.location.href = `find-meal.html?zip=${encodeURIComponent(zipCode)}`;
        
        // Option 2: Using localStorage (already done above as backup)
        // The find-meal page will check both URL parameters and localStorage
    }
    
    // Add event listeners to the buttons
    // Try multiple approaches to catch the right buttons
    
    // Method 1: Look for buttons with specific text content
    const allButtons = document.querySelectorAll('button');
    allButtons.forEach(button => {
        const buttonText = button.textContent.trim();
        if (buttonText.includes('Find My EatWize Meal')) {
            button.addEventListener('click', handleZipCodeSearch);
            console.log('Event listener added to button:', buttonText);
        }
    });
    
    // Method 2: Handle form submission if the input is in a form
    const zipForm = zipCodeInput?.closest('label');
    if (zipForm) {
        zipForm.addEventListener('submit', handleZipCodeSearch);
    }
    
    // Method 3: Handle Enter key press on the zip code input
    if (zipCodeInput) {
        zipCodeInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                handleZipCodeSearch(event);
            }
        });
    }
    
    console.log('Landing page JavaScript setup complete');
}); 