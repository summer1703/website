/**
 * Created by Excalibur on 16/10/20.
 */


var webpack     = require('webpack');
var config      = require('./webpack.config.js');

var productionConfig = {

    plugins: [
        //js压缩参数
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: true
            },
            beautify: false,
            comments: false
        }),

        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            }
        })
    ]
}

config.plugins = config.plugins.concat( productionConfig.plugins );

module.exports = config;
