/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBrown1: "#593E25",
        primaryBrown2: "#BF946F",
        primaryBrown3: "#D9AF8B",
        primaryBrown4: "#F2CEAE",
        secondaryBrown1: "#D9B26A",
      },
    },
  },
  plugins: [],
};
