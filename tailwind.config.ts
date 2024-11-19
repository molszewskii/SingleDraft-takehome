/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        slideDown: "slideDown 1s ease-in-out forwards",
        slideUp: "slideUp 1s ease-in-out forwards",
        moveToDeleted: "moveToDeleted 1s ease-in-out forwards",
      },
      keyframes: {
        slideDown: {
          '0%': { 'max-height': '0', 'opacity': '0' },
          '50%': { 'max-height': '250px', 'opacity': '0.5' },
          '100%': { 'max-height': '500px', 'opacity': '1' },
        },
        slideUp: {
          '0%': { 'max-height': '500px', 'opacity': '1' },
          '50%': { 'max-height': '250px', 'opacity': '0.5' },
          '100%': { 'max-height': '0', 'opacity': '0' },
        },
        moveToDeleted: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(100%)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};
