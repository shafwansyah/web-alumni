module.exports = {
  content: ["./*.{html,js}"],

  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#E7CB93",
        active: "#4D77FF",
        dark: "#0f172a",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
