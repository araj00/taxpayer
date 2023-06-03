/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize : {
        'heading-bold' : ['1.4rem',{
          lineHeight: '1',
          fontWeight : 'bold'}
        ],
        'heading-light-bold' : ['0.9rem',{
          fontWeight:'700',
        }],
        'ordered-list':[
          '0.7rem',{
            fontWeight:'700',
            lineHeight:'0.75'
          }
        ],
        'paragraph-normal' : [
          '0.75rem',{
            lineHeight : '1'
          }
        ]
      },
      borderColor:theme => ({
        ...theme('colors'),
        DEFAULT :theme('colors.black'),
      }),
      lineHeight:{
        'normal' : '0'
      }
    },
  },
  plugins: [
   
  ],
}
