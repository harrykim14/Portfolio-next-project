module.exports = {
  purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
  darkMode: false,
  theme: {
    screens: {
      'xs': '360px', 
      'sm': '600px', 
      'md': '840px', 
      'lg': '1080px', 
      'xl': '1200px', 
      '2xl': '1440px',
    },
    extend: {},
  },
  variants: {
      extend: {},
  },
  plugins: [],
  
}