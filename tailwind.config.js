 /** @type {import('tailwindcss').Config} */
 export default {
  content: ["./*.{html,js}"],
  theme: {
    screens:{
      sm:"340px",
      md:"540px",
      lg:"768px",
      xl:"1000px"
    },
    extend: {
      backgroundImage: {
        'nature': "url('/Toffes/panorama-intemporel-nature-en-noir-et-blanc-illulart-papier-peint-panoramique-382959.webp)",
      
    }
    },

    fontFamily:{
      Jost: ["Jost","sans-serif"],
      Lobster:["Lobster", "sans-serif"]
    },

    keyframes: {

      rotation:{
        '0%' :{ transform:"rotate(0deg)"},
        '100%' :{ transform:"rotate(360deg)"},
      },

      Saut:{

       '0%, 100%': {
        transform: "translateY(-25%)"
      },
      '50%': {
        transform:"translateY(0)"
      },

      },

      Pulse:{
       ' 0%, 100%': {
          transform:"scale(1.2)"
        },
        '50%': {
          transform:"scale(0)"
        },
      },

      pulsee:{
        '0%': {
          transform: "scale(0)"
        },
        '100%': {
          transform: "scale(1.0)"
        },

      },
      
      transitions:{

        '0%': {
         transform: "translateY(-25%)"
       },
       '100%': {
         transform:"translateY(0)"
       },
 
      },
      
      
    },
      
    animation:{
      
      rotationY:"rotation 10s infinite ease-in",
      TranslateY:"Saut 7s infinite ease-in",
      Pulse:"Pulse 15s infinite ease-in",
      pulsee:"pulsee 1.5s forwards ease-in",
      transitions:"transitions 2s forwards ease-in",
     

    },
  },
  plugins: [],
}

