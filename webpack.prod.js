const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge({
  mode: 'production',
  plugins: [
    new cleanWebpackPlugin(['build']),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css"
  })
  ],
}, common)
