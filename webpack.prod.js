const common = require('./webpack.common');
const CleanWebpackPlugin = require('clean-webpack-plugin')
const configPaths = require('./config.path');
const Dotenv = require('dotenv-webpack');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
    new Dotenv({
      path: './.env.production'
    }),
    new HtmlWebpackPlugin({
      template: configPaths.indexTemplate,
    })
  ],
}, common)
