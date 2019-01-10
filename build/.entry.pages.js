const path = require('path');
const global = require('./core/global');

function fullPath(relativePath) {
    return path.join(global.srcPath, relativePath);
}

function pageFullPath(relativePath) {
    return path.join(global.srcPath, 'pages', relativePath);
}

module.exports = {
    'index': fullPath('main.js'),
    'demo': pageFullPath('Demo.jsx'),
    'todo': pageFullPath('todolist'),
};
