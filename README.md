# Nikhil Meshram — 3D Interactive Portfolio

An interactive 3D web portfolio built with **Three.js**, **WebGL**, **React 18**, **TypeScript**, and **Vite**, featuring procedural night-time architecture, custom post-processing shaders, interactive cloth-physics project cards, and a responsive editorial layout.

---

## ✨ Key Features

- **Procedural 3D Sanctuary (Three.js & WebGL)**: Real-time WebGL scene featuring procedural board-formed concrete and cedar textures, moonlight rim lighting, water reflections, animated foliage/wisps, and scroll-synchronized camera rigging.
- **Custom Post-Processing Pipeline**: Multi-pass bloom, ACES tone mapping, subtle chromatic aberration, vignette, and film grain.
- **Interactive Cloth-Shader Project Cards**: Project showcase cards rendered with an interactive WebGL cloth simulation (`pointermove` wind/brush interaction) and live preview links.
- **Responsive Design & Accessibility**: Adapts cleanly across desktop, tablet, and mobile viewports with a slide-out navigation drawer, progress rail, keyboard support (`Escape` to close menu), `prefers-reduced-motion` support, and a CSS-only `.no-webgl` fallback mode.
- **Standalone & Relative Asset Pathing**: Configured with Vite `base: './'` and relative public asset paths for seamless deployment on Vercel, Netlify, Cloudflare Pages, or GitHub Pages.

---

## 👨‍💻 About Me

- **Name**: Nikhil Meshram
- **Role**: Computer Science Student & Aspiring Web Developer
- **Education**: B.Tech in Computer Science and Engineering (3rd Year, 2024–Present)
- **Institution**: Ballarpur Institute of Technology (BIT)
- **GitHub**: [@nikhilmeshram2006](https://github.com/nikhilmeshram2006)
- **Email**: [nikhilmeshram894@gmail.com](mailto:nikhilmeshram894@gmail.com)

---

## 🚀 Featured Projects

1. **[Nikflix](https://nikhilmeshram2006.github.io/Nikflix/)**
   - Browser-based movie, TV series, and anime platform.
   - Built with HTML, CSS, JavaScript.
   - Features 106 curated titles across 12 genres, custom player, season/episode navigation, watchlists, and playback progress.
   - [Repository](https://github.com/nikhilmeshram2006/Nikflix)

2. **[Apple Music Clone](https://applemusic.antideploy.app)**
   - Web music player inspired by Apple Music.
   - Built with React, Vite, JavaScript.
   - Features full-length audio playback, word-synchronised lyrics, animated artwork, 218 pre-indexed tracks, search, playlists, and PWA support.
   - [Repository](https://github.com/nikhilmeshram2006/apple-music-clone-for-me-only)

3. **[F1 Telemetry Analyzer](https://github.com/nikhilmeshram2006/f1-telemetry-analyzer)**
   - Python tool for comparing Formula 1 driver telemetry.
   - Built with Python, Pandas, NumPy, Matplotlib, OpenF1 API.
   - Features speed, throttle, brake, and gear visualisations with driver comparisons and corner markers.

---

## 🛠️ Tech Stack

- **Frontend & 3D**: React 18, TypeScript, Vite, Three.js, WebGL, GLSL Shaders
- **Languages**: JavaScript, TypeScript, Python, Kotlin, HTML5, CSS3
- **Tools**: Git, GitHub, VS Code, Android Studio

---

## 📁 Project Structure

```text
├── index.html                        # Application shell & document metadata
├── vite.config.ts                    # Vite build config (relative base './')
├── tsconfig.json                     # TypeScript compiler configuration
├── package.json                      # Dependencies & npm scripts
├── public/
│   ├── landing-pages/
│   │   ├── kage.html                 # 3D WebGL portfolio experience & sections
│   │   └── secret-pathways-assets/   # Local Three.js runtime, subset fonts & foreground cutouts
│   └── projects/                     # Project showcase banners & previews
└── src/
    ├── main.tsx                      # React entry point
    ├── App.tsx                       # Root application component
    ├── Scene.tsx                     # Portfolio scene wrapper & typography config
    ├── index.css                     # Full-bleed viewport styles
    └── shaders/
        ├── threeui.css               # Frame presentation styles
        └── landing-pages/
            ├── LandingPages.tsx      # KageLandingPage component wrapper
            ├── LandingPageFrame.tsx  # Sandboxed iframe host & customization injection
            ├── pageRecipes.ts        # Typography & color recipes
            └── pageTypography.ts     # Dynamic stylesheet & font injection utilities
```

---

## 📦 Local Development & Production Build

```bash
# Clone the repository
git clone https://github.com/nikhilmeshram2006/new-portfolio-to-try.git
cd new-portfolio-to-try

# Install dependencies
npm install

# Start development server
npm run dev

# Type-check and create full production build in dist/
npm run build

# Preview the production build locally
npm run preview
```

---

## 🌐 Deployment

Running `npm run build` outputs a complete static bundle to `dist/` with relative asset paths (`base: './'`), ready to deploy directly to:

- **GitHub Pages**: Publish the `dist/` directory (or deploy via GitHub Actions).
- **Vercel / Netlify / Cloudflare Pages**: Set build command to `npm run build` and output directory to `dist`.
