import webpack from 'webpack';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import baseConfig from './base';

const config = {
    ... baseConfig,

    plugins: [
        ...baseConfig.plugins,
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production'),
            },
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                screw_ie8: true,
                warnings: false,
            },
            output: {
                comments: false,
            },
        }),
        new CopyWebpackPlugin([
            { from: './images', to: 'images' }
        ])
    ],
}

export default config;
