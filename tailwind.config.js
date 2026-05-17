/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        sans: ['Outfit', 'system-ui', 'sans-serif'],
        mono: ['"DM Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        blush: {
          50:  '#FFF7F8',
          100: '#FDEBEF',
          150: '#FBDDE4',
          200: '#F8CAD6',
          300: '#F1A8BD',
          400: '#E380A0',
          500: '#C95F84',
          600: '#9F3F61',
          700: '#6E2A45',
          800: '#3D1B2E',
        },
        gold: {
          200: '#F2E2CE',
          300: '#E5C9A8',
          400: '#D4A574',
          500: '#B8896B',
          600: '#8E6A51',
        },
        ink: '#2A1623',
      },
    },
  },
  plugins: [],
};
