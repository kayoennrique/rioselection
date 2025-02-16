/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        gemunu: ["var(--font-gemunu-libre)"],
        roboto: ["var(--font-roboto)"],
      },
    },
  },
  plugins: [],
};
