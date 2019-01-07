const { packageJson } = require('./global');

module.exports = {
    env: '',
    appName: packageJson.name,
    publicPath: '',
    publicRootPath: '',
    output: {
        staticPath: '',
        htmlPath: '',
        filename: '[name]',
        chunkFilename: '[name]',
    },
    plugins: [],
};
