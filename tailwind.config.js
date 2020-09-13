const colors = {
  black: "#00171f",
  darkblue: "#003459",
  blue: "#007ea7",
  lightblue: "#00a8e8",
  white: "#ffffff",
};

module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.vue"],
  theme: {
    extend: {
      colors,
      spacing: {
        '128': '32rem'
      }
    },
  },
  variants: {},
  plugins: [],
};
