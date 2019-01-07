const eslintrc = require('./.eslintrc');

const { alias: { map: aliasList } } = eslintrc.settings['import/resolver'] || {};

const aliasMap = {};
aliasList.forEach(([key, value]) => {
    aliasMap[key] = value;
});

module.exports = aliasMap;
