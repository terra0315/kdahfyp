/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./views/**/*.{html,js,ejs}",
    "./public/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#006400',
          light: '#008000',
          dark: '#004d00',
        },
        secondary: {
          DEFAULT: '#1a1a1a',
          light: '#2d2d2d',
          dark: '#0d0d0d',
        },
      },
      fontFamily: {
        'quicksand': ['Quicksand', 'sans-serif'],
      },
      boxShadow: {
        'custom': '0 4px 12px rgba(0, 100, 0, 0.2)',
      },
      animation: {
        'highlight': 'highlight 2s ease-in-out',
      },
      keyframes: {
        highlight: {
          '0%': { backgroundColor: 'rgba(0, 100, 0, 0.2)' },
          '100%': { backgroundColor: 'rgba(55, 65, 81, 1)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
} 