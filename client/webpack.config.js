const webpack = require('webpack');
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: resolve(__dirname, 'src/index.js'),
  output: {
    path: resolve(__dirname, 'dist'),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, 'src/index.html'),
      title: 'Todo Mania'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: resolve(__dirname, 'dist'),
    compress: true,
    port: 9000,
    hot: true,
  }
}