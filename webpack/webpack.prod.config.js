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
          loader: 'file-loader'
        }
      },
      {
        test: /\.sass$/,
        use: [ 'style-loader', 'css-loader', 'sass-loader?sourceMap=true' ]
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
