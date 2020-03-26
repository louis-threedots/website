const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
        serif: ["Lora", ...defaultTheme.fontFamily.serif],
        louis: ["Comfortaa", "cursive"],
      },
    },
  },
  variants: {
    margin: ["responsive", "first"],
    backgroundColor: ["responsive", "hover", "focus", "even"],
  },
  plugins: [
    require("@tailwindcss/ui"),
    require("tailwindcss-font-variant-numeric"),
  ],
}
