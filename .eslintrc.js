module.exports = {
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['prettier'],
  extends: ['eslint:recommended'],
  rules: {
    'prettier/prettier': ['error'],
    'comma-dangle': ['error', 'only-multiline'],
  },
  env: {
    node: true,
    browser: true,
  },
};
