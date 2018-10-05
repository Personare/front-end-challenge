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
          loader: 'babel-loader',
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
        test: /\.styl$/,
        loader: 'style-loader!css-loader!stylus-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ],
  mode: 'production',
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        }
      }
    }
  }
};
