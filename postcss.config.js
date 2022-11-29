const autoprefixer = require("autoprefixer");

module.exports = {
  plugins: [
    autoprefixer({ grid: false | "autoplace" | "no-autoplace" }),
    "postcss-preset-env",
  ],
};
