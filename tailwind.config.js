module.exports = {
  content: [
    "./src/app/Components/**/*.{html,ts}",
    "./src/app/Pages/**/*.{html,js}",
  ],
  theme: {
    // fontFamily: {
    //   poly: ["polysansslim"],
    // },
    fontSize: {
      nav: ["25px", "1.1"],
    },
    minWidth: {
      1440: "1440px",
    },
    maxWidth: {
      1440: "1440px",
    },
    extend: {
      spacing: {
        "2.4r": "2.4rem",
      },
    },
  },
  plugins: [],
};
