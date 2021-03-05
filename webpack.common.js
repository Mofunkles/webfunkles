const filesystem = require('fs');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const pages = filesystem
  .readdirSync(path.resolve(__dirname, 'src/html'))
  .reduce((fileNames, file) => {
    const fileSplit = file.split('.');
    if (fileSplit[1] === 'html') fileNames.push(fileSplit[0]);
    return fileNames;
  }, []);

const addPage = page => {
  const name = page === 'index' ? 'home' : page;
  return new HtmlWebpackPlugin({
    title: name[0].toUpperCase() + name.slice(1),
    template: path.resolve(__dirname, `src/html/${page}.html`),
    filename: `${page}.html`,
  });
};

module.exports = {
  entry: path.resolve(__dirname, 'src/js/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    assetModuleFilename: '[name][hash][ext]',
  },
  plugins: pages.map(page => addPage(page)),
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(svg|png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
