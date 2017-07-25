const webpack = require('webpack')

module.exports = {
	entry: './src/index.jsx',
	output: {
		path: __dirname + '/public',
		filename: './bundle.js'
	},
	devServer: {
		port: 3000,
		contentBase: './public'
	},
	module: {
		loaders: [{
			teste: /.jsx?$/,
			loader: 'babel-loader',
			exclude: /node_modules/,
			query: {
				presets: ['es2015', 'react']
			}
		}]
	}
}