# 🚀 Suvasis Sahoo - 3D Animated Portfolio

A stunning, fully interactive 3D animated portfolio website built with React, Three.js, and Framer Motion. Showcasing SAP ABAP development expertise with modern web technologies.

## ✨ Features

- **3D Animated Hero Section** - Interactive 3D graphics with particle effects
- **Smooth Animations** - Framer Motion powered transitions and effects
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- **Dark Theme** - Modern, professional dark UI with cyan and purple accents
- **Glassmorphism UI** - Modern glass-effect cards and components
- **Performance Optimized** - Fast loading with Vite
- **Accessibility** - WCAG compliant navigation and interactive elements

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **3D Graphics**: Three.js with React Three Fiber
- **Animations**: Framer Motion & GSAP
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **State Management**: Zustand

## 📋 Sections

1. **Hero** - Stunning 3D introduction with CTA buttons
2. **About** - Professional summary and quick stats
3. **Experience** - Timeline of work experience with company details
4. **Skills** - Categorized technical expertise
5. **Education** - Academic background and certifications
6. **Contact** - Multiple ways to connect

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```
   The application will open automatically at `http://localhost:3000`

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Preview Production Build**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
src/
├── components/
│   ├── 3D/              # Three.js components
│   ├── animations/      # Framer Motion components
│   ├── layout/          # Header, footer, layout
│   └── sections/        # Page sections
├── data/                # Portfolio content data
├── App.tsx              # Main app component
├── main.tsx             # Entry point
└── index.css            # Global styles
```

## 🎨 Customization

### Update Portfolio Content

Edit `src/data/portfolio.ts` to add your own:
- Personal information
- Work experience
- Skills and expertise
- Education and certifications

### Modify Styling

- **Colors**: Edit `tailwind.config.js` theme section
- **Animations**: Customize in `src/components/animations/MotionComponents.tsx`
- **3D Scene**: Modify `src/components/3D/AnimatedScene.tsx`

### Add New Sections

1. Create a new component in `src/components/sections/`
2. Import and add to `src/App.tsx`
3. Update navigation in `src/components/layout/Navigation.tsx`

## 🌐 Deployment

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm run build
# Upload the dist/ folder to Netlify
```

### Deploy to GitHub Pages

```bash
npm run build
# Push the dist/ folder to gh-pages branch
```

## 📦 Performance Tips

- Images are lazy-loaded
- 3D scene uses efficient particle system
- CSS animations use GPU acceleration
- Unused CSS is purged by Tailwind

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📄 License

MIT License - Feel free to use this template for your portfolio

## 📞 Contact

- **Email**: suvasissahoo343@gmail.com
- **LinkedIn**: https://linkedin.com/in/ss-suva
- **Phone**: +91 89676 51577

---

Built with ❤️ by Suvasis Sahoo
