module.exports = {
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
    ecmaFeatures: {
      modules: true,
    },
  },
  extends: ['eslint:recommended'],
  globals: {
    ENV: true,
    WebKitMutationObserver: true,
  },
  rules: {
    'no-console': 0,
    'comma-dangle': ['error', 'always'],
  },
  env: {
    browser: true,
    node: true,
  },
};
