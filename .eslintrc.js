module.exports = {
  env: {
    browser: true,
  },
  extends: ['airbnb', 'airbnb/hooks', 'react-app', 'prettier', 'prettier/react'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['prettier', 'prettier', 'react', '@typescript-eslint'],
  rules: {
    'react/button-has-type': 'off',
    'semi': ["error", "always"],
    'object-curly-spacing': ["error", "always"],
    "react/jsx-indent" : ["error", 4],
    'react/prop-types': 'off',
    'no-shadow': 'off',
    'global-require': 'off',
    'import/no-extraneous-dependencies': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx', '.ts', '.js'] }],
    'import/extensions': 'off',
    "import/no-unresolved": 'off',
    "no-underscore-dangle": 'off',
    'consistent-return': 'off',
    'no-nested-ternary': 'off',
    'no-console': 'off',
    'react/require-default-props': 'off',
    'jsx-a11y/control-has-associated-label': 'off'
  },
  settings: {
    'import/resolver': {},

  },
};
