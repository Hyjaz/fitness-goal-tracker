const common = require('./webpack.common');
const CleanWebpackPlugin = require('clean-webpack-plugin')
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge({
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(['build']),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
  ],
}, common)
