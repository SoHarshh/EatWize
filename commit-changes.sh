#!/bin/bash

# EatWize Git Commit Helper Script
echo "🚀 EatWize Git Commit Helper"
echo "============================"

# Check if a commit message was provided
if [ -z "$1" ]; then
    echo "❌ Please provide a commit message"
    echo "Usage: ./commit-changes.sh \"Your commit message\""
    echo "Example: ./commit-changes.sh \"Update landing page styling\""
    exit 1
fi

# Show current status
echo "📊 Current Git Status:"
git status --short

echo ""
echo "📝 Adding all changes..."
git add .

echo "💾 Committing with message: '$1'"
git commit -m "$1"

echo "🌐 Pushing to GitHub..."
git push origin main

echo "✅ Changes successfully pushed to GitHub!"
echo "🌐 View your repository at: https://github.com/SoHarshh/EatWize" 