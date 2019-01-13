const configPaths = require('./config.path');
const common = require('./webpack.common');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');

module.exports = merge({
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    contentBase: false,
    compress: true,
    port: 9000,
    hot: true,
    overlay: {
      warnings: true,
      errors: true
    },
    https: true,
    open: true,
  },
  module: {
    rules: [
      {
        test: /.*\.tsx$/,
        use: [
          {
            loader: 'awesome-typescript-loader',
            options: {
              configFileName: configPaths.tsconfig,
            }
          }
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: configPaths.indexTemplate,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.LoaderOptionsPlugin({
      debug: true,
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new Dotenv({
      path: './.env.development',
    })
  ]
}, common)
