/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        WHITE: {
          DEFAULT: "#FFFFFF",
          100: "#f8f9fa",
          200: "#e9ecef",
          300: "#dee2e6",
          400: "#adb5bd",
        },
        GREEN: {
          DEFAULT: "#07bf82",
          100: "#d8f3dc",
          200: "#b7e4c7",
          300: "#95d5b2",
          400: "#74c69d",
          500: "#52b788",
          600: "#40916c",
          700: "#2d6a4f",
          800: "#1b4332",
        },
        BLUE: {
          DEFAULT: "#0466c8",
          100: "#caf0f8",
          200: "#ade8f4",
          300: "#90e0ef",
          400: "#48cae4",
          500: "#00b4d8",
          600: "#0096c7",
          700: "#0077b6",
          800: "#023e8a",
          900: "#03045e",
        },
        COOL: {
          DEFAULT: "#c1d3fe",
          100: "#d7e3fc",
          200: "#abc4ff",
          300: "#89c2d9",
          400: "#18435a",
          500: "#7364d2",
          600: "#461177",
          700: "#c46df7",
          800: "#003356",
        },
      },
    },
  },
  plugins: [],
};
