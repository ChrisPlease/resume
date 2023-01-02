module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'standard-with-typescript',
  overrides: [
    {
      files: ['src/**/*.tsx'],
      rules: {
        '@typescript-eslint/consistent-type-assertions': ['warn', {
          assertionStyle: 'as',
        }],
      },
    },
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
    '@typescript-eslint/strict-boolean-expressions': ['warn', {
      allowString: true,
      allowNumber: true,
      allowNullableObject: true,
      allowNullableBoolean: false,
      allowNullableString: false,
      allowNullableNumber: false,
      allowAny: false,
      allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false,
    }],
    'comma-dangle': ['off'],
  },
}
