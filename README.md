# Shivani Daragani - Pharmaceutical Portfolio

A modern, visually stunning portfolio website showcasing the professional journey of Shivani Daragani, Medical Business Associate at GlaxoSmithKline Pharmaceuticals.

## 🌟 Features

- **Pharmaceutical Theme**: Custom color palette with medical blues, teals, and greens
- **Glassmorphism UI**: Modern frosted glass effects throughout
- **Smooth Animations**: Framer Motion powered scroll and hover animations
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **Interactive Elements**: Smooth scrolling navigation, hover effects, and dynamic content
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## 🎨 Design Highlights

- Dark mode with vibrant pharmaceutical accents
- Floating particle animations
- Gradient backgrounds and orbs
- Interactive card hover effects
- Professional typography (Inter & Outfit fonts)
- Custom scrollbar styling

## 🛠️ Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Animation library
- **React Icons** - Icon components

## 📦 Installation

```bash
# Clone the repository
git clone <repository-url>
cd Shivani-Portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173/`

## 🚀 Build & Deploy

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`

## 📂 Project Structure

```
Shivani-Portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Navigation with smooth scroll
│   │   ├── Hero.jsx         # Hero section with animations
│   │   ├── About.jsx        # Professional summary
│   │   ├── Education.jsx    # Educational background
│   │   ├── Skills.jsx       # Categorized skills
│   │   ├── Experience.jsx   # Professional experience
│   │   ├── Projects.jsx     # Research projects
│   │   ├── Awards.jsx       # Awards & achievements
│   │   ├── Contact.jsx      # Contact information
│   │   └── Footer.jsx       # Footer with links
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # React entry point
│   └── index.css            # Global styles & utilities
├── index.html               # HTML template
├── tailwind.config.js       # Tailwind configuration
├── vite.config.js           # Vite configuration
└── package.json             # Dependencies
```

## 🎯 Sections

1. **Hero** - Introduction with contact info and CTAs
2. **About** - Professional summary and key highlights
3. **Education** - B.Pharm degree and coursework
4. **Skills** - Six categorized skill areas
5. **Experience** - GSK role with achievements
6. **Projects** - Two major research projects
7. **Awards** - 10+ awards and recognitions
8. **Contact** - Multiple contact methods
9. **Footer** - Quick links and social media

## 🎨 Color Palette

```css
/* Primary Colors */
--pharma-blue: #0066cc --pharma-teal: #00ced1 --pharma-green: #4caf50
  /* Dark Theme */ --dark-bg: #0a0e27 --dark-surface: #131829
  --dark-elevated: #1a1f3a;
```

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ✨ Custom Features

### Glassmorphism

```css
.glass {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
```

### Gradient Text

```css
.gradient-text {
  background: linear-gradient(135deg, #0066cc, #00ced1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

### Card Hover Effect

```css
.card-hover:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 102, 204, 0.3);
}
```

## 📄 License

This project is created for Shivani Daragani's professional portfolio.

## 👤 Contact

**Shivani Daragani**

- Email: shivani.daragani@gmail.com
- Phone: +91 6281301387
- LinkedIn: [linkedin.com/in/shivani-daragani](https://linkedin.com/in/shivani-daragani)
- Location: Hyderabad, India

---

Made with ❤️ for Pharmaceutical Excellence
