import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Alegreya", "serif"],
    },
    extend: {
        colors: {
            'primary': {
                DEFAULT: '#217AFF',
                50: '#D9E8FF',
                100: '#C4DCFF',
                200: '#9BC3FF',
                300: '#73ABFF',
                400: '#4A92FF',
                500: '#217AFF',
                600: '#005DE8',
                700: '#0046B0',
                800: '#003078',
                900: '#001940',
                950: '#000E24'
              },
            'secondary': {
                DEFAULT: '#F9F255',
                50: '#FFFFFF',
                100: '#FFFEF3',
                200: '#FDFBCB',
                300: '#FCF8A4',
                400: '#FAF57C',
                500: '#F9F255',
                600: '#F7EE1F',
                700: '#D6CD08',
                800: '#A09906',
                900: '#6A6604',
                950: '#4F4C03'
            },
            'tertiary': '#9942CF',
            'black': '#121212',
            'white': '#F5F5F5'
        },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
