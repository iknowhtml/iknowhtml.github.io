module.exports = {
  extends: 'stylelint-config-recommended',
  plugins: ['stylelint-prettier'],
  rules: {
    'prettier/prettier': true,
    'no-descending-specificity': null,
  },
};
