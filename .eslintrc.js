module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
    ecmaFeatures: {
      modules: true,
    },
  },
  extends: [],
  rules: {},
  plugins: ['react', 'jsx-a11y', 'import'],
  env: {
    browser: true,
    node: true,
  },
};
