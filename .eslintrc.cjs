module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    'react/jsx-filename-extension': 0,
    'react/react-in-jsx-scope': 0,
    'react/button-has-type': 0,
    'import/no-unresolved': 0,
    'no-shadow': 0,
    'linebreak-style': 0,
    'import/extensions': 0,
    'react/jsx-tag-spacing': 0,
  },
};
