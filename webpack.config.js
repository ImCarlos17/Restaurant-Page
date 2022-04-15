const HtmlWebpackPlugin = require("html-webpack-plugin");

const rulesForJavaScript = {
  test: /\.js$/i,
  exclude: /node_modules/,
  loader: "babel-loader",
};

const rulesForStyles = {
  test: /\.css$/,
  use: ["style-loader", "css-loader"],
};

const rules = [rulesForJavaScript, rulesForStyles];

module.exports = {
  plugins: [new HtmlWebpackPlugin({ template: "src/index.html" })],
  module: { rules },
  devServer: {
    open: true,
    port: 3000,
  },
};
