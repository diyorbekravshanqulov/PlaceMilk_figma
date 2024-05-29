/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderColor: {
        "custom-gradient":
          "linear-gradient(211.73deg, #3455D8 -46.71%, #FF4343 121.33%)",
      },
    },
  },
  plugins: [],
};

