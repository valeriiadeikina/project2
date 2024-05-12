const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtraxtPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/app.js",
  resolve: {
    modules: ["node_modules", "./src"],
  },
  module: {
    rules: [
      { test: /\.css$/, use: [MiniCssExtraxtPlugin.loader, "css-loader"] },
    ],
  },
  plugins: [new HtmlWebpackPlugin(), new MiniCssExtraxtPlugin()],
};
