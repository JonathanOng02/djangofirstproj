/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/templates/**/*.html',  // This matches all HTML files in any 'templates' directory at any depth
    './**/static/**/*.js',       // This matches all JavaScript files in any 'static' directory at any depth
  ],
  darkMode: 'media', // 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};


