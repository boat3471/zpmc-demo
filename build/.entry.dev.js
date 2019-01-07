const { isProduct } = require('dist-env');
const { devServer } = require('./core/config.dev');

module.exports = isProduct ? [] : [
    `webpack-dev-server/client?${devServer.protocol}//${devServer.host}:${devServer.port}`,
    'webpack/hot/dev-server',
    'react-hot-loader/patch'
];
