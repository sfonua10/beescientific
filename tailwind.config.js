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
        'dark-black': '#414141',
        'light-gray': '#A7A7A7',
        'blue-gray': '#959CB9',
        'darkish-blue': '#2E3E77'
      },
      zIndex: {
        '-10': '-10',
      },
      screens: {
        'sm2': '411px'
      },
      maxWidth: {
        'hp': '15rem'
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}