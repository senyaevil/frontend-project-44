// eslint.config.js
export default {
  files: ['**/*.js'],
  rules: {
    'semi': ['error', 'never'],
    'no-multiple-empty-lines': ['error', { 'max': 1 }],
    'comma-dangle': ['error', 'always-multiline'],
    'quote-props': ['error', 'consistent'],
    'quotes': ['error', 'single'],
    'indent': ['error', 2],
    'no-trailing-spaces': 'error',
    'eol-last': 'error',
  },
}
