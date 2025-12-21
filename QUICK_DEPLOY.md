# Quick Deployment Guide

## 🚀 Deploy Your Portfolio in 3 Steps

### Step 1: Create GitHub Repository

1. Go to **[github.com/new](https://github.com/new)**
2. Fill in:
   - **Repository name**: `portfolio-rebranded` (or your choice)
   - **Description**: "Personal portfolio website built with Next.js 15"
   - **Visibility**: Public or Private
   - **⚠️ IMPORTANT**: Do NOT check "Add a README file", "Add .gitignore", or "Choose a license" (we already have these)
3. Click **"Create repository"**

### Step 2: Push Code to GitHub

After creating the repo, run these commands in your terminal:

```bash
# Navigate to your project
cd "/Users/tanzeelrahman/Desktop/Winter 2025/Portfolio Rebranded"

# Rename branch to main (GitHub standard)
git branch -M main

# Add your GitHub repository as remote (replace YOUR_USERNAME and REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Push code to GitHub
git push -u origin main
```

**Or use the automated script:**
```bash
./deploy.sh
```

### Step 3: Deploy to Vercel (Recommended)

Vercel is the best platform for Next.js - it's free and made by the Next.js team!

1. Go to **[vercel.com](https://vercel.com)** and sign up/login
   - **Tip**: Use "Sign in with GitHub" for easiest setup
2. Click **"Add New Project"**
3. Import your GitHub repository (`portfolio-rebranded`)
4. Vercel will auto-detect Next.js settings - just click **"Deploy"**
5. Wait ~2 minutes and your site will be live! 🎉

Your site URL will be: `your-portfolio.vercel.app`

## ✨ What Happens Next?

- **Auto-deployment**: Every time you push to GitHub, Vercel automatically deploys
- **Custom domain**: You can add your own domain later in Vercel settings
- **Free forever**: Vercel's free tier is perfect for portfolios

## 📝 Before Deploying

Make sure you've added:
- ✅ Your images to `public/images/`
- ✅ Your resume PDF to `public/resume.pdf`
- ✅ Updated any links you want to change

## 🆘 Need Help?

- **GitHub Issues**: Check the repository on GitHub
- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)
- **Next.js Docs**: [nextjs.org/docs](https://nextjs.org/docs)

---

**That's it! Your portfolio will be live in minutes! 🚀**

