# Deployment Guide

## Step 1: Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the **"+"** icon in the top right → **"New repository"**
3. Repository settings:
   - **Name**: `portfolio-rebranded` (or your preferred name)
   - **Description**: "Personal portfolio website built with Next.js 15"
   - **Visibility**: Public (or Private if you prefer)
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
4. Click **"Create repository"**

## Step 2: Push Code to GitHub

After creating the repo, GitHub will show you commands. But I'll help you run them here.

## Step 3: Deploy to Vercel (Recommended)

Vercel is the best platform for Next.js apps - it's free, fast, and made by the Next.js team.

1. Go to [vercel.com](https://vercel.com) and sign up/login (use GitHub to sign in)
2. Click **"Add New Project"**
3. Import your GitHub repository
4. Vercel will auto-detect Next.js settings
5. Click **"Deploy"**
6. Your site will be live in ~2 minutes!

### Vercel Settings (Auto-detected, but verify):
- **Framework Preset**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

## Alternative: Deploy to Netlify

1. Go to [netlify.com](https://netlify.com) and sign up
2. Click **"Add new site"** → **"Import an existing project"**
3. Connect your GitHub repo
4. Build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
5. Click **"Deploy site"**

## After Deployment

- Your site will have a URL like: `your-portfolio.vercel.app`
- You can add a custom domain later
- Every push to GitHub will auto-deploy!

## Important Notes

- Make sure to add your images before deploying (or they'll show as broken)
- Add your resume PDF to `public/resume.pdf`
- Update GitHub/LinkedIn links in the code if needed

