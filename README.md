# 🚀 3D Portfolio - Seif Elden Hesham

A modern, interactive portfolio website showcasing projects and skills with stunning 3D visuals, smooth animations, and exceptional user experience. Built with cutting-edge web technologies.

![Portfolio Preview](./public/images/og-image.png)

## ✨ Features

### 🎨 Modern Design

- **Glassmorphism UI** - Beautiful semi-transparent components with backdrop blur effects
- **Gradient Accents** - Purple/blue gradient theme throughout the design
- **Dark Mode** - Optimized for low-light viewing with high contrast
- **Responsive Layout** - Fully responsive across all devices (mobile, tablet, desktop)

### 🎭 Interactive 3D Experience

- **Three.js Integration** - Real-time 3D rendering and animations
- **React Three Fiber** - Declarative 3D scene management
- **Interactive Models** - Engaging 3D elements that respond to user interaction
- **Smooth Animations** - GSAP-powered scroll-triggered animations

### ⚡ Performance Optimized

- **Lazy Loading** - Components load on-demand for faster initial page load
- **Code Splitting** - Optimized bundle sizes with automatic chunking
- **Image Optimization** - Progressive loading with error handling
- **Passive Event Listeners** - Enhanced scroll performance
- **Production Build** - Minified and optimized with Terser

### ♿ Accessibility First

- **Skip Navigation** - Keyboard users can skip to main content
- **ARIA Labels** - Proper semantic HTML and screen reader support
- **Keyboard Navigation** - Full keyboard accessibility
- **Scroll Progress** - Visual indicator of page scroll position
- **Focus Management** - Programmatic focus for skip links

### 🔍 SEO Optimized

- **Dynamic Sitemap** - Auto-generated with git commit dates
- **Open Graph Tags** - Rich social media previews
- **Semantic HTML** - Proper heading hierarchy and structure
- **Meta Descriptions** - Comprehensive meta tags for search engines
- **Robots.txt** - Search engine crawling configuration

## 🛠️ Tech Stack

### Frontend Framework

- **React 19** - Latest React with concurrent features
- **Vite 6** - Lightning-fast build tool and dev server

### 3D Graphics & Animation

- **Three.js 0.176** - WebGL 3D library
- **React Three Fiber 9** - React renderer for Three.js
- **React Three Drei 10** - Useful helpers for R3F
- **GSAP 3** - Professional-grade animation library
- **React Three Postprocessing 3** - Post-processing effects

### Styling

- **Tailwind CSS 4** - Utility-first CSS framework
- **Custom CSS** - Advanced animations and effects
- **Google Fonts** - Mona Sans typography

### Forms & Communication

- **EmailJS** - Contact form email integration
- **React Hook Form** - Form validation (via dependencies)

### Utilities

- **React CountUp** - Animated number counters
- **React Responsive** - Responsive breakpoint detection

### Development Tools

- **ESLint 9** - Code linting and quality
- **TypeScript Types** - Type definitions for better DX
- **gh-pages** - Automated GitHub Pages deployment

## 📁 Project Structure

```
3D-Portfolio/
├── public/                    # Static assets
│   ├── images/               # Images and icons
│   │   ├── og-image.png     # Social media preview
│   │   ├── logos/           # Tech stack logos
│   │   └── ...              # Project images
│   ├── sitemap.xml          # Auto-generated sitemap
│   └── robots.txt           # Search engine config
├── scripts/                  # Build scripts
│   └── generate-sitemap.js  # Sitemap generator
├── src/
│   ├── components/          # Reusable components
│   │   ├── models/         # 3D model components
│   │   ├── NavBar.jsx      # Navigation bar
│   │   ├── ScrollProgressIndicator.jsx
│   │   ├── SkipNavigation.jsx
│   │   ├── TechStackCarousel.jsx
│   │   └── ...
│   ├── sections/            # Page sections
│   │   ├── Hero.jsx        # Hero section with 3D
│   │   ├── AboutMe.jsx     # About section
│   │   ├── ShowCaseSection.jsx  # Projects showcase
│   │   ├── FeatureCards.jsx     # Skills/abilities
│   │   ├── Contact.jsx     # Contact form
│   │   └── Footer.jsx      # Footer with social links
│   ├── constants/           # Static data
│   │   └── index.js        # Projects, skills, etc.
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
├── package.json             # Dependencies
└── vite.config.js          # Vite configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/seifXXII/3D-Portfolio.git
   cd 3D-Portfolio
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Set up EmailJS** (for contact form)

   - Create an account at [EmailJS](https://www.emailjs.com/)
   - Create an email service and template
   - Add your credentials to the Contact component

4. **Start development server**

   ```bash
   pnpm dev
   # or
   npm run dev
   ```

5. **Open your browser**
   - Navigate to `http://localhost:5173`

