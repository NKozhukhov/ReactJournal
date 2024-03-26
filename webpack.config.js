const webpack = require("webpack");
const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: path.resolve(__dirname, "src/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    assetModuleFilename: "[name][ext]",
  },
  devServer: {
    port: 8000,
    compress: true,
    hot: true,
    static: {
      directory: path.join(__dirname, "dist"),
    },
  },
  performance: {
    hints: false,
    maxAssetSize: 512000,
    maxEntrypointSize: 512000,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ["babel-loader"],
      },
      {
        test: /\.(css|scss|sass)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },

      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
        type: "asset/resource",
        generator: {
          filename: "img/[name][ext]",
        },
      },
      {
        test: /\.(woff|woff2|ttf|otf|eot)$/i,
        type: "asset/resource",
        generator: {
          filename: "fonts/[name][ext]",
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new htmlWebpackPlugin({
      title: "My Journal",
      filename: "index.html",
      template: "src/index.html",
    }),
  ],
};
