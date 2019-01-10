/* eslint-disable max-len */

const path = require('path');
const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const base = require('./config.base');
const { appPath } = require('./global');

const common = [
    '@ant-design',
    'antd',
    'history',
    'prop-types',
    'react',
    'react-dom',
    'react-redux',
    'react-router-dom',
    'react-router-redux',
    'redux',
    'redux-saga',
    'whatwg-fetch',
    '@babel/polyfill'
];

module.exports = merge(base, {
    env: 'production',
    publicPath: '/static/',
    publicRootPath: path.join(appPath, 'dist'),
    output: {
        staticPath: path.join(appPath, 'dist', 'static'),
        htmlPath: path.join(appPath, 'dist', 'html'),
        filename: '[name].[hash:8]',
        chunkFilename: '[name].[contenthash:8]',
    },
    plugins: [],
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: false,
            }),
            new OptimizeCSSAssetsPlugin({}),
        ],
        runtimeChunk: {
            name: 'chunk',
        },
        splitChunks: {
            cacheGroups: {
                polyfill: {
                    test: /[\\/]node_modules[\\/](raf|promise|object-assign|whatwg-fetch)[\\/]/,
                    name: 'polyfill',
                    priority: 2,
                    chunks: 'all',
                    reuseExistingChunk: true,
                },
                common: {
                    test: new RegExp(`[\\/]node_modules[\\/](${common.join('|')})[\\/]`),
                    // test: /node_modules/,
                    name: 'common',
                    priority: 1,
                    chunks: 'all',
                    reuseExistingChunk: true,
                },
                vendor: {
                    name: 'vendor',
                    minChunks: 3, // 根据实际情况调整
                    chunks: 'all',
                    reuseExistingChunk: true,
                },
            },
        },
    },
});
