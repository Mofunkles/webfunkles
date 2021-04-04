const filesystem = require('fs');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const pages = filesystem.readdirSync(path.resolve(__dirname, 'src/html'));

const addPage = page => {
  const [name] = page.split('.');
  return new HtmlWebpackPlugin({
    template: path.resolve(__dirname, `src/html/${page}`),
    filename: page,
    inject: false,
    chunks: [name],
  });
};

const entries = () => {
  const obj = {};
  pages.forEach(page => {
    const [name] = page.split('.');
    obj[name] = `./src/js/pages/${name}.js`;
  });

  return obj;
};

module.exports = {
  entry: entries(),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    assetModuleFilename: '[name][hash][ext]',
  },
  plugins: pages.map(page => addPage(page)),
  module: {
    rules: [
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
