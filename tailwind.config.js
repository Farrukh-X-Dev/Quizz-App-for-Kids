/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ["./public/*.html",],
  content: ["./*.html"],
  theme: {
    extend: {
      animation: {
        ping: "ping 1.5s infinite",
        spin: "spin 4s linear infinite",
        wiggle: 'wiggle 1s infinite ease-in-out', // Adjust duration if needed
      },
    },
  },
  plugins: [],
}

