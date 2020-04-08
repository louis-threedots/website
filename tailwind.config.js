const plugin = require("tailwindcss/plugin")
const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
        serif: ["Lora", ...defaultTheme.fontFamily.serif],
        louis: ["Comfortaa", "cursive"],
      },
      screens: {
        xxl: "1536px",
      },
      spacing: {
        "192": "48rem",
      },
    },
  },
  variants: {
    margin: ["responsive", "first"],
    backgroundColor: ["responsive", "hover", "focus", "even", "disabled"],
    opacity: ["responsive", "hover", "focus", "disabled"],
    cursor: ["responsive", "disabled"],
    width: ["responsive"],
  },
  plugins: [
    require("@tailwindcss/ui"),
    require("tailwindcss-font-variant-numeric"),
    require("./lib/tailwindTypographyPlugin"),
    plugin(function({ addUtilities, config, e }) {
      const spaceUtilities = Object.entries(config("theme.spacing")).map(
        ([key, value]) => ({
          [`.space-x-${e(key)} > * + *`]: {
            marginLeft: value,
          },
          [`.space-y-${e(key)} > * + *`]: {
            marginTop: value,
          },
        })
      )

      addUtilities(spaceUtilities)
    }),
  ],
}