## 📦 Build & Deployment

### Build for Production

```bash
pnpm build
# or
npm run build
```

This will:

1. Generate a fresh sitemap with the current date
2. Build the production bundle
3. Optimize assets and code
4. Output to `/dist` directory

### Deploy to GitHub Pages

```bash
pnpm deploy
# or
npm run deploy
```

### Preview Production Build

```bash
pnpm preview
# or
npm run preview
```

## 🎯 Key Highlights

### Performance Features

- ✅ **Lighthouse Score**: Optimized for performance, accessibility, best practices, and SEO
- ✅ **Code Split**: Lazy-loaded components reduce initial bundle size
- ✅ **Image Loading**: Progressive image loading with fallback UI
- ✅ **Passive Listeners**: Improved scroll performance

### Accessibility Features

- ✅ **WCAG Compliant**: Follows web accessibility guidelines
- ✅ **Keyboard Navigation**: Full keyboard support
- ✅ **Screen Reader**: Proper ARIA labels and semantic HTML
- ✅ **Focus Indicators**: Clear focus states for interactive elements

### SEO Features

- ✅ **Dynamic Sitemap**: Auto-generated on each build
- ✅ **Open Graph**: Rich social media previews
- ✅ **Semantic HTML**: Proper document structure
- ✅ **Meta Tags**: Comprehensive SEO metadata

## 🧩 Customization

### Update Projects

Edit `src/constants/index.js` to add/modify projects:

```javascript
const projects = [
  {
    id: 1,
    title: "Your Project",
    subtitle: "Project Subtitle",
    description: "Project description...",
    imagePath: "/images/your-project.png",
    liveUrl: "https://your-project.com",
    techStack: [...],
    featured: true
  }
];
```

### Modify Colors

Update the CSS custom properties in `src/index.css`:

```css
:root {
  --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --accent-gradient: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  --glow-color: rgba(102, 126, 234, 0.4);
}
```

### Update Personal Info

- Edit meta tags in `index.html`
- Update social links in `src/constants/index.js`
- Modify navigation in `src/components/NavBar.jsx`

## 📝 Scripts

| Command                 | Description               |
| ----------------------- | ------------------------- |
| `pnpm dev`              | Start development server  |
| `pnpm build`            | Build for production      |
| `pnpm preview`          | Preview production build  |
| `pnpm deploy`           | Deploy to GitHub Pages    |
| `pnpm lint`             | Run ESLint                |
| `pnpm generate:sitemap` | Generate sitemap manually |

## 🐛 Known Issues & Fixes

### Memory Leaks Prevention

- ✅ Event listeners properly cleaned up in useEffect
- ✅ Scroll listeners use passive mode
- ✅ Components unmount cleanly

### Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- WebGL support required for 3D features
- Graceful fallbacks for unsupported features

## 🤝 Contributing

This is a personal portfolio project, but suggestions are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Seif Elden Hesham**

- Portfolio: [seifXXII.github.io/3D-Portfolio](https://seifXXII.github.io/3D-Portfolio/)
- GitHub: [@seifXXII](https://github.com/seifXXII)
- LinkedIn: [seifelden-hesham](https://linkedin.com/in/seifelden-hesham/)
- Instagram: [@dawwud1\_](https://www.instagram.com/dawwud1_/)

## 🙏 Acknowledgments

- [Three.js](https://threejs.org/) - 3D graphics library
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) - React renderer for Three.js
- [GSAP](https://greensock.com/gsap/) - Animation library
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Vite](https://vitejs.dev/) - Build tool

---

<div align="center">
  
  **⭐ Star this repo if you found it helpful!**
  
  Made with ❤️ by Seif Elden Hesham
  
</div>
