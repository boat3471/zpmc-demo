const path = require('path');
const appPath = path.join(__dirname, '..', '..');
const packageJson = require('../../package.json');

module.exports = {
    appPath: appPath,
    buildPath: path.join(appPath, 'build'),
    srcPath: path.join(appPath, 'src'),
    mockPath: path.join(appPath, 'mock'),
    packageJson: packageJson,
};
