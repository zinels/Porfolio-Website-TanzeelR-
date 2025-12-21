#!/bin/bash

# GitHub Repository Setup Script
# Run this after creating your GitHub repository

echo "🚀 Portfolio Deployment Setup"
echo ""
echo "Step 1: Create a GitHub repository"
echo "  1. Go to https://github.com/new"
echo "  2. Repository name: portfolio-rebranded (or your choice)"
echo "  3. Description: Personal portfolio website"
echo "  4. Make it Public or Private"
echo "  5. DO NOT initialize with README, .gitignore, or license"
echo "  6. Click 'Create repository'"
echo ""
read -p "Press Enter after you've created the GitHub repository..."

echo ""
echo "Step 2: Enter your GitHub username:"
read -p "GitHub username: " GITHUB_USERNAME

echo ""
echo "Step 3: Enter your repository name (default: portfolio-rebranded):"
read -p "Repository name [portfolio-rebranded]: " REPO_NAME
REPO_NAME=${REPO_NAME:-portfolio-rebranded}

echo ""
echo "Setting up remote and pushing code..."

# Rename branch to main (GitHub standard)
git branch -M main

# Add remote
git remote add origin https://github.com/$GITHUB_USERNAME/$REPO_NAME.git

# Push to GitHub
echo ""
echo "Pushing code to GitHub..."
git push -u origin main

echo ""
echo "✅ Code pushed to GitHub!"
echo ""
echo "Next steps:"
echo "1. Go to https://vercel.com"
echo "2. Sign up/login with GitHub"
echo "3. Click 'Add New Project'"
echo "4. Import your repository: $REPO_NAME"
echo "5. Click 'Deploy'"
echo ""
echo "Your site will be live in ~2 minutes! 🎉"

