module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Avenir', 'sans-serif'],
      serif: ['Avenir', 'serif'],
    },
    minWidth: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
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
        'hp': '15rem',
        'bbp': '257px',
        'bbp-lg': '487px',
        'bbh': '288px',
        'bb-d-sm': '343px',
        'bb-image-label': '162px'
      },
      maxHeight: {
        'bbd': '209px',
        'bb-d-sm': '204px',
        'bb-d-lg': '248px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}