module.exports = {
  content: ["./app/**/*.{html,ejs}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '0.75rem',
      },
    },
    extend: {
      colors:{
        'primary':'#2D2D2D',
        'secondary':'#62DB54',
        'light-primary':'#909090',
        'heavy-primary':'#202020',
        'plus-heavy-primary':'#1C1C1C',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}