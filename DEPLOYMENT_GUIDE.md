# 🚀 Deployment Guide - Dr. Sarra ISMAIL's Dentist Website

## 📋 Overview
This guide will help you deploy the dentist website to GitHub Pages for free hosting.

## 🔧 Method 1: Automatic Deployment with GitHub Actions (Recommended)

### Step 1: Create GitHub Repository
1. Go to [GitHub.com](https://github.com) and sign in
2. Click "New repository" (green button)
3. Repository settings:
   - **Name**: `dr-sarra-ismail-dentist` (or any name you prefer)
   - **Description**: `Professional dentist website for Dr. Sarra ISMAIL in Sfax, Tunisia`
   - **Visibility**: Public (required for free GitHub Pages)
   - **Initialize**: Don't check any boxes (we have existing code)
4. Click "Create repository"

### Step 2: Upload Your Code
Open terminal/command prompt in your project folder and run:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit: Dr. Sarra ISMAIL dentist website"

# Add GitHub repository as remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/dr-sarra-ismail-dentist.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select "GitHub Actions"
5. The website will automatically deploy when you push changes

### Step 4: Access Your Website
- Your website will be available at: `https://YOUR_USERNAME.github.io/dr-sarra-ismail-dentist/`
- First deployment takes 2-5 minutes
- Check "Actions" tab to see deployment progress

## 🔧 Method 2: Manual Deployment

### Step 1: Build the Project Locally
```bash
# Build the static version
npm run build

# This creates an 'out' folder with static files
```

### Step 2: Create GitHub Repository
Follow Step 1 from Method 1 above.

### Step 3: Upload Built Files
1. Copy all files from the `out` folder
2. Create a new branch called `gh-pages` in your repository
3. Upload the files to the `gh-pages` branch
4. Enable GitHub Pages to use the `gh-pages` branch

## 🌐 Custom Domain (Optional)

### If you want a custom domain like `www.dr-sarra-ismail.com`:

1. **Buy a domain** from providers like:
   - Namecheap
   - GoDaddy
   - Google Domains

2. **Configure DNS**:
   - Add CNAME record: `www` → `YOUR_USERNAME.github.io`
   - Add A records for apex domain:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```

3. **Configure GitHub Pages**:
   - Go to repository Settings → Pages
   - Add your custom domain
   - Enable "Enforce HTTPS"

## 📧 EmailJS Configuration for Production

### Important: Update EmailJS Settings
1. Go to [EmailJS Dashboard](https://www.emailjs.com/)
2. Add your GitHub Pages domain to allowed origins:
   - `https://YOUR_USERNAME.github.io`
   - Your custom domain (if using one)

3. Update `.env.local` is not used in production, so EmailJS keys are in the code
4. For security, consider using GitHub Secrets for sensitive data

## 🔍 Troubleshooting

### Common Issues:

1. **404 Error on GitHub Pages**
   - Check if GitHub Pages is enabled
   - Verify the source is set correctly
   - Wait 5-10 minutes for propagation

2. **Build Fails**
   - Check the Actions tab for error details
   - Ensure all dependencies are in package.json
   - Verify Next.js configuration is correct

3. **EmailJS Not Working**
   - Verify domain is added to EmailJS allowed origins
   - Check browser console for CORS errors
   - Test with development domain first

4. **Images Not Loading**
   - Ensure `images: { unoptimized: true }` is in next.config.ts
   - Use relative paths for images

### Build Commands Reference:
```bash
# Development
npm run dev

# Production build
npm run build

# Deploy (same as build for our setup)
npm run deploy
```

## 📱 Mobile Testing
After deployment, test on:
- Mobile phones (iOS/Android)
- Tablets
- Different browsers (Chrome, Safari, Firefox)

## 🔄 Updating the Website

### To make changes:
1. Edit your code locally
2. Test with `npm run dev`
3. Commit and push changes:
   ```bash
   git add .
   git commit -m "Update: description of changes"
   git push
   ```
4. GitHub Actions will automatically redeploy

## 📊 Analytics (Optional)

### Add Google Analytics:
1. Create Google Analytics account
2. Get tracking ID
3. Add to your website's `<head>` section

### Monitor Performance:
- Google PageSpeed Insights
- GTmetrix
- Lighthouse (built into Chrome DevTools)

## 🎯 SEO Optimization

The website is already optimized with:
- ✅ Meta descriptions
- ✅ Proper headings structure
- ✅ Mobile responsive design
- ✅ Fast loading times
- ✅ Semantic HTML

### Additional SEO Steps:
1. Submit to Google Search Console
2. Create sitemap.xml
3. Add structured data for local business
4. Optimize for local Sfax, Tunisia searches

---

## 🆘 Need Help?

If you encounter issues:
1. Check the GitHub Actions logs
2. Verify all files are committed and pushed
3. Ensure GitHub Pages is enabled
4. Wait 5-10 minutes for changes to propagate

**Your website will be live at**: `https://YOUR_USERNAME.github.io/REPOSITORY_NAME/`

---

**🦷 Ready to share Dr. Sarra ISMAIL's professional dental practice with the world!** ✨
