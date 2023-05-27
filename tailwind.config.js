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
        dark: {
            50: '#323232',
            100: '#212121'
        },
        light: {
            50: '#0D7377'
        },
        'cyan': '#14FFEC',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}