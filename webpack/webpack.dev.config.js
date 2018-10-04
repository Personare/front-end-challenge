const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    path.join(__dirname, '../', 'src')
  ],

  output: {
    path: path.join(__dirname, '../', 'dist'),
    filename: 'js/[name]_[hash].js',
    publicPath: '/'
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/, /src\/styles\/vendor/],
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(jpe?g|ttf|eot|svg|png|woff(2)?)(\?[a-z0-9=&.]*)?$/,
        use: {
          loader: 'file-loader',
          options: {
            outputPath: 'assets/',
            publicPath: 'assets/'
          }
        }
      },
      {
        test: /\.sass$/,
        use: [ 'style-loader', 'css-loader', 'sass-loader?sourceMap=true' ]
      },
    ]
  },

  mode: 'development',

  devtool: '#inline-source-map',

  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],

  devServer: {
    hot: true,
    port: '8000'
  }
};
