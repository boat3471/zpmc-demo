const path = require('path');
const env = require('dist-env');
const configPath = path.join(__dirname, 'core', `config.${env.DIST_ENV}.js`);
const config = require(configPath);

module.exports = config;
