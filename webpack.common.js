const configPaths = require('./config.path');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    main: configPaths.entry,
  },
  output: {
    filename: 'index.js',
    path: configPaths.output,
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.css', '.scss']
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
      { test: /.*\.ts$/, loader: 'awesome-typescript-loader' },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          // fallback to style-loader in development
          process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          "sass-loader",
        ]
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              outputPath: configPaths.imagesFolder
            }
          }
        ]
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: configPaths.indexTemplate,
    }),
    new Dotenv({
      path: process.env.NODE_ENV !== 'production' ? './.env.development' : './.env.production'
    })
  ]
}
