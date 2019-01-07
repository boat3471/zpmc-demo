const errorOverlayMiddleware = require('react-dev-utils/errorOverlayMiddleware');
const { prepareUrls } = require('react-dev-utils/WebpackDevServerUtils');
// const noopServiceWorkerMiddleware = require('react-dev-utils/noopServiceWorkerMiddleware');
const ignoredFiles = require('react-dev-utils/ignoredFiles');
const config = require('./core/config.dev');
const { srcPath } = require('./core/global');
const { protocol, host, port } = config.devServer || {};

const urls = prepareUrls(protocol, host, port);

module.exports = {
    disableHostCheck: false,
    compress: true,
    clientLogLevel: 'none',
    contentBase: config.publicRootPath,
    watchContentBase: true,
    hot: true,
    inline: true,
    quiet: true,
    watchOptions: {
        ignored: ignoredFiles(srcPath),
    },
    https: false,
    host: host,
    overlay: false,
    historyApiFallback: {
        disableDotRule: true,
    },
    public: urls.lanUrlForConfig,
    before(app) {
        app.use(errorOverlayMiddleware());
        // app.use(noopServiceWorkerMiddleware());
    },
};
