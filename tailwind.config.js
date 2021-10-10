// tailwind.config.js
const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: "class",
  theme: {
    extends: {
      backgroundImage: {
        "get-to-know": "url('/assets/bg/p2.png)'",
      },
    },
    colors: {
      // Build your palette here
      white: colors.white,
      gray: colors.gray,
      bgray: colors.blueGray,
      cgray: colors.coolGray,
      red: colors.red,
      blue: colors.sky,
      orange: colors.orange,
      yellow: colors.yellow,
      amber: colors.amber,
      lime: colors.lime,
      rose: colors.rose,
      fuchsia: colors.fuchsia,
      lime: colors.lime,
      green: colors.green,
      emerald: colors.emerald,
      teal: colors.teal,
    },
  },
  variants: {
    extend: {
      invert: ["dark"],
    },
  },
};
