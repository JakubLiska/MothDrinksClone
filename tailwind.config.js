module.exports = {
  content: [
    "./src/app/Components/**/*.{html,ts}",
    "./src/app/Pages/**/*.{html,js}",
  ],
  theme: {
    // fontFamily: {
    //   poly: ["polysansslim"],
    // },
    screens: {
      sm: { max: "738px" },
      // => @media (max-width: 200px) { ... }

      md: { max: "1300px" },
      // => @media (max-width: 738px) { ... }

      lg: { max: "1440px" },
      // => @media (max-width: 1440px) { ... }

      xl: { max: "4000px" },
      // => @media (max-width: 4000px) { ... }
    },
    fontSize: {
      nav: ["25px", "1.1"],
    },
    minWidth: {
      1440: "1440px",
    },
    maxWidth: {
      1440: "1440px",
      1376: "1376px",
    },
    extend: {
      spacing: {
        "2.4r": "2.4rem",
      },
    },
  },
  plugins: [],
};
