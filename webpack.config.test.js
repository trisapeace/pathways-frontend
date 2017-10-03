const config = require('./webpack.config.base');
const path = require('path');
const nodeExternals = require('webpack-node-externals');

config.target = 'node';
config.entry = undefined;

config.externals = [nodeExternals()]

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
        use: 'null-loader'
    },
    {
        test: /\.css$/,
        use: 'null-loader'
    },
    {
        test: /\.scss$/,
        use: 'null-loader'
    }
];

config.plugins = undefined;

module.exports = config;
