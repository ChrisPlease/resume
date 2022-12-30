module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'standard-with-typescript',
  overrides: [
  ],
  parserOptions: {
    project: ['./tsconfig.json'],
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    '@typescript-eslint/consistent-type-assertions': ['warn', { assertionStyle: 'angle-bracket' }],
    '@typescript-eslint/no-non-null-assertion': ['warn'],
    '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],
    'comma-dangle': ['off'],
  },
}
