/** @type {import('tailwindcss').Config} */
module.exports = {
  experimental: {
    scrollRestoration: true,
  },
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
    variants: {
      extend: {
        maxHeight: ["focus"],
        rotate: ["group-hover"],
      },
    },
    extend: {
      maxHeight: {
        48: "12rem",
      },
      translate: {
        "1/8": "12.5%",
        "1/10": "-60%",
        "1/12": "0.083%",
        95: "95%",
      },
      backgroundColor: {
        "custom-color": "rgba(0, 0, 0, 0.7)",
        "custom-color0.3": "rgba(0, 0, 0, 0.5)",
        "custom-color0.1": "rgba(0, 0, 0, 0.2)",

        "dark-custom": "rgba(125, 125, 125,0.4)",
      },
      colors: {
        gray: {
          0.6: "rgba(69, 69, 69, 0.2)",
        },
        dark: {
          50: "#323232",
          100: "#212121",
        },
        light: {
          50: "#0D7377",
        },
        cyan: "#14FFEC",
      },
      letterSpacing: {
        tightest: "-.06em",
      },
    },
  },
  plugins: [    
    require('@tailwindcss/typography'),
  ],
};
