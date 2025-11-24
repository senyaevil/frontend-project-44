import js from '@eslint/js';
import stylisticJs from '@stylistic/eslint-plugin-js';

export default [
  js.configs.recommended,
  {
    files: ['**/*.js'],
    plugins: {
      '@stylistic/js': stylisticJs
    },
    rules: {
      ...stylisticJs.configs.recommended.rules,
      'semi': ['error', 'always'],
      'indent': ['error', 2],
      'quotes': ['error', 'single']
    }
  }
];