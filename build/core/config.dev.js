const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const base = require('./config.base');
const { appPath } = require('./global');

module.exports = merge(base, {
    env: 'development',
    publicPath: '/',
    publicRootPath: path.join(appPath, 'dist'),
    output: {
        staticPath: path.join(appPath, 'dist'),
        htmlPath: '',
    },
    proxy: '',
    devServer: {
        protocol: 'http:',
        host: 'localhost',
        port: 3000,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
});
