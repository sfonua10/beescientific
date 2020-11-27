module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Avenir', 'sans-serif'],
      serif: ['Avenir', 'serif'],
    },
    extend: {
      colors: {
        'blue-gray': '#959CB9',
        'darkish-blue': '#2E3E77'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}