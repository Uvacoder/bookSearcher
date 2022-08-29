const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    fontFamily: {
      'roboto': ['Roboto','sans-serif'],
      'montserrat': ['Montserrat','sans-serif'],
      'inter': ['Inter','sans-serif'],
    },
    colors:{
      ...colors,
      primary:'#171142',
      primary_hovered:'#312E6B',
      border_primary:'#3C3971',
      secondary:'#24224E',
      text_secondary:'#A2A0B3',
      gold_gradient:'background: linear-gradient(67.87deg, #F4D974 3.68%, #B88114 49.93%, #EFD26C 82.76%, rgba(255, 153, 42, 0) 118.99%),linear-gradient(0deg, #FFFFFF, #FFFFFF);'
    }
  },
  content: [
    `components/**/*.{vue,js}`,
    `layouts/**/*.vue`,
    `pages/**/*.vue`,
    `plugins/**/*.{js,ts}`,
    `App.{js,ts,vue}`,
    `app.{js,ts,vue}`
  ]
}
