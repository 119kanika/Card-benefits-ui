/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        'box': '1px 2px 8px 4px rgba(99, 99, 99, 0.2)',
        'shadowHover' : '0px 0px 8px 4px #ccf1ff',
      }
    },
  },
  plugins: [],
}

