const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: __dirname + "/pulbic",
        filename: './app.js'
    },
    devServer: {
        port:8080,
        contentBsae: "./public",
    },
    resolve: {
        extensions: ['', '.jsx', '.js'],
        alias: {
            modules: __dirname + '/node_modules'
        }
    },
    plugins: [
        new ExtractTextPlugin('app.css')
    ],
    module: {
        loaders: [{
            test: /.js[x]?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                preset: ['es2015', 'react'],
                plugins: ['transform-object-rest-spread']
            }
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
        }, {
            test: /\.woff|.woff2|.tff|.eot|.svg*.*$/,
            loader: 'file'
        }]
    }
}