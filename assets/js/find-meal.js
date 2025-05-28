// Find Meal JavaScript (find-meal.js)
document.addEventListener('DOMContentLoaded', function() {
    console.log('Find Meal page loaded - JavaScript is running');
    
    // Sample meal data for simulation
    const sampleMeals = [
        {
            id: 1,
            restaurantName: "Fresh Bites",
            mealName: "Quinoa Power Bowl",
            macros: "Protein 30g, Carbs 40g, Fat 15g",
            imagePlaceholder: "assets/images/quinoa-bowl.jpg"
        },
        {
            id: 2,
            restaurantName: "Green Leaf Cafe",
            mealName: "Grilled Salmon Salad",
            macros: "Protein 35g, Carbs 20g, Fat 25g",
            imagePlaceholder: "assets/images/salmon-salad.jpg"
        },
        {
            id: 3,
            restaurantName: "Fit Fuel Bistro",
            mealName: "Chicken Breast with Roasted Vegetables",
            macros: "Protein 40g, Carbs 25g, Fat 10g",
            imagePlaceholder: "assets/images/chicken-veggies.jpg"
        },
        {
            id: 4,
            restaurantName: "The Wellness Kitchen",
            mealName: "Tofu Stir-Fry",
            macros: "Protein 25g, Carbs 35g, Fat 20g",
            imagePlaceholder: "assets/images/tofu-stir-fry.jpg"
        },
        {
            id: 5,
            restaurantName: "Vitality Eats",
            mealName: "Lentil Soup with Whole Grain Bread",
            macros: "Protein 20g, Carbs 50g, Fat 10g",
            imagePlaceholder: "assets/images/lentil-soup.jpg"
        }
    ];
    
    // Alternative meals for refresh functionality
    const alternateMeals = [
        {
            id: 6,
            restaurantName: "Healthy Harvest",
            mealName: "Turkey and Avocado Wrap",
            macros: "Protein 28g, Carbs 35g, Fat 18g",
            imagePlaceholder: "assets/images/turkey-wrap.jpg"
        },
        {
            id: 7,
            restaurantName: "Protein Palace",
            mealName: "Lean Beef Steak with Sweet Potato",
            macros: "Protein 45g, Carbs 30g, Fat 12g",
            imagePlaceholder: "assets/images/beef-steak.jpg"
        },
        {
            id: 8,
            restaurantName: "Garden Fresh Deli",
            mealName: "Mediterranean Bowl",
            macros: "Protein 22g, Carbs 45g, Fat 20g",
            imagePlaceholder: "assets/images/mediterranean-bowl.jpg"
        }
    ];
    
    let currentMealSet = sampleMeals;
    let currentZipCode = '';
    
    // Get references to elements
    const zipCodeInput = document.querySelector('input[placeholder="Enter your zip code"]');
    const searchButton = document.querySelector('button:has(span:contains("Search"))');
    const refreshButton = document.querySelector('button:has(span:contains("Refresh"))');
    const mealsContainer = document.querySelector('h2 + div').parentElement; // Container for meal cards
    
    // Alternative selectors
    const allButtons = document.querySelectorAll('button');
    let searchBtn, refreshBtn;
    
    allButtons.forEach(button => {
        const buttonText = button.textContent.trim();
        if (buttonText === 'Search') {
            searchBtn = button;
        } else if (buttonText === 'Refresh') {
            refreshBtn = button;
        }
    });
    
    const finalSearchButton = searchButton || searchBtn;
    const finalRefreshButton = refreshButton || refreshBtn;
    
    // Get zip code from URL parameters or localStorage
    function getZipCode() {
        // First, try to get from URL parameters
        const urlParams = new URLSearchParams(window.location.search);
        const zipFromUrl = urlParams.get('zip');
        
        if (zipFromUrl) {
            console.log('Zip code retrieved from URL:', zipFromUrl);
            return zipFromUrl;
        }
        
        // Fallback to localStorage
        const zipFromStorage = localStorage.getItem('userZipCode');
        if (zipFromStorage) {
            console.log('Zip code retrieved from localStorage:', zipFromStorage);
            return zipFromStorage;
        }
        
        return null;
    }
    
    // Initialize zip code input
    function initializeZipCode() {
        currentZipCode = getZipCode();
        if (currentZipCode && zipCodeInput) {
            zipCodeInput.value = currentZipCode;
            console.log('Zip code input initialized with:', currentZipCode);
        }
    }
    
    // Generate HTML for meal card
    function generateMealCardHTML(meal) {
        return `
            <div class="p-4">
                <div class="flex items-stretch justify-between gap-4 rounded-xl bg-[#f9fcf8] p-4 shadow-[0_0_4px_rgba(0,0,0,0.1)]">
                    <div class="flex flex-[2_2_0px] flex-col gap-4">
                        <div class="flex flex-col gap-1">
                            <p class="text-[#67974e] text-sm font-normal leading-normal">Restaurant: ${meal.restaurantName}</p>
                            <p class="text-[#121b0e] text-base font-bold leading-tight">${meal.mealName}</p>
                            <p class="text-[#67974e] text-sm font-normal leading-normal">Estimated Macros: ${meal.macros}</p>
                        </div>
                        <button
                            class="order-btn flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 flex-row-reverse bg-[#ebf3e7] text-[#121b0e] pr-2 gap-1 text-sm font-medium leading-normal w-fit"
                            data-meal-id="${meal.id}"
                            data-meal-name="${meal.mealName}"
                            data-restaurant="${meal.restaurantName}"
                        >
                            <div class="text-[#121b0e]" data-icon="ArrowRight" data-size="18px" data-weight="regular">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill="currentColor" viewBox="0 0 256 256">
                                    <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
                                </svg>
                            </div>
                            <span class="truncate">Order Now</span>
                        </button>
                    </div>
                    <div class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
                         style="background-image: url('${meal.imagePlaceholder}'); background-color: #e5e7eb;">
                    </div>
                </div>
            </div>
        `;
    }
    
    // Render meals
    function renderMeals(meals) {
        console.log('Rendering meals:', meals);
        
        // Find the meals container (after the "Top 5 Meal Options" heading)
        const heading = document.querySelector('h2:contains("Top 5 Meal Options")') || 
                       Array.from(document.querySelectorAll('h2')).find(h => h.textContent.includes('Top 5 Meal Options'));
        
        if (!heading) {
            console.error('Could not find meals heading');
            return;
        }
        
        // Remove existing meal cards
        let nextElement = heading.nextElementSibling;
        while (nextElement && nextElement.classList.contains('p-4')) {
            const toRemove = nextElement;
            nextElement = nextElement.nextElementSibling;
            toRemove.remove();
        }
        
        // Add new meal cards
        meals.forEach(meal => {
            const mealHTML = generateMealCardHTML(meal);
            heading.insertAdjacentHTML('afterend', mealHTML);
        });
        
        // Add event listeners to order buttons
        const orderButtons = document.querySelectorAll('.order-btn');
        orderButtons.forEach(button => {
            button.addEventListener('click', handleOrderClick);
        });
        
        console.log('Meals rendered successfully');
    }
    
    // Handle search functionality
    function handleSearch(event) {
        event.preventDefault();
        
        const zipCode = zipCodeInput.value.trim();
        console.log('Search button clicked');
        console.log('Searching for meals with zip code:', zipCode);
        
        if (!zipCode) {
            alert('Please enter a zip code to search for meals.');
            return;
        }
        
        // Validate zip code format
        const zipCodePattern = /^\d{5}$/;
        if (!zipCodePattern.test(zipCode)) {
            alert('Please enter a valid 5-digit zip code.');
            return;
        }
        
        currentZipCode = zipCode;
        localStorage.setItem('userZipCode', zipCode);
        
        console.log(`Searching for meals with zip code: ${zipCode} and user's macros (to be implemented).`);
        
        // Simulate API response
        console.log('Simulating API response...');
        setTimeout(() => {
            renderMeals(currentMealSet);
            console.log('Search results displayed');
        }, 500);
    }
    
    // Handle refresh functionality
    function handleRefresh(event) {
        event.preventDefault();
        console.log('Refresh clicked');
        
        // Toggle between meal sets
        currentMealSet = currentMealSet === sampleMeals ? alternateMeals : sampleMeals;
        
        console.log('Refreshing meal options...');
        setTimeout(() => {
            renderMeals(currentMealSet);
            console.log('Meal options refreshed');
        }, 300);
    }
    
    // Handle order button clicks
    function handleOrderClick(event) {
        event.preventDefault();
        
        const mealId = event.currentTarget.getAttribute('data-meal-id');
        const mealName = event.currentTarget.getAttribute('data-meal-name');
        const restaurantName = event.currentTarget.getAttribute('data-restaurant');
        
        console.log(`Order Now clicked for: ${mealName} from ${restaurantName}`);
        console.log('Meal ID:', mealId);
        console.log('Redirecting to restaurant\'s platform (actual redirection to be implemented).');
        
        // Show confirmation dialog
        const confirmOrder = confirm(`Order ${mealName} from ${restaurantName}?\n\nYou will be redirected to the restaurant's ordering platform.`);
        
        if (confirmOrder) {
            console.log('User confirmed order. Redirecting...');
            // In a real app, this would redirect to the restaurant's ordering platform
            alert(`Redirecting to ${restaurantName}'s ordering platform...\n(This is a simulation)`);
        }
    }
    
    // Add event listeners
    if (finalSearchButton) {
        finalSearchButton.addEventListener('click', handleSearch);
        console.log('Event listener added to Search button');
    } else {
        console.error('Search button not found');
    }
    
    if (finalRefreshButton) {
        finalRefreshButton.addEventListener('click', handleRefresh);
        console.log('Event listener added to Refresh button');
    } else {
        console.error('Refresh button not found');
    }
    
    // Handle Enter key on zip code input
    if (zipCodeInput) {
        zipCodeInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                handleSearch(event);
            }
        });
    }
    
    // Initialize page
    initializeZipCode();
    
    // If we have a zip code, automatically render initial meals
    if (currentZipCode) {
        console.log('Auto-loading meals for zip code:', currentZipCode);
        renderMeals(currentMealSet);
    }
    
    console.log('Find Meal JavaScript setup complete');
}); 