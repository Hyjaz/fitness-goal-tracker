const path = require('path');
const configPaths = require('./config.path');

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
      { test: /.*\.ts$/, loader: 'awesome-typescript-loader' },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          // fallback to style-loader in development
          process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              outputPath: configPaths.imagesFolder
            }
          }
        ]
      },
    ],
  }
}
