const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { buildPath } = require('./core/global');
const { output } = require('./build.config');

const templatePath = path.join(buildPath, 'template', 'index.ejs');

const entries = require('./.entry.pages');

const htmlList = [];
Object.keys(entries).forEach((chunkName) => {
    htmlList.push(new HtmlWebpackPlugin({
        // host: config.HOST,
        title: ' ',
        meta: {},
        inject: true,
        chunkName: chunkName,
        template: templatePath,
        filename: path.join(output.htmlPath, chunkName + '.html'),
        chunks: ['polyfill', 'common', 'chunk', chunkName],
        minify: {
            collapseWhitespace: true,
            preserveLineBreaks: true,
        },
    }));
});

module.exports = htmlList;
