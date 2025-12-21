# Step-by-Step Vercel Deployment Guide

## 🚀 Deploy Your Portfolio

### Step 1: Sign Up/Login to Vercel

1. Go to **[vercel.com](https://vercel.com)**
2. Click **"Sign Up"** (top right)
3. Choose **"Continue with GitHub"** (easiest option)
4. Authorize Vercel to access your GitHub account

### Step 2: Import Your Repository

1. After signing in, you'll see the Vercel dashboard
2. Click **"Add New..."** button (or "New Project")
3. You'll see a list of your GitHub repositories
4. Find **"Porfolio-Website-TanzeelR-"** and click **"Import"**

### Step 3: Configure Project

Vercel will auto-detect Next.js settings, but verify:

- **Framework Preset**: Next.js ✅ (auto-detected)
- **Root Directory**: `./` (leave as default)
- **Build Command**: `npm run build` ✅ (auto-detected)
- **Output Directory**: `.next` ✅ (auto-detected)
- **Install Command**: `npm install` ✅ (auto-detected)

**You can leave everything as default!** Just click **"Deploy"**

### Step 4: Wait for Deployment

- Vercel will:
  1. Install dependencies (`npm install`)
  2. Build your project (`npm run build`)
  3. Deploy to their CDN
- This takes about 2-3 minutes
- You'll see a progress bar

### Step 5: Your Site is Live! 🎉

- Once deployed, you'll see:
  - **Production URL**: `porfolio-website-tanzeelr-[random].vercel.app`
  - Click the URL to see your live site!

## 📝 Custom Domain Options

### Option 1: Free Vercel Subdomain (FREE)

You can customize your Vercel subdomain:

1. Go to your project settings in Vercel
2. Click **"Domains"** tab
3. You can change it to something like:
   - `tanzeel-rahman.vercel.app`
   - `tanzeel-portfolio.vercel.app`
   - `tanzeelr.vercel.app`

**This is completely FREE!**

### Option 2: Custom Domain (.com, .dev, etc.) - Domain Cost Only

**Important**: You need to BUY the domain, but Vercel hosting is free!

**Where to buy domains:**
- **Namecheap**: ~$10-15/year for .com
- **Google Domains**: ~$12/year for .com
- **Cloudflare**: ~$8-10/year for .com (cheapest)
- **GoDaddy**: ~$12-15/year for .com

**Steps to add custom domain:**

1. Buy your domain from a registrar (e.g., `tanzeelrahman.com`)
2. In Vercel project settings → **"Domains"** tab
3. Click **"Add Domain"**
4. Enter your domain (e.g., `tanzeelrahman.com`)
5. Vercel will give you DNS settings
6. Add those DNS records to your domain registrar
7. Wait 24-48 hours for DNS to propagate
8. **FREE SSL certificate** is automatically added by Vercel!

**Cost breakdown:**
- Domain: ~$10-15/year (one-time purchase)
- Vercel hosting: **FREE forever**
- SSL certificate: **FREE** (included)

### Option 3: Free Domain Alternatives

- **Freenom** (.tk, .ml, .ga domains) - Free but less professional
- **GitHub Pages** with custom domain - Free hosting, but need to buy domain

## 💡 Recommendation

**For now**: Use the free Vercel subdomain (you can customize it!)
**Later**: Buy a `.com` domain when you're ready (~$10/year)

The `.vercel.app` domain is perfectly fine for portfolios and looks professional!

