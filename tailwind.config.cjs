const { fontFamily } = require('tailwindcss/defaultTheme')
const files = require('./files.cjs')
const { blurs, boxShadows, colors, fontSizes } = require('./untitled-ui')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [...files],
  theme: {
    container: {
      screens: {
        xl: '1120px',
      },
      center: true,
      padding: '1rem',
    },
    blur: { ...blurs },
    boxShadow: { ...boxShadows },
    colors: { ...colors },
    fontSize: { ...fontSizes },
    extend: {
      backgroundImage: {
        'chevron-down': "svg-load('chevron-down.svg')",
      },
      fontFamily: {
        sans: ['Inter var', ...fontFamily.sans],
      },
      spacing: {
        3.5: '0.875rem',
        4.5: '1.125rem',
      },
    },
  },
  plugins: [],
}
