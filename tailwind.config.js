/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: { 
      maxWidth: {
      '100': '100%',
    },},
  },
  plugins: [],
}
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  // other configurations
};

