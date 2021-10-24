// tailwind.config.js
const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extends: {
      backgroundImage: {},
    },
    colors: {
      white: colors.white,
      gray: colors.gray,
      bgray: colors.blueGray,
      cgray: colors.coolGray,
      wgray: colors.warmGray,
      red: colors.red,
      blue: colors.sky,
      orange: colors.orange,
      yellow: colors.yellow,
      lime: colors.lime,
      rose: colors.rose,
      fuchsia: colors.fuchsia,
      lime: colors.lime,
      green: colors.green,
      emerald: colors.emerald,
      teal: colors.teal,
      name: "#d1a6a2",
    },
  },
  variants: {
    extend: {
      invert: ["dark"],
    },
  },
};
