import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ScriptExtHtmlWebpackPlugin from 'script-ext-html-webpack-plugin';

process.traceDeprecation = true;
process.noDeprecation = true;

const rootPath = path.join(__dirname, '../', 'src');

const config = {
    entry: [
        path.join(__dirname, '../', 'src', 'app'),
    ],

    output: {
        path: path.join(__dirname, '../', 'dist'),
        filename: 'js/[name]_[hash:8].js',
        chunkFilename: 'js/[name]_[hash:8].js',
        publicPath: '/',
    },

    resolve: {
        alias: {
            components: `${rootPath}/components`,
            containers: `${rootPath}/containers`,
            actions: `${rootPath}/actions`,
            reducers: `${rootPath}/reducers`,
            services: `${rootPath}/services`,
            views: `${rootPath}/views`,
        },
        extensions: ['.js', '.jsx', '.styl', '.css'],
    },

    module: {
        rules: [
            {
                test: /\.styl$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                        loader: 'css-loader',
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [
                                require('autoprefixer'),
                                require('postcss-discard-duplicates'),
                                require('postcss-discard-unused')(),
                            ],
                        },
                    },
                    {
                        loader: 'stylus-loader',
                    }],
                }),
            },

            {
                test: /\.(eot|woff|ttf)$/,
                loader: 'file-loader?name=/css/fonts/[name].[ext]',
            },

            {
                test: /\.(jpg|svg)$/,
                loader: 'file-loader?name=/images/[name].[ext]',
            },

            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: [/node_modules/, /src\/styles\/vendor/],
                query: {
                    presets: ['es2015', 'react', 'stage-0'],
                },
            },
        ],
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: ({ resource }) => /node_modules/.test(resource),
            filename: 'js/[name].[hash:8].js',
        }),
        new HtmlWebpackPlugin({
            template: './index.html',
        }),
        new ScriptExtHtmlWebpackPlugin({
            defaultAttribute: 'defer',
        }),
        new ExtractTextPlugin({
            filename: 'css/[name]_[contenthash:8].css',
        }),
    ],
};

export default { ...config };
