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
  animation: {
    scroll: "scroll 15s linear infinite",
    float: "float 3s ease-in-out infinite",
  },
  plugins: [],
};
