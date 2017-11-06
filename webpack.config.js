const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const poststylus = require('poststylus');
const rupture = require('rupture');

// Constant with our paths
const paths = {
    DIST: path.resolve(__dirname, 'dist'),
    SRC: path.resolve(__dirname, 'src'),
    JS: path.resolve(__dirname, 'src/js'),
};

// Webpack configuration
module.exports = {
    entry: path.join(paths.JS, 'index.js'),
    output: {
        path: paths.DIST,
        filename: 'bundle.js'
    },

    plugins: [
        new ExtractTextPlugin("styles.css"),
        new HtmlWebpackPlugin({
            template: path.join(paths.SRC, 'index.html'),
        }),
    ],

    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                ],
            },
            {
                test: /\.styl$/,
                use: ExtractTextPlugin.extract({
                    fallback: {
                        loader: 'style-loader'
                    },
                    use: [
                        'css-loader',
                        {
                            loader: 'stylus-loader',
                            options: {
                                use: [
                                    rupture(),
                                    poststylus(['autoprefixer', 'lost'])
                                ]
                            },
                        },
                    ],
                })
            }
        ],
    },

    devServer: {
        historyApiFallback: true
    },

    // Enable importing JS files without specifying their's extenstion
    resolve: {
        extensions: ['.js'],
    },
};
