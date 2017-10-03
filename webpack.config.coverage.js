const config = require('./webpack.config.test');
const webpack = require('webpack');

const path = require('path');

config.module.rules = [
    {
        test: /\.js$/,
        include: path.resolve('src'),
        use: ['istanbul-instrumenter-loader'],
    },
    ...config.module.rules
];

module.exports = config;
