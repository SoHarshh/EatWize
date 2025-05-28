// Dashboard JavaScript (dashboard.js)
document.addEventListener('DOMContentLoaded', function() {
    console.log('Dashboard page loaded - JavaScript is running');
    
    // Sample progress data for demonstration
    let progressData = {
        protein: { current: 120, goal: 160 },
        carbs: { current: 150, goal: 300 },
        fat: { current: 50, goal: 55 }
    };
    
    // Get references to form elements
    const proteinInput = document.querySelector('input[value=""]');
    const carbsInput = document.querySelectorAll('input[value=""]')[1];
    const fatInput = document.querySelectorAll('input[value=""]')[2];
    const updateGoalsButton = document.querySelector('button:has(span:contains("Update Goals"))');
    
    // Get device connect buttons
    const appleWatchButton = document.querySelector('button:has(span:contains("Connect"))');
    const fitbitButton = document.querySelectorAll('button:has(span:contains("Connect"))')[1];
    
    // Alternative selectors
    const allButtons = document.querySelectorAll('button');
    let updateBtn, appleBtn, fitbitBtn;
    
    allButtons.forEach(button => {
        const buttonText = button.textContent.trim();
        if (buttonText.includes('Update Goals')) {
            updateBtn = button;
        } else if (buttonText === 'Connect') {
            const buttonParent = button.closest('.flex.items-center.gap-4.bg-\\[\\#fcf8fa\\]');
            if (buttonParent) {
                const deviceText = buttonParent.querySelector('p').textContent.trim();
                if (deviceText.includes('Apple Watch')) {
                    appleBtn = button;
                } else if (deviceText.includes('Fitbit')) {
                    fitbitBtn = button;
                }
            }
        }
    });
    
    // Use alternative selectors if primary ones failed
    const finalUpdateButton = updateGoalsButton || updateBtn;
    const finalAppleButton = appleWatchButton || appleBtn;
    const finalFitbitButton = fitbitButton || fitbitBtn;
    
    // Function to update progress bars and text
    function updateProgressDisplay() {
        console.log('Updating progress display with data:', progressData);
        
        // Update protein progress
        updateProgressBar('protein', progressData.protein);
        
        // Update carbs progress
        updateProgressBar('carbs', progressData.carbs);
        
        // Update fat progress
        updateProgressBar('fat', progressData.fat);
    }
    
    // Function to update individual progress bar
    function updateProgressBar(macroType, data) {
        const percentage = Math.min((data.current / data.goal) * 100, 100);
        const displayPercentage = Math.round(percentage);
        
        // Find the progress section by macro name
        const progressSections = document.querySelectorAll('.flex.flex-col.gap-3.p-4');
        
        progressSections.forEach(section => {
            const macroLabel = section.querySelector('p.text-base.font-medium');
            if (macroLabel && macroLabel.textContent.toLowerCase().includes(macroType.toLowerCase())) {
                // Update percentage text
                const percentageElement = section.querySelector('p.text-sm.font-normal');
                if (percentageElement) {
                    percentageElement.textContent = `${displayPercentage}%`;
                }
                
                // Update progress bar width
                const progressBar = section.querySelector('.h-2.rounded.bg-\\[\\#ff8bcb\\]');
                if (progressBar) {
                    progressBar.style.width = `${percentage}%`;
                }
                
                // Update current/goal text
                const goalText = section.querySelector('p.text-\\[\\#a14577\\]');
                if (goalText) {
                    goalText.textContent = `${data.current}g / ${data.goal}g`;
                }
                
                console.log(`Updated ${macroType}: ${data.current}g/${data.goal}g (${displayPercentage}%)`);
            }
        });
    }
    
    // Handle macro goals update
    function handleUpdateGoals(event) {
        event.preventDefault();
        console.log('Update Goals button clicked');
        
        // Get input values
        const proteinGoal = parseInt(proteinInput?.value) || 0;
        const carbsGoal = parseInt(carbsInput?.value) || 0;
        const fatGoal = parseInt(fatInput?.value) || 0;
        
        console.log('New macro goals:');
        console.log('Protein:', proteinGoal + 'g');
        console.log('Carbs:', carbsGoal + 'g');
        console.log('Fat:', fatGoal + 'g');
        
        if (proteinGoal > 0 || carbsGoal > 0 || fatGoal > 0) {
            // Update goals in progress data
            if (proteinGoal > 0) progressData.protein.goal = proteinGoal;
            if (carbsGoal > 0) progressData.carbs.goal = carbsGoal;
            if (fatGoal > 0) progressData.fat.goal = fatGoal;
            
            // Store in localStorage for persistence
            localStorage.setItem('macroGoals', JSON.stringify({
                protein: progressData.protein.goal,
                carbs: progressData.carbs.goal,
                fat: progressData.fat.goal
            }));
            
            console.log('Simulating API call to update macro goals...');
            alert('Macro goals updated successfully! (This is a simulation)');
            
            // Update progress display
            updateProgressDisplay();
            
            // Clear inputs
            if (proteinInput) proteinInput.value = '';
            if (carbsInput) carbsInput.value = '';
            if (fatInput) fatInput.value = '';
        } else {
            alert('Please enter at least one valid macro goal.');
        }
    }
    
    // Handle Apple Watch connection
    function handleAppleWatchConnect(event) {
        event.preventDefault();
        console.log('Connect Apple Watch clicked. OAuth flow and backend needed.');
        alert('Apple Watch connection clicked. OAuth flow and backend integration would be implemented here.');
    }
    
    // Handle Fitbit connection
    function handleFitbitConnect(event) {
        event.preventDefault();
        console.log('Connect Fitbit clicked. OAuth flow and backend needed.');
        alert('Fitbit connection clicked. OAuth flow and backend integration would be implemented here.');
    }
    
    // Load saved macro goals from localStorage
    function loadSavedGoals() {
        const savedGoals = localStorage.getItem('macroGoals');
        if (savedGoals) {
            try {
                const goals = JSON.parse(savedGoals);
                progressData.protein.goal = goals.protein || progressData.protein.goal;
                progressData.carbs.goal = goals.carbs || progressData.carbs.goal;
                progressData.fat.goal = goals.fat || progressData.fat.goal;
                console.log('Loaded saved macro goals:', goals);
            } catch (error) {
                console.error('Error loading saved goals:', error);
            }
        }
    }
    
    // Add event listeners
    if (finalUpdateButton) {
        finalUpdateButton.addEventListener('click', handleUpdateGoals);
        console.log('Event listener added to Update Goals button');
    } else {
        console.error('Update Goals button not found');
    }
    
    if (finalAppleButton) {
        finalAppleButton.addEventListener('click', handleAppleWatchConnect);
        console.log('Event listener added to Apple Watch Connect button');
    } else {
        console.error('Apple Watch Connect button not found');
    }
    
    if (finalFitbitButton) {
        finalFitbitButton.addEventListener('click', handleFitbitConnect);
        console.log('Event listener added to Fitbit Connect button');
    } else {
        console.error('Fitbit Connect button not found');
    }
    
    // Initialize dashboard
    loadSavedGoals();
    updateProgressDisplay();
    
    console.log('Dashboard JavaScript setup complete');
}); 