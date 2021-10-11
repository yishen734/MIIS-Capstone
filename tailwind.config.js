module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          dark: '#383C42',
          highlight: '#383343',
        },
      },

      fontFamily: {
        rasa: ['Rasa', 'serif'],
        jura: ['Jura', 'sans-serif'],
        robo: ['Roboto', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },

      borderWidth: {
        '1/2': '0.5px',
      },

      borderRadius: {
        '1/2': '50%',
      },

      fontSize: {
        bl: [
          '1.06rem',
          {
            lineHeight: '1.75rem',
          },
        ],
      },

      // prettier-ignore
      flexGrow: {
        0: 0,

        DEFAULT: 2,
        '1': 1,
        '1.5': 1.5,
        '2': 2,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
