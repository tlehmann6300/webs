/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        'ibc-green': '#6D9744',
        'ibc-green-light': '#7db356',
        'ibc-green-dark': '#355B2C',
        'ibc-blue': '#20234A',
        'ibc-blue-dark': '#151730',
        'ibc-blue-medium': '#4d5061',
        'ibc-accent-orange': '#ef9e27',
        'ibc-accent-blue': '#3481b9',
        'ibc-text-secondary': 'rgba(77, 80, 97, 0.8)',
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      screens: {
        'xs': '360px',
        'sm': '480px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1200px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
  // Ensure Tailwind doesn't conflict with Bootstrap
  corePlugins: {
    preflight: false,
  },
}
