// 启动 webpack-dev-server
// process.env.DIST_ENV = 'product';

process.on('unhandledRejection', err => {
    throw err;
});

const chalk = require('chalk');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const clearConsole = require('react-dev-utils/clearConsole');
const {
    choosePort,
    createCompiler,
    prepareUrls,
} = require('react-dev-utils/WebpackDevServerUtils');
const openBrowser = require('react-dev-utils/openBrowser');
const config = require('../build/build.config');
const webpackConfig = require('../build/webpack.config');
const devServerConfig = require('../build/webpack.dev.server');

const isInteractive = process.stdout.isTTY;

// 选择可用端口
choosePort(config.devServer.host, config.devServer.port)
    .then((port) => {
        const protocol = 'http';
        const appName = config.appName;
        const urls = prepareUrls(protocol, config.devServer.host, port);
        const compiler = createCompiler(webpack, webpackConfig, appName, urls);
        compiler.plugin('done', () => {
            console.log('compiler -> done');
        });
        const devServer = new WebpackDevServer(compiler, devServerConfig);
        devServer.listen(port, config.devServer.host, err => {
            if (err) {
                return console.log(err);
            }
            if (isInteractive) {
                clearConsole();
            }
            console.log(chalk.cyan('Starting the development server...\n'));
            openBrowser(urls.localUrlForBrowser);
        });

        ['SIGINT', 'SIGTERM'].forEach(function(sig) {
            process.on(sig, function() {
                devServer.close();
                process.exit();
            });
        });
        return null;
    })
    .catch(err => {
        if (err && err.message) {
            console.log(err.message);
        }
        process.exit(1);
    });
