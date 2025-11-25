import js from '@eslint/js'
import globals from 'globals'

export default [
  js.configs.recommended,
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.node,
      },
    },
    rules: {
      'semi': ['error', 'never'],
      'indent': ['error', 2],
      'quotes': ['error', 'single'],
      'comma-dangle': ['error', 'always-multiline'],
      'quote-props': ['error', 'consistent-as-needed'],
      'no-trailing-spaces': 'error',
      'eol-last': 'error',
      'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
      'padded-blocks': ['error', 'never'],
    },
  },
]