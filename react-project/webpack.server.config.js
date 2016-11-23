/**
 * Created by Excalibur on 16/10/19.
 */


var config          = require('./webpack.config.js');
var path            = require('path');
var webpack         = require('webpack')
var serverConfig    = {
    devServer: {
        contentBase:  path.join(__dirname, 'dist'),
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        port: 3002
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
}

config.devServer    = serverConfig.devServer;
config.plugins      = config.plugins.concat( serverConfig.plugins )

module.exports = config;