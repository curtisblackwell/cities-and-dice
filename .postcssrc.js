const autoprefixer  = require('autoprefixer');
const tailwindcss   = require('tailwindcss')('./tailwind.js');
const postcssImport = require('postcss-import');

module.exports = {
  plugins: [
    postcssImport,
    tailwindcss,
    autoprefixer,
  ],
};
