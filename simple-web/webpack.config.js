const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
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
      template: path.resolve(__dirname, "./public/index.html"),
    }),
    new CopyPlugin({
      patterns: [
        {
          from: "public",
          to: "./",
          // public直下のindexはhtml-webpack-pluginでビルドするので除外
          globOptions: { ignore: ["**/public/index.html"] },
        },
      ],
    }),
  ],
  devServer: {
    port: 8000,
    host: "0.0.0.0",
    progress: true,
    contentBase: distPath,
    watchContentBase: true,
    hot: true,
    inline: true,
    // liveReload: true,
    // open: false,
  },
};
