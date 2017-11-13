const merge = require('webpack-merge');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const common = require('./webpack.common.js').config;
const paths = require('./webpack.common.js').paths;

module.exports = merge(common, {
    devtool: 'eval',
    plugins: [
        new ExtractTextPlugin("styles.css"),
    ],
    devServer: {
        contentBase: './dist'
    }
});
