/** @type {import('tailwindcss').Config} */
module.exports = {
  experimental: {
    scrollRestoration: true,
  },
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
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      translate: {
        '1/8': '12.5%',
        '1/10': '-60%',
        '95': '95%',
      },
      backgroundColor: {
        'custom-color': 'rgba(0, 0, 0, 0.7)',
        'dark-custom': 'rgba(125, 125, 125,0.4)'
      },
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