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
    margin: ["first", "responsive"],
  },
  plugins: [require("@tailwindcss/ui")],
}
