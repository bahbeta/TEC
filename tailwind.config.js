/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'charcoal-black': '#1d0c2f',
        'soft-white': '#fffbf4',
        'muted-gold': '#af3b19',
        'warm-beige': '#fffbf4',
        'slate-gray': '#243859',
        'desert-taupe': '#862a22',
        'dark-teal': '#0B1D26',
        'golden-accent': '#FBD784',
        'navy-deep': '#0f2027',
      },
      fontFamily: {
        'heading': ['-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'Segoe UI', 'Helvetica Neue', 'sans-serif'],
        'body': ['-apple-system', 'BlinkMacSystemFont', 'SF Pro Text', 'Segoe UI', 'Helvetica Neue', 'sans-serif'],
        'accent': ['-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'Segoe UI', 'Helvetica Neue', 'sans-serif'],
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Archivo', 'Inter', 'sans-serif'],
      },
      maxWidth: {
        'content': '1120px',
      },
      spacing: {
        'section-desktop': '140px',
        'section-mobile': '100px',
      },
      letterSpacing: {
        'apple': '-0.022em',
        'apple-tight': '-0.003em',
      },
      lineHeight: {
        'apple': '1.2',
        'apple-body': '1.47059',
      },
    },
  },
  plugins: [],
}
