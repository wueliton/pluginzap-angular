/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
const {
  default: flattenColorPalette
} = require('tailwindcss/lib/util/flattenColorPalette');
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        brand: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efad',
          400: '#4ade81',
          500: '#25d366',
          600: '#16a34b',
          700: '#15803e',
          800: '#166534',
          900: '#14532d',
          950: '#052e16'
        }
      }
    }
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          highlight: (value) => ({
            boxShadow: `inset 0 1px 0 0 ${value}`
          })
        },
        {
          values: flattenColorPalette(theme('colors')),
          type: 'color'
        }
      );
    })
  ]
};
