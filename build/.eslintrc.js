const path = require('path');

module.exports = {
    root: true,
    extends: [
        'eslint:recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:promise/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:react/recommended',
        'plugin:flowtype/recommended',
    ],
    plugins: [
        'import',
        'promise',
        'react',
        'jsx-a11y',
        'flowtype',
    ],
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    parserOptions: {
        ecmaVersion: 2016,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
            impliedStrict: true,
        },
    },
    rules: {
        'indent': [
            'error', 4, {
                SwitchCase: 1,
            },
        ],
        'max-len': ['error', 120],
        'no-console': 'warn',
        'react/prop-types': 'off',
    },
    settings: {
        'import/resolver': {
            alias: {
                map: [
                    ['-src', path.join(__dirname, '..', 'src')],
                    ['-mock', path.join(__dirname, '..', 'mock')],
                    ['-apis', path.join(__dirname, '..', 'src/apis')],
                    ['-lib', path.join(__dirname, '..', 'src/libs')],
                    ['-history', path.join(__dirname, '..', 'src/libs/history.js')],
                    ['style', path.join(__dirname, '..', 'src/styles')],
                ],
                extensions: ['.js', '.jsx', '.json'],
            },
        },
    },
};
