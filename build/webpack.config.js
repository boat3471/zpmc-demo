const path = require('path');
// const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');//css分离打包
const alias = require('./webpack.alias');
const config = require('./build.config');
const entry = require('./.entry');
const entryHtml = require('./.entry.html');
const { appPath, srcPath, mockPath } = require('./core/global');
const { isProduct } = require('dist-env');

module.exports = {
    mode: config.env,
    entry: entry,
    output: {
        path: config.output.staticPath,
        filename: config.output.filename + '.js',
        chunkFilename: config.output.chunkFilename + '.js',
        publicPath: config.publicPath,
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                options: {
                    cacheDirectory: true,
                },
                include: [
                    srcPath,
                    mockPath,
                ],
                exclude: /node_modules/,
            }, {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react',
                            {
                                'plugins': [
                                    '@babel/plugin-proposal-class-properties',
                                    '@babel/plugin-transform-runtime',
                                    'react-hot-loader/babel',
                                ],
                            },
                        ],
                    },
                },
                include: [
                    srcPath,
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            url: false,
                            sourceMap: true,
                            modules: false,
                            localIdentName: '[path][name]-[local]-[hash:base64:5]',
                        },
                    },
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.less$/,
                use: [
                    isProduct ? MiniCssExtractPlugin.loader : 'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            url: false,
                            sourceMap: true,
                            modules: false,
                            localIdentName: '[path][name]-[local]-[hash:base64:5]',
                        },
                    },
                    {
                        loader: 'less-loader',
                        options: { sourceMap: true },
                    },
                ],
                include: [
                    srcPath,
                    path.join(appPath, 'node_modules', 'antd'),
                ],
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {// 处理css中引入的图片
                        loader: 'file-loader',
                        options: {
                            publicPath: '/',
                        },
                    },
                    {
                        loader: 'url-loader',
                        options: {
                            name: 'images/[name][hash:8].min.[ext]',
                            limit: 8192,
                            publicPath: '/',
                        },
                    },
                ],
            },

        ],
    },
    devServer: {
        port: 3100,
        open: true,
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        alias: alias,
    },
    plugins: [
        new CleanWebpackPlugin(['dist'], {
            root: appPath,
            verbose: true,
            allowExternal: true,
            watch: true,
        }),
        new MiniCssExtractPlugin({
            filename: config.output.filename + '.css',
            chunkFilename: config.output.chunkFilename + '.css',
        }),
        ...entryHtml,
        ...config.plugins,
    ],
    optimization: config.optimization || {},
};
