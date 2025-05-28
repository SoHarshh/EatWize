# EatWize - Frontend JavaScript Implementation

EatWize is a web application that helps users find healthy meal options from local restaurants that fit their fitness goals. This project contains static HTML pages with interactive JavaScript functionality.

## Project Structure

```
EatWize/
├── index.html          # Landing page
├── signup.html         # Sign up page  
├── dashboard.html      # User dashboard
├── find-meal.html      # Meal finder page
├── assets/
│   ├── js/
│   │   ├── landing.js     # Landing page functionality
│   │   ├── auth.js        # Authentication functionality
│   │   ├── dashboard.js   # Dashboard functionality
│   │   └── find-meal.js   # Meal finder functionality
│   ├── css/               # CSS files (currently empty)
│   └── images/            # Image assets (add your images here)
└── README.md
```

## Features Implemented

### 1. Landing Page (`index.html` + `landing.js`)
- **Zip Code Input**: Users can enter their zip code to find local meals
- **Validation**: Basic 5-digit zip code format validation
- **Navigation**: Zip code is passed to find-meal page via URL parameters and localStorage
- **Event Handlers**: Works with both button clicks and Enter key presses

### 2. Sign Up Page (`signup.html` + `auth.js`)
- **Form Validation**: 
  - Email format validation
  - Password presence validation (minimum 6 characters)
  - Real-time error display with visual feedback
- **Social Login Simulation**: Google and Apple login buttons with console logging
- **Error Handling**: Clear error messages displayed inline

### 3. Dashboard Page (`dashboard.html` + `dashboard.js`)
- **Macro Goals Management**:
  - Update protein, carbs, and fat goals
  - Data persistence using localStorage
  - Form validation and console logging
- **Dynamic Progress Bars**:
  - Real-time progress calculation and display
  - Visual progress bars that update based on current/goal ratios
  - Sample data for demonstration
- **Fitness Device Integration**:
  - Apple Watch and Fitbit connect buttons
  - Console logging for OAuth simulation

### 4. Find Meal Page (`find-meal.html` + `find-meal.js`)
- **Search Functionality**:
  - Zip code retrieval from URL parameters or localStorage
  - Search validation and console logging
- **Dynamic Meal Generation**:
  - Sample meal data with restaurant names, meal names, and macros
  - Dynamic HTML generation for meal cards
  - Order buttons with meal-specific data
- **Refresh Feature**:
  - Toggles between different meal sets
  - Simulates new search results
- **Order Integration**:
  - Order confirmation dialogs
  - Console logging for restaurant platform redirection

## Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No server required - can run locally

### Installation
1. Clone or download the project files
2. Open any HTML file in your web browser
3. Open browser developer tools (F12) to see console logs

### Usage

1. **Start on Landing Page**: Open `index.html`
   - Enter a zip code (e.g., "12345")
   - Click "Find My EatWize Meal" to navigate to meal finder

2. **Test Sign Up**: Open `signup.html`
   - Try submitting with invalid/empty data to see validation
   - Enter valid email and password to see success flow
   - Click social login buttons to see OAuth simulation

3. **Explore Dashboard**: Open `dashboard.html`
   - Update macro goals and see progress bars change
   - Try connecting fitness devices
   - Check localStorage persistence (refresh page to see saved goals)

4. **Find Meals**: Open `find-meal.html`
   - Search with different zip codes
   - Click "Refresh" to see alternate meal options
   - Click "Order Now" on any meal to see confirmation dialog

## Console Logging

All user interactions are logged to the browser console for debugging and demonstration purposes. Open Developer Tools (F12) and check the Console tab to see:

- Form submissions and validation results
- Button clicks and user interactions
- Data storage and retrieval operations
- Simulated API calls and responses

## Data Persistence

- **Zip Codes**: Stored in localStorage and passed via URL parameters
- **Macro Goals**: Saved in localStorage for demonstration of persistence
- **Navigation State**: Zip codes automatically populate on find-meal page

## Customization

### Adding Images
Place your meal images in `assets/images/` and update the image paths in `find-meal.js`:
```javascript
imagePlaceholder: "assets/images/your-image.jpg"
```

### Modifying Sample Data
Edit the `sampleMeals` and `alternateMeals` arrays in `find-meal.js` to customize meal options.

### Styling
The project uses Tailwind CSS via CDN. Modify HTML classes or add custom CSS in `assets/css/`.

## Browser Compatibility

- Modern browsers with ES6+ support
- localStorage support required for data persistence
- No external dependencies except Tailwind CSS CDN

## Next Steps for Production

1. **Backend Integration**: Replace console.log statements with actual API calls
2. **Authentication**: Implement real OAuth flows and user management
3. **Database**: Replace localStorage with proper database storage
4. **Image Management**: Add actual meal images and proper image handling
5. **Responsive Design**: Test and optimize for mobile devices
6. **Error Handling**: Add comprehensive error handling for network requests
7. **Security**: Implement proper input sanitization and validation

## Notes

- This is a frontend-only implementation with simulated backend interactions
- All "API calls" are console.log statements for demonstration
- Data persistence uses localStorage (not suitable for production)
- Image paths point to placeholder locations in `assets/images/`
- Social login buttons are simulation only (no actual OAuth implementation)

## Troubleshooting

- **Scripts not working**: Check browser console for errors
- **Buttons not responding**: Ensure JavaScript is enabled
- **Data not persisting**: Check if localStorage is enabled/available
- **Images not showing**: Add actual images to `assets/images/` directory 