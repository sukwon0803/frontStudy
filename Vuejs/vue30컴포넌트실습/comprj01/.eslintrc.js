module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    commonjs: true,
    es6: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  plugins: ['prettier'],
  ignorePatterns: ['node_modules/'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'prettier/prettier': [
      'error',
      { endOfLine: 'auto' },
    ] /* 라인당 최대 글자 수 설정 - 줄바꿈 설정 */,
    'linebreak-style': 'off',
    'arrow-parens': ['error', 'always'] /* (a) => {} */,
    'arrow-body-style': 'off' /* 화살표 함수 관련 설정 */,
    'consistent-return': 'off' /* 화살표 함수 자동 리턴 처리*/,
    'func-names': 'off' /* 변수 선언시 var 사용하면 오류 발생 */,
    'no-shadow': 'off',
    'no-alert': 'off' /* alert() 메서드 사용시 오류 발생 */,
    'no-var': 'error' /* 변수 선언시 var 사용하면 오류 발생 */,
    'no-unused-vars': 'off' /* 변수 선언후 미 사용시 오류 처리 */,
    'no-param-reassign': [
      'error',
      { props: false },
    ] /*함수 매개변수를 변경할때 오류 처리*/,
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
};
