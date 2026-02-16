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
        'ibc-green-text': '#4e7a2f',
        'ibc-blue': '#20234A',
        'ibc-blue-dark': '#151730',
        'ibc-blue-mid': '#4d5061',
        'ibc-blue-light': '#60a5fa',
        'ibc-accent-orange': '#ef9e27',
        'ibc-accent-blue': '#3481b9',
        'ibc-bg-light': '#f8f9fa',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'soft': '12px',
        'card': '24px',
        'pill': '50px',
      },
      boxShadow: {
        'soft': '0 10px 30px -10px rgba(32, 35, 74, 0.08)',
        'hover': '0 20px 40px -10px rgba(32, 35, 74, 0.15)',
        'glow-green': '0 15px 35px -5px rgba(109, 151, 68, 0.4)',
        'premium': '0 10px 40px rgba(0,0,0,.15), 0 2px 8px rgba(0,0,0,.08)',
      },
      transitionTimingFunction: {
        'premium': 'cubic-bezier(0.25, 1, 0.5, 1)',
        'elastic': 'cubic-bezier(.68,-0.55,.265,1.55)',
        'smooth': 'cubic-bezier(.4,0,.2,1)',
      },
      transitionDuration: {
        'fast': '200ms',
        'smooth': '400ms',
      },
    },
  },
  plugins: [],
}
