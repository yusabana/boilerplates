const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    main: "./src/index.js"
  },
  output: {
    filename: "[name].[hash].js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./public/index.html")
    })
  ],
  devServer: {
    port: 8000,
    // host: "localhost",
    host: "0.0.0.0",
    inline: true,
    hot: true,
    contentBase: path.resolve(__dirname, "public"),
    watchContentBase: true
  }
};
