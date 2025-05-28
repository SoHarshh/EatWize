# EatWize Development Guide

## 🚀 Quick Start

### 1. Start Development Server
```bash
# Easy way (handles port conflicts automatically)
./start-server.sh

# Manual way
python3 -m http.server 3000
```
Then open: `http://localhost:3000`

### 2. Stop Development Server
```bash
./stop-server.sh
```

### 3. Make Changes and Save to GitHub
```bash
./commit-changes.sh "Your commit message here"
```

## 📁 Project Structure
```
EatWize/
├── index.html              # Landing page
├── signup.html             # Sign up page
├── dashboard.html          # User dashboard
├── find-meal.html          # Meal finder page
├── assets/
│   ├── js/
│   │   ├── landing.js      # Landing page functionality
│   │   ├── auth.js         # Authentication functionality
│   │   ├── dashboard.js    # Dashboard functionality
│   │   └── find-meal.js    # Meal finder functionality
│   ├── css/                # Add your custom CSS here
│   └── images/             # Add meal images here
├── start-server.sh         # Start development server (handles conflicts)
├── stop-server.sh          # Stop development server
├── commit-changes.sh       # Helper script for Git commits
├── DEVELOPMENT.md          # This file
└── README.md              # Project documentation
```

## 🛠️ Development Workflow

### Making Changes
1. **Edit files** in your code editor
2. **Refresh browser** to see changes immediately
3. **Check console** (F12) for JavaScript logs
4. **Test functionality** across all pages

### Saving Changes to GitHub
```bash
# Quick commit with the helper script
./commit-changes.sh "Describe what you changed"

# Or manually:
git add .
git commit -m "Your commit message"
git push origin main
```

## 🧪 Testing Your Features

### Landing Page (`index.html`)
- [ ] Enter zip code and click "Find My EatWize Meal"
- [ ] Test with invalid zip codes
- [ ] Check console for zip code logs
- [ ] Verify navigation to find-meal page

### Sign Up Page (`signup.html`)
- [ ] Submit empty form (should show validation)
- [ ] Submit invalid email (should show error)
- [ ] Submit short password (should show error)
- [ ] Submit valid data (should show success)
- [ ] Test social login buttons

### Dashboard (`dashboard.html`)
- [ ] Update macro goals and see progress bars change
- [ ] Test localStorage persistence (refresh page)
- [ ] Click fitness device connect buttons
- [ ] Verify console logging

### Find Meal Page (`find-meal.html`)
- [ ] Search with zip code
- [ ] Click "Refresh" for new meals
- [ ] Click "Order Now" buttons
- [ ] Test coming from landing page with zip code

## 🎨 Customization Tips

### Adding Images
1. Place images in `assets/images/`
2. Update image paths in `find-meal.js`:
   ```javascript
   imagePlaceholder: "assets/images/your-image.jpg"
   ```

### Styling Changes
- Edit Tailwind classes directly in HTML
- Add custom CSS in `assets/css/`
- Link CSS files in HTML head sections

### JavaScript Modifications
- All JS files are in `assets/js/`
- Console.log statements help with debugging
- LocalStorage is used for data persistence

## 📱 Browser Testing

### Required Features
- Modern browser (Chrome, Firefox, Safari, Edge)
- JavaScript enabled
- LocalStorage support
- ES6+ support

### Debug Console
- Press F12 to open developer tools
- Check Console tab for logs
- Look for error messages in red

## 🌐 Deployment Options

### GitHub Pages (Free)
1. Go to your GitHub repository settings
2. Enable GitHub Pages from main branch
3. Your site will be available at: `https://soharshh.github.io/EatWize/`

### Other Options
- Netlify (drag & drop deployment)
- Vercel (connect GitHub repo)
- Firebase Hosting

## 🔧 Common Issues

### Server Not Starting
```bash
# Try different port if 3000 is busy
python3 -m http.server 8000
```

### Changes Not Showing
- Hard refresh: Ctrl+F5 (Windows) or Cmd+Shift+R (Mac)
- Check browser cache
- Verify file paths

### Git Issues
```bash
# Check status
git status

# Check remote
git remote -v

# Pull latest changes
git pull origin main
```

## 📊 Performance Tips

### Optimization
- Compress images before adding to `assets/images/`
- Minify CSS/JS for production
- Use CDN for external libraries

### Mobile Responsiveness
- Test on different screen sizes
- Use browser dev tools device emulation
- Consider adding mobile-specific CSS

## 🎯 Next Steps

### Immediate Improvements
1. Add real meal images to `assets/images/`
2. Enhance mobile responsiveness
3. Add more meal options in `find-meal.js`
4. Improve form validation feedback

### Advanced Features
1. Add user preferences storage
2. Implement meal filtering
3. Add favorites functionality
4. Create meal history tracking

Remember: Use `./commit-changes.sh "message"` after any changes to save to GitHub! 