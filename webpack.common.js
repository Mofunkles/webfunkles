const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src/js/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Home',
      template: path.resolve(__dirname, 'src/html/index.html'),
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
      title: 'Gallery',
      template: path.resolve(__dirname, 'src/html/gallery.html'),
      filename: 'gallery.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
};
