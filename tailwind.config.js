/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "heroShad" :"2px 2px 5px rgba(0, 0, 0, 2.2)",
      },
    },
  },
  plugins: [],
}