/**
 * Created by Excalibur on 16/9/26.
 */

var webpack             = require('webpack');
var path                = require('path');
var ExtractTextPlugin   = require('extract-text-webpack-plugin');

var defExtractTextPlugin        = new ExtractTextPlugin('css/[name].css');
var iconfontExtractTextPlugin   = new ExtractTextPlugin('[name].css');

var webpackConfig = {
    entry:{
        index:'./src/views/index.js',
        iconfont: './src/common/iconfont.js'
    },

    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'js/[name].js'
    },

    module: {
        loaders: [{
            test: /\.scss$/,
            loader: defExtractTextPlugin.extract('style', 'css!autoprefixer!sass')
        },{
            test: /\.js[x]?$/,
            loaders: [
                'babel?presets[]=react,presets[]=es2015'
            ]
        },{
            test: /\.(woff|woff2|svg|eot|ttf)\??.*$/,
            loaders: [
                'file?name=font/[name].[ext]'
            ]
        },{
            test: /iconfont\.css$/,
            loader: iconfontExtractTextPlugin.extract('style', 'css!autoprefixer!sass')
        },{
            test: /\.(jpe?g|png|svg|gif)$/,
            loaders: [
                'url?limit=8192&name=image/[hash:6].[name].[ext]',
                'img?imageMin'
            ]
        }]
    },


    resolve: {
        extensions: ['', '.js']
    },

    imageMin: {
        gifsicle: {
            interlaced: false
        },
        jpegtran: {
            progressive: true,
            arithmetic: false
        },
        optipng: {
            optimizationLevel: 5
        },
        pngquant: {
            floyd: 0.5,
            speed: 2
        },
        svgo: {
            plugins: [
                { removeTitle: true },
                { convertPathData: false }
            ]
        }
    },

    plugins: [
        defExtractTextPlugin,
        iconfontExtractTextPlugin
    ]
};
module.exports = webpackConfig;
