module.exports = {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-recess-order'],
  plugins: ['stylelint-scss', 'stylelint-prettier'],
  rules: {
    'max-nesting-depth': 3,
    'prettier/prettier': true,
  },
}
