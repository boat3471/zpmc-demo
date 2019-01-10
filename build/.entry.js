const path = require('path');
const pageEntry = require('./.entry.pages');
const devEntry = require('./.entry.dev');

Object.keys(pageEntry).forEach((key) => {
    let singleEntry = pageEntry[key];
    if (!Array.isArray(singleEntry)) {
        singleEntry = [singleEntry];
    }
    pageEntry[key] = [
        ...devEntry,
        ...singleEntry,
    ];
});

module.exports = {
    ...pageEntry,
};
