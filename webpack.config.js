const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const rulesForJavaScript = {
  test: /\.js$/i,
  exclude: /node_modules/,
  loader: "babel-loader",
};

const rulesForStyles = {
  test: /\.css$/i,
  use: [MiniCssExtractPlugin.loader, "css-loader"],
};

const rulesForFiles = {
  test: /\.(jpe?g|png|gif|svg|webp)$/i,
  use: ["file-loader?name=assets/[name].[ext]"],
};

const rules = [rulesForJavaScript, rulesForStyles, rulesForFiles];

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({ template: "src/index.html" }),
    new MiniCssExtractPlugin(),
  ],
  module: { rules },
  devServer: {
    open: true,
    port: 3000,
  },
};
