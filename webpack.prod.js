const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const merge = require('webpack-merge');
const common = require('./webpack.common.js').config;
const paths = require('./webpack.common.js').paths;

module.exports = merge(common, {
    output: {
        path: paths.DIST,
        filename: 'bundle-[hash:6].js'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new CleanWebpackPlugin(paths.DIST),
        new webpack.optimize.UglifyJsPlugin({
            compress:{
                warnings: true
            }
        }),
        new ExtractTextPlugin("styles-[hash:6].css"),
    ]
});
