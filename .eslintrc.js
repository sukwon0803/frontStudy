module.exports = {
  /*
    https://feynubrick.github.io/2019/05/20/eslint-prettier.html
    ESLint 규칙:
      https://eslint.org/docs/rules/
      https://eslint.org/docs/user-guide/configuring/
    Prettier 옵션:
      https://prettier.io/docs/en/options.html
  */
  root: true,
  env: {
    node: true,

    browser: true,
    commonjs: true,
    es6: true,
    es2021: true,
    /* mocha: true, */
    jest: true,
  },
  extends: [
    'eslint:recommended',
    /* 'plugin:react/recommended', */
    /* 'prettier', */
  ],
  globals: {
    _: false,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: '@babel/eslint-parser',
  },
  plugins: ['prettier'],
  ignorePatterns: ['node_modules/'],
  rules: {
    // "off" or 0 - turn the rule off
    // "warn" or 1 - turn the rule on as a warning (doesn’t affect exit code)
    // "error" or 2 - turn the rule on as an error (exit code is 1 when triggered)

    // windows linebreaks when not in production environment
    'linebreak-style': ['off', 'unix'],
    'no-param-reassign': [
      'error',
      {
        props: false,
      },
    ],
    'arrow-parens': ['warn', 'always'], // () => {}
    'arrow-body-style': ['warn', 'always'],
    'consistent-return': 'off',
    'func-names': 'off',
    'no-shadow': 'off',
    'no-alert': 'off',
    'no-var': 'error',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-unused-vars': 'warn',
    quotes: ['error', 'single'],
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: { consistent: true, multiline: true },
        ObjectPattern: { consistent: true, multiline: true },
        ImportDeclaration: { multiline: true, minProperties: 3 },
        ExportDeclaration: { multiline: true, minProperties: 3 },
      },
    ],

    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    // suppress errors for missing 'import React' in files
    'react/react-in-jsx-scope': 'off',
    // allow jsx syntax in js files (for next.js project)
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ], //should add ".ts" if typescript project
    // 'jsx-a11y/label-has-associated-control': ['warn', { required: { some: ['nesting', 'id'] } }],
    // 'jsx-a11y/label-has-for': ['warn', { required: { some: ['nesting', 'id'] } }],
    'react/jsx-one-expression-per-line': 0,
    'react/prop-types': 1,
    'react/no-unused-prop-types': 1,
  },
  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
      env: {
        jest: true,
      },
    },
  ],
};
