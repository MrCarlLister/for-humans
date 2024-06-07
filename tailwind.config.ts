import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";


const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx,json}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx,json}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx,json}"
  ],
  safelist: [
    'italic',
    'uppercase',
    'to-red-200',
    'to-yellow-200',
    'to-green-200',
    'to-pink-200',
    'to-amber-200',
    'to-lime-200',
    'to-emerald-200',
    'to-rose-200',
    'to-blue-200',
    'to-fuchsia-200',
    'bg-indigo-200',
    'to-indigo-200',
    'bg-orange-200',
    'to-orange-200',
    'bg-purple-200',
    'to-purple-200',
    'text-red-200',
    'text-yellow-200',
    'text-green-200',
    'text-pink-200',
    'text-amber-200',
    'text-lime-200',
    'text-emerald-200',
    'text-rose-200',
    'text-blue-200',
    'text-fuchsia-200',
    'text-indigo-200',
    'text-orange-200',
    'text-purple-200',
    'from-red-200',
    'from-yellow-200',
    'from-green-200',
    'from-pink-200',
    'from-amber-200',
    'from-lime-200',
    'from-emerald-200',
    'from-rose-200',
    'from-blue-200',
    'from-fuchsia-200',
    'from-indigo-200',
    'from-orange-200',
    'from-purple-200',
  ],
  theme: {
    fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Alegreya", "serif"],
    },
    // colors: ({colors}) => ({
    //     'primary': {
    //         DEFAULT: '#217AFF',
    //         50: '#D9E8FF',
    //         100: '#C4DCFF',
    //         200: '#9BC3FF',
    //         300: '#73ABFF',
    //         400: '#4A92FF',
    //         500: '#217AFF',
    //         600: '#005DE8',
    //         700: '#0046B0',
    //         800: '#003078',
    //         900: '#001940',
    //         950: '#000E24'
    //       },
    //     'secondary': {
    //         DEFAULT: '#F9F255',
    //         50: '#FFFFFF',
    //         100: '#FFFEF3',
    //         200: '#FDFBCB',
    //         300: '#FCF8A4',
    //         400: '#FAF57C',
    //         500: '#F9F255',
    //         600: '#F7EE1F',
    //         700: '#D6CD08',
    //         800: '#A09906',
    //         900: '#6A6604',
    //         950: '#4F4C03'
    //     },
    //     'yellow': colors.yellow,
    //     'red': colors.red,
    //     'gray': colors.gray,
    //     'tertiary': '#9942CF',
    //     'black': '#292828',
    //     'white': '#F5F5F5'
    // }),
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
            'black': '#292828',
            'white': '#F5F5F5'
        },
        
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    typography
  ],
};
export default config;
