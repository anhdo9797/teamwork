'use strict';
module.exports = {
    singleQuote: true,
    trailingComma: 'all',
    printWidth: 810,
    tabWidth: 2,
    proseWrap: 'never',
    overrides: [
        {
            files: '.prettierrc',
            options: {
                parser: 'json',
            },
        },
    ],
};
