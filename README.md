# John Doe - Video Editor & Designer Portfolio

A stunning Awwwards-style portfolio website built with Next.js featuring smooth scrolling, stacking effects, and modern animations.

## 🎨 Features

- **Smooth Scrolling**: Lenis integration for buttery-smooth scrolling experience
- **Stacking Effects**: Cards that pin and stack on top of each other while scrolling
- **GSAP Animations**: Parallax effects, fade-ins, and interactive animations
- **Floating Navbar**: Glass morphism navigation that animates on scroll
- **Video Portfolio**: Dedicated page with category filtering and video modal
- **Responsive Design**: Mobile-first design that looks great on all devices
- **SEO Optimized**: Comprehensive metadata and semantic HTML

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17.0 or higher
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with SEO
│   │   ├── page.tsx             # Homepage
│   │   ├── globals.css          # Global styles
│   │   └── videos/
│   │       └── page.tsx         # Videos portfolio page
│   └── components/
│       ├── SmoothScroll.tsx     # Lenis smooth scroll wrapper
│       ├── FloatingNavbar.tsx   # Animated navbar
│       ├── Hero.tsx             # Hero section with parallax
│       ├── About.tsx            # About section
│       ├── Skills.tsx           # Skills with stacking effect
│       ├── CTA.tsx              # Call-to-action section
│       ├── Footer.tsx           # Footer component
│       ├── VideoGrid.tsx        # Video grid with filtering
│       └── VideoModal.tsx       # Video player modal
```

## 🎯 Key Technologies

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **GSAP** - Advanced animations
- **Lenis** - Smooth scrolling
- **Framer Motion** - UI animations

## 🎨 Design Features

- Dark theme with vibrant gradients
- Glass morphism effects
- Floating gradient orbs
- Stacking scroll animations
- Parallax effects
- Smooth page transitions
- Hover micro-interactions

## 📝 Customization

To customize the content:

1. **Personal Info**: Update name and details in components
2. **Videos**: Edit the `videos` array in `VideoGrid.tsx`
3. **Colors**: Modify color palette in `tailwind.config.ts`
4. **Social Links**: Update links in `Footer.tsx`

## 🔧 Node.js Version Note

This project requires Node.js version 18.17.0 or higher. If you're using an older version, please update Node.js:

- Using nvm: `nvm install 18 && nvm use 18`
- Download from: https://nodejs.org/

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**John Doe**
- Video Editor & Designer
- Portfolio: [Your website]
- Email: adil@example.com

---

Built with ❤️ using Next.js and modern web technologies
