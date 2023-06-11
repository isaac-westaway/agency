/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        screens: {
          'sm': '200px',   // Custom value for small screens (sm)
          'md': '640px',   // Custom value for medium screens (md)
          'lg': '1024px',  // Custom value for large screens (lg)
          'xl': '1280px',  // Custom value for extra large screens (xl)
          '2xl': '1440px', // Custom value for 2 extra large screens (2xl)
        },
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