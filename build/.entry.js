const path = require('path');
const entry = require('../src/entry');
const devEntry = require('./.entry.dev');

Object.keys(entry).forEach((key) => {
    let singleEntry = entry[key];
    if (!Array.isArray(singleEntry)) {
        singleEntry = [singleEntry];
    }
    entry[key] = [
        ...devEntry,
        ...singleEntry,
    ];
});

module.exports = {
    ...entry,
};
