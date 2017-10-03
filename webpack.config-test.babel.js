const path = require('path');

const nodeExternals = require('webpack-node-externals');

const NODE_ENV = process.env.NODE_ENV || 'development';
const configPath = path.join(__dirname, 'config');

try {
    const config = require(configPath);
} catch (error) {
    console.error("Error loading configuration:", error.message);
    console.info(`Make sure you have created config/${NODE_ENV}.js`)
    process.exit(1);
}

export default {
    target: 'node',
    externals: [
        nodeExternals()
    ],
    module: {
        rules: [
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
        ]
    },
    resolve: {
        modules: [
            path.resolve(__dirname, 'src', 'js'),
            path.resolve(__dirname, 'src', 'scss'),
            path.resolve(__dirname, 'bower_components'),
            path.resolve(__dirname, 'node_modules')
        ],
        alias: {
            config: configPath,
            "manifest.json": path.join(__dirname, 'src', 'manifest.json')
        }
    }
};
