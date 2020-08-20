const path = require("path");
// これは使わないかも
// const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const distPath = path.resolve(__dirname, "dist");

module.exports = {
  entry: {
    main: "./src/index.js",
  },
  output: {
    filename: "[name].[hash].js",
    path: distPath,
  },
  module: {},
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/html/index.html"),
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/html/hoge.html"),
      filename: "hoge.html",
    }),
  ],
  devServer: {
    port: 8000,
    host: "localhost",
    progress: true,
    contentBase: distPath,
    watchContentBase: true,
    // host: "0.0.0.0",
    // open: false,
    // liveReload: true,
    // hot: true,
    inline: true,
  },
};
