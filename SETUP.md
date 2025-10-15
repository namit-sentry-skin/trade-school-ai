# 🚀 Quick Setup Guide

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build

```bash
npm run build
```

## 📦 Icons Used

This project uses **Lucide React** for all icons:
- `GraduationCap` - Logo
- `MessageCircle`, `BarChart3`, `Target` - Hero cards
- `Users`, `School`, `TrendingUp`, `Bot` - Stats
- `Bot`, `Zap`, `Target`, `BarChart3`, `Link2`, `Globe` - Features
- `Check` - Demo benefits and CTA
- `ArrowRight`, `Play`, `Calendar` - Buttons
- `Twitter`, `Linkedin`, `Facebook`, `Instagram`, `Heart` - Footer

## 🎨 Color Scheme

```css
--main-bg: #0B363C    /* Deep teal */
--accent: #C8FE62     /* Lime green */
--black: #333333      /* Dark gray */
--white-bg: #FFFFFF   /* Pure white */
--alt-bg: #F5F8F9     /* Light gray */
```

## 📁 Project Structure

```
src/
├── components/       # React components
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── Stats.jsx
│   ├── Features.jsx
│   ├── Demo.jsx
│   ├── CTA.jsx
│   └── Footer.jsx
├── styles/          # CSS files
│   ├── index.css
│   ├── App.css
│   └── [component].css
├── App.jsx
└── main.jsx
```

## 🌐 Deploy to Vercel

### Option 1: GitHub Integration (Recommended)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/vocational-trade-schools.git
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel auto-detects Vite config
   - Click "Deploy"
   - Done! 🎉

### Option 2: Vercel CLI

```bash
npm i -g vercel
vercel
```

Follow the prompts to deploy.

## 🔄 Automatic Deployments

Once connected to GitHub:
- Every push to `main` → Production deployment
- Every PR → Preview deployment

## 📝 Customization

### Change Colors
Edit `src/styles/index.css`:
```css
:root {
  --main-bg: #YourColor;
  --accent: #YourAccent;
  /* ... */
}
```

### Change Icons
Import from Lucide React:
```jsx
import { YourIcon } from 'lucide-react'

<YourIcon size={24} strokeWidth={2} />
```

Browse all icons: [lucide.dev](https://lucide.dev)

### Update Content
Edit component files in `src/components/`

## 🐛 Troubleshooting

**Port already in use?**
```bash
npm run dev -- --port 3001
```

**Build errors?**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Icons not showing?**
Make sure `lucide-react` is installed:
```bash
npm install lucide-react
```

## 📚 Resources

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [Lucide Icons](https://lucide.dev/)
- [Vercel Documentation](https://vercel.com/docs)

