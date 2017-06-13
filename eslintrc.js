module.exports = {
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
    ecmaFeatures: {
      modules: true
    }
  },
  extends: ['eslint:recommended'],
  rules: {
    'no-console': 0,
    'comma-dangle': ['error', 'only-multiline']
  },
  env: {
    browser: true
  }
};
