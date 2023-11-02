/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{html,ts}",
    "./pages/**/*.{html,ts}",
    "./index.html",
    "./public/index.html",
    "./src/**/*.{html,ts}",
  ],
  theme: {
    fontFamily: {
      "zen-dots": ["Zen Dots", "sans"],
    },
    extend: {},
  },
  plugins: [],
};
