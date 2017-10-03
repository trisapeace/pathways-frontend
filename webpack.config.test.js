const config = require('./webpack.config.base');

const nodeExternals = require('webpack-node-externals');
const path = require('path');
const webpack = require('webpack');

config.target = 'node';
config.entry = undefined;

config.externals = [nodeExternals()];

config.module.rules = [
    {
        test: /\.js$/,
        exclude: [
            path.resolve(__dirname, 'bower_components'),
            path.resolve(__dirname, 'node_modules'),
        ],
        use: ['babel-loader']
    },
    {
        test: /\.js$/,
        include: [
            path.resolve(__dirname, 'node_modules', 'react-polymer'),
            path.resolve(__dirname, 'node_modules', 'polymer-webpack-loader')
        ],
        use: ['babel-loader']
    },
    {
        test: /\.html$/,
        use: ['null-loader']
    },
    {
        test: /\.css$/,
        use: ['null-loader']
    },
    {
        test: /\.scss$/,
        use: ['null-loader']
    }
];

config.plugins = [
    // Fix a warning with webcomponentsjs
    // <https://github.com/webcomponents/webcomponentsjs/issues/794>
    new webpack.IgnorePlugin(/vertx/)
];

module.exports = config;
