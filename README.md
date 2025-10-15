# TradeSchool AI 🎓

A modern, beautiful landing page for vocational trade schools featuring an AI-powered conversational agent platform designed to boost enrollment conversions.

## 🚀 Features

- **Modern UI/UX** - Clean, responsive design with smooth animations
- **Interactive Demo** - Live chat demo showcasing the AI conversation experience
- **Fully Responsive** - Optimized for all devices and screen sizes
- **Performance Optimized** - Built with Vite for lightning-fast load times
- **Production Ready** - Configured for deployment on Vercel

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Next-generation frontend tooling
- **CSS3** - Custom CSS with modern features (Grid, Flexbox, Animations)
- **JavaScript (ES6+)** - No TypeScript, pure JSX

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/vocational-trade-schools.git
   cd vocational-trade-schools
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🏗️ Project Structure

```
vocational-trade-schools/
├── src/
│   ├── components/          # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Stats.jsx
│   │   ├── Features.jsx
│   │   ├── Demo.jsx
│   │   ├── CTA.jsx
│   │   └── Footer.jsx
│   ├── styles/              # CSS stylesheets
│   │   ├── index.css       # Global styles
│   │   ├── App.css         # App & utility classes
│   │   ├── Navbar.css
│   │   ├── Hero.css
│   │   ├── Stats.css
│   │   ├── Features.css
│   │   ├── Demo.css
│   │   ├── CTA.css
│   │   └── Footer.css
│   ├── App.jsx             # Main App component
│   └── main.jsx            # Entry point
├── index.html              # HTML template
├── vite.config.js          # Vite configuration
├── vercel.json             # Vercel deployment config
└── package.json            # Dependencies
```

## 🎨 Sections

1. **Hero** - Eye-catching introduction with animated gradient visuals
2. **Stats** - Key metrics and achievements
3. **Features** - Platform capabilities and benefits
4. **Demo** - Interactive chat demo
5. **CTA** - Call-to-action for sign-up/trial
6. **Footer** - Links and company information

## 📱 Responsive Design

The website is fully responsive and optimized for:
- 📱 Mobile devices (320px+)
- 📱 Tablets (768px+)
- 💻 Desktops (1024px+)
- 🖥️ Large screens (1440px+)

## 🚀 Deployment

### Deploy to Vercel

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/your-username/vocational-trade-schools.git
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Vite configuration
   - Click "Deploy"

3. **Automatic Deployments**
   - Every push to `main` branch triggers automatic deployment
   - Preview deployments for pull requests

### Manual Deployment

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview
```

The build output will be in the `dist/` folder.

## 🔧 Configuration

### Environment Variables (Optional)

Create a `.env` file in the root directory:

```env
# Add any environment variables here
VITE_API_URL=your_api_url
```

### Customization

- **Colors**: Update CSS variables in `src/styles/index.css`
- **Content**: Modify component files in `src/components/`
- **Fonts**: Update font imports in `src/styles/index.css`
- **Logo**: Replace emoji with your logo in `Navbar.jsx` and `Footer.jsx`

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🌟 Key Features Showcase

### Interactive Chat Demo
The Demo section features a working chat interface that demonstrates:
- Natural conversation flow
- Quick reply buttons
- Bot and user message styling
- Real-time interaction

### Smooth Animations
- CSS keyframe animations
- Hover effects
- Floating elements
- Gradient rotations

### Modern Design Elements
- Gradient backgrounds
- Glass-morphism effects
- Custom card designs
- Icon integration

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [Vite](https://vitejs.dev/)
- Powered by [React](https://react.dev/)
- Deployed on [Vercel](https://vercel.com/)

## 📞 Support

For support, email support@tradeschoolai.com or open an issue in the repository.

---

Made with ❤️ for vocational trade schools

