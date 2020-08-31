'use strict';
module.exports = {
  singleQuote: true,
  trailingComma: 'all',
  printWidth: 180,
  tabWidth: 4,
  proseWrap: 'never',
  endOfLine: 'auto',
  overrides: [
    {
      files: '.prettierrc',
      options: {
        parser: 'json',
      },
    },
  ],
};
