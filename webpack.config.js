const webpack = require('webpack');
const Path = require('path');
const URL = require('url');
const process = require('process');
const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Visualizer = require('webpack-visualizer-plugin');

const NODE_ENV = process.env.NODE_ENV;
const configPath = Path.join(__dirname, 'config');
const config = require(configPath);

const extractCSSPlugin = new ExtractTextPlugin({
    filename: '[name].bundle.[contenthash].css',
    allChunks: true
});

module.exports = {
    entry: {
        main: [
            'babel-polyfill',
            'manifest.json',
            Path.resolve(__dirname, 'src', 'js', 'index.js')
        ]
    },
    output: {
        filename: '[name].bundle.[chunkhash].js',
        path: Path.resolve(__dirname, 'out'),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules/, /external/],
                use: ['babel-loader', 'eslint-loader']
            },
            {
                test: /manifest\.json$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'manifest.json',
                        }
                    },
                    'web-app-manifest-loader'
                ]
            },
            {
                test: /\.png$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[hash].[ext]'
                    }
                }
            },
            {
                test: /\.(eot|woff2|woff|ttf)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[hash].[ext]',
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: extractCSSPlugin.extract([
                    {loader: 'css-loader', options: {
                        sourceMap: true
                    }},
                    {loader: 'sass-loader', options: {
                        sourceMap: true
                    }}
                ])
            }
        ]
    },
    resolve: {
        modules: [
            Path.resolve(__dirname, 'src', 'js'),
            Path.resolve(__dirname, 'src', 'scss'),
            Path.resolve(__dirname, 'src', 'libs'),
            "node_modules"
        ],
        alias: {
            config: configPath,
            "manifest.json": Path.join(__dirname, 'src', 'manifest.json'),
            "material-design-icons": "material-design-icons/iconfont/material-icons.css"
        }
    },
    plugins: [
        new HtmlPlugin({
            title: 'Pathways Mobile Application',
            template: 'src/index.html.ejs',
            filename: 'index.html',
            hash: true
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: function (module) {
                if (module.context) {
                    return module.context.indexOf('node_modules') !== -1 || module.context.indexOf('external') !== -1;
                }
            }
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(NODE_ENV || 'development')
        }),
        new CopyWebpackPlugin([{from: '.htaccess', context: 'src'}]),
        extractCSSPlugin
    ],
    devServer: {
        contentBase: Path.resolve(__dirname, "out"),
        inline: true,
        historyApiFallback: true,
        stats: {colors: true}
    },
    devtool: 'sourcemap'
};

const bundleStatistics = new Visualizer({
    filename: './bundle-stats.html'
});
if (NODE_ENV !== 'production') {
    module.exports.plugins.push(bundleStatistics);
}
