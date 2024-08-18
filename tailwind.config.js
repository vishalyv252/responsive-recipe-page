/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      screens: {
        // Define custom breakpoints for responsive design.
        "Tablet_Design_View": { "max": "769px", "min": "426px" },  // Applies to tablet screens between 426px and 769px.
        "Large_Mobile_Design_View": { "max": "426px", "min": "374px" },  // Applies to large mobile screens between 374px and 426px.
        "Small_Mobile_Design_View": { "max": "374px" }  // Applies to small mobile screens, 374px and below.
      },
      colors: {
        // Custom color palette for the project.
        "Nutmeg": "hsl(14, 45%, 36%)",  // Nutmeg color for headings and prominent text.
        "Dark_Raspberry": "hsl(332, 51%, 32%)",  // Dark Raspberry color, used for accents like section titles.
        "White": "hsl(0, 0%, 100%)",  // Pure white color, used for backgrounds and text.
        "Rose_White": "hsl(330, 100%, 98%)",  // Rose White color, a soft pinkish background color.
        "Eggshell": "hsl(30, 54%, 90%)",  // Eggshell color, a warm light background color.
        "Light_Grey": "hsl(30, 18%, 87%)",  // Light Grey color, used for dividing lines and subtle backgrounds.
        "Wenge_Brown": "hsl(30, 10%, 34%)",  // Wenge Brown color, used for text and dark accents.
        "Dark_Charcoal": "hsl(24, 5%, 18%)"  // Dark Charcoal color, used for primary headings and key text elements.
      },
      fontFamily: {
        // Custom font families for the project.
        "Young_Serif": ["Young Serif", "serif"],  // Serif font used for titles and headings.
        "Outfit": ["Outfit", "sans-serif"]  // Sans-serif font used for body text and other elements.
      }
    },
  },
  plugins: [],
}

