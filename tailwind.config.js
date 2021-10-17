// tailwind.config.js
const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: "class",
  theme: {
    extends: {
      backgroundImage: {},
    },
    colors: {
      // Build your palette here
      white: colors.white,
      gray: colors.gray,
      bgray: colors.blueGray,
      cgray: colors.coolGray,
      wgray: colors.warmGray,
      dred: colors.red,
      dblue: colors.sky,
      orange: colors.orange,
      dyellow: colors.yellow,
      amber: colors.amber,
      lime: colors.lime,
      rose: colors.rose,
      fuchsia: colors.fuchsia,
      lime: colors.lime,
      green: colors.green,
      emerald: colors.emerald,
      teal: colors.teal,
      // university brand colors
      navyBlue: "#18345e",
      lightBlue: "#22c1dc",
      yellow: "#f0ab20",
      red: "#c01f48",
      sportsGold: "#8d744a",
      richBlack: "#211f20",
      blue: "#007bd6",
      lightGrey: "#e5e5e4",
    },
  },
  variants: {
    extend: {
      invert: ["dark"],
    },
  },
};
