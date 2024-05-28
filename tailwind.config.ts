const plugin = require('tailwindcss/plugin')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{html,tsx,ts,js,jsx,css,scss,sass,less,json}'],
  theme: {
    extend: {
      fontSize: {
        base: '12px',
        h1: '40px',
        h2: '24px',
        h3: '20px',
        h4: '12px'
      },
      transitionProperty: {
        height: 'height'
      }
    }
  },
  plugins: [require('tailwindcss'), require('tailwind-scrollbar-hide')],
  corePlugins: {
    preflight: true
  }
}
