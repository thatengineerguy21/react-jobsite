/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      colors:{
        'blue-dianne': {
        '50': '#effbfc',
        '100': '#d8f3f5',
        '200': '#b5e6ec',
        '300': '#82d5de',
        '400': '#47b9c9',
        '500': '#2b9caf',
        '600': '#277f93',
        '700': '#266878',
        '800': '#265564',
        '900': '#244855',
        '950': '#132e39',
         },
         'cinnabar': {
        '50': '#fef3f2',
        '100': '#ffe5e1',
        '200': '#ffcec8',
        '300': '#ffaca1',
        '400': '#fe7c6b',
        '500': '#f6533d',
        '600': '#e64833',
        '700': '#bf2a16',
        '800': '#9e2616',
        '900': '#832519',
        '950': '#470f08',
        },
        'derby': {
        '50': '#fef7ee',
        '100': '#fbe9d0',
        '200': '#f7d8b1',
        '300': '#f2bb7f',
        '400': '#ec954b',
        '500': '#e77828',
        '600': '#d95f1d',
        '700': '#b4491a',
        '800': '#8f3a1d',
        '900': '#74321a',
        '950': '#3e170c',
        },
      },
      gridTemplateColumns: {
        "70/30": "70% 28%",
      },
    },
  },
  plugins: [],
};
