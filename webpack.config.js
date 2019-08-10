const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;

module.exports = {
  mode : 'production',
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    libraryTarget: 'umd',
    libraryExport: 'default',
    path: path.resolve(__dirname, './dist')
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
}
