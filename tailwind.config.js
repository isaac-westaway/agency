/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      'sm': {'min': '120px'},
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      colors: {
        gray: {
          '0.6': 'rgba(69, 69, 69, 0.2)',
        },
        dark: {
            50: '#323232',
            100: '#212121'
        },
        light: {
            50: '#0D7377'
        },
        'cyan': '#14FFEC',
      },
      letterSpacing: {
        tightest: '-.06em',
      },
    },
  },
  plugins: [],
}