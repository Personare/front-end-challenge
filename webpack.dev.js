const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    devtool: 'eval',
    devServer: {
        contentBase: './dist'
    }
});
