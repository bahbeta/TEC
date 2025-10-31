/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-calm': '#1E2A3A',
        'warm-sand': '#E7D9C4',
        'terracotta': '#C97A65',
        'cloud-white': '#FAF9F6',
        'charcoal-black': '#1d0c2f',
        'soft-white': '#fffbf4',
        'muted-gold': '#af3b19',
        'warm-beige': '#fffbf4',
        'slate-gray': '#243859',
        'desert-taupe': '#862a22',
      },
      fontFamily: {
        'display': ['Playfair Display', 'Georgia', 'serif'],
        'body': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Helvetica Neue', 'sans-serif'],
        'sans': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
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
