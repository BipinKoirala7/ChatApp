/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "app-grid": "1fr 2fr 1fr",
      },
      gridTemplateRows: {
        "chat-grid":"1fr 6fr 1fr",
      }
    },
  },
  plugins: [],
};

