# 📘 Git & GitHub Setup Guide

## 🚨 Important: Run these commands from your project directory

Open a terminal/PowerShell in this project directory:
```
c:\Users\Namit\Desktop\Namit\Personal Projects\Personal Website assets\Sentry Skin\vocational-trade-schools
```

## Step 1: Initialize Git

```bash
# Make sure you're in the project directory
cd "c:\Users\Namit\Desktop\Namit\Personal Projects\Personal Website assets\Sentry Skin\vocational-trade-schools"

# Remove any incorrect git repos from parent directories
rm -rf "C:\Users\Namit\.git"

# Initialize git in THIS directory
git init

# Set Sentry Skin credentials for this repo only
git config user.name "namit-sentry-skin"
git config user.email "namit@sentryskin.ai"

# Verify credentials
git config user.name
git config user.email
```

## Step 2: Create Initial Commit

```bash
# Stage all files
git add .

# Create initial commit
git commit -m "Initial commit: TradeSchool AI landing page

- Vite + React setup
- PP Mondwest & PP Telegraf custom fonts
- Clean hero section with dashboard SVG
- Custom color scheme (#0B363C, #C8FE62)
- Lucide icons throughout
- Fully responsive design
- Vercel-ready deployment"

# Rename branch to main
git branch -M main
```

## Step 3: Create GitHub Repository

### Option A: Using GitHub Web Interface

1. Go to https://github.com/organizations/sentry-skin (or your org)
2. Click **"New repository"**
3. Name: `vocational-trade-schools` (or your preferred name)
4. Description: "AI-powered conversational agent landing page for vocational trade schools"
5. Make it **Private** (recommended) or Public
6. **DO NOT** initialize with README, .gitignore, or license
7. Click **"Create repository"**

### Option B: Using GitHub CLI

```bash
# If you have GitHub CLI installed
gh repo create sentry-skin/vocational-trade-schools --private --source=. --remote=origin
```

## Step 4: Connect to GitHub

After creating the repo on GitHub, you'll see a URL like:
```
https://github.com/sentry-skin/vocational-trade-schools.git
```
or
```
git@github.com:sentry-skin/vocational-trade-schools.git
```

Run:
```bash
# Add remote (use HTTPS or SSH based on your setup)
git remote add origin https://github.com/YOUR-ORG/vocational-trade-schools.git

# Or with SSH:
# git remote add origin git@github.com:YOUR-ORG/vocational-trade-schools.git

# Push to GitHub
git push -u origin main
```

## Step 5: Deploy to Vercel

### Option A: Vercel Web Interface (Recommended)

1. Go to https://vercel.com
2. Click **"Add New Project"**
3. Import your GitHub repository
4. Vercel will auto-detect Vite configuration
5. Click **"Deploy"**
6. Done! 🎉

### Option B: Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Follow prompts:
# - Set up and deploy? Yes
# - Link to existing project? No
# - Project name: vocational-trade-schools
# - Directory: ./ (current)
# - Override settings? No

# For production deployment
vercel --prod
```

## ✅ Verification

After setup, verify:

```bash
# Check remote
git remote -v

# Check branch
git branch

# Check latest commit
git log --oneline -1

# Check git config
git config user.name
git config user.email
```

## 🔄 Daily Workflow

```bash
# Make changes to files...

# Stage changes
git add .

# Commit
git commit -m "Your commit message"

# Push to GitHub (triggers automatic Vercel deployment)
git push
```

## 🚀 Automatic Deployments

Once connected:
- ✅ Push to `main` → Production deployment
- ✅ Pull Request → Preview deployment
- ✅ Automatic builds on every commit

## 📝 Repository Details

- **Git User**: namit-sentry-skin
- **Git Email**: namit@sentryskin.ai
- **Framework**: Vite + React
- **Deployment**: Vercel

## 🆘 Troubleshooting

**Git is in wrong directory?**
```bash
# Check where .git folder is
Get-ChildItem -Hidden -Recurse -Filter ".git" -Depth 2

# Remove wrong .git folder
Remove-Item "C:\Users\Namit\.git" -Recurse -Force

# Start over from Step 1
```

**Permission denied on push?**
- Use HTTPS and enter GitHub personal access token
- Or set up SSH keys

**Vercel not detecting Vite?**
- Check that `vite.config.js` is in root
- Check that `package.json` has correct scripts
```


