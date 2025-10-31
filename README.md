# The Elevate Collective - Website

A modern, responsive single-page website for The Elevate Collective, a premium wellness retreat company in the UAE.

## 🎨 Design Features

- **Apple-inspired minimalism** with warmth
- **Smooth animations** using Framer Motion
- **Responsive design** for all devices
- **Premium color palette** (Charcoal Black, Muted Gold, Warm Beige)
- **Google Fonts integration** (Cinzel, Inter, Montserrat)

## 🚀 Tech Stack

- **React 19.2** - UI framework
- **Vite 5.4** - Build tool
- **Tailwind CSS 4.1** - Styling
- **Framer Motion 12** - Animations
- **React Icons 5.5** - Icon library

## 📦 Getting Started

The development server is already running at: **http://localhost:5173/**

### Commands

```bash
# Development server (already running)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📐 Website Structure

The website includes 10 main sections:

1. **Hero** - Full viewport hero with CTA buttons
2. **About** - Two-column layout introducing The Elevate Collective
3. **Philosophy** - Centered content with decorative gold dividers
4. **Who We Serve** - Target audience highlights
5. **Experiences** - 4 signature retreat cards (Journey, Full-Day, Desert, Bali)
6. **Community** - Partner collaborations and social links
7. **Press** - Carousel showcasing media features
8. **Upcoming Moments** - Timeline of events
9. **Join the Collective** - Newsletter signup form
10. **Footer** - Multi-column footer with links and social icons

## 🎯 Key Features

- **Smooth scroll navigation** between sections
- **Hover animations** on cards and buttons
- **Responsive grid layouts** for all screen sizes
- **Interactive carousel** in Press section
- **Form validation** in newsletter signup
- **Parallax effects** on hero section
- **Accessibility features** (ARIA labels, keyboard navigation)

## 🖼️ Images

The website uses Unsplash images as placeholders. Replace with actual brand photography:

- Hero: Desert sunrise/meditation landscape
- About: Wellness training session
- Who We Serve: Professional in meditation/movement
- Experience Cards: Indoor wellness, fitness training, desert camping, Bali landscape

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to modify the color palette:

```js
colors: {
  'charcoal-black': '#1C1C1C',
  'soft-white': '#FAF9F6',
  'muted-gold': '#D4AF37',
  'warm-beige': '#EAE3D2',
  'slate-gray': '#6E6E6E',
  'desert-taupe': '#B89F89',
}
```

### Typography

Google Fonts are loaded in `index.html`. The design uses:
- **Cinzel** for headings
- **Inter** for body text
- **Montserrat** for accents/CTAs

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px
- Large: > 1280px (max-width: 1200px)

## 🔧 Component Structure

```
src/
├── components/
│   ├── About.jsx
│   ├── Button.jsx
│   ├── Card.jsx
│   ├── Community.jsx
│   ├── Experiences.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── JoinCollective.jsx
│   ├── Philosophy.jsx
│   ├── Press.jsx
│   ├── Section.jsx
│   ├── UpcomingMoments.jsx
│   └── WhoWeServe.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## 🌟 Next Steps

1. **Replace placeholder images** with actual brand photography
2. **Integrate email service** for newsletter signup (e.g., Mailchimp, SendGrid)
3. **Add social media URLs** in Footer and Community sections
4. **Configure domain** and deploy to production
5. **Add analytics** (Google Analytics, Plausible, etc.)
6. **SEO optimization** (meta tags, sitemap, etc.)

## 📄 License

© 2025 The Elevate Collective. All rights reserved.
