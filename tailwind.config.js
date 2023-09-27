/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        // Simple 16 column grid
        'nav': '90px 1fr',
      }
    },
  },
  plugins: [],
}

