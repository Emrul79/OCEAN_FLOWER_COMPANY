/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "dark-basic": "rgba(11, 17, 32, 0.85)",
      },
    },
    plugins: [],
  },
};
