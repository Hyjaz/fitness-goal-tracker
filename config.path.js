const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './src/index.tsx'),
  indexTemplate: path.resolve(__dirname, './src/index.html'),
  output: path.resolve(__dirname, './build'),
  tsconfig: path.resolve(__dirname, './tsconfig.json'),
  imagesFolder: 'images',
};
