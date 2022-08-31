module.exports = {
  'env': {
    'es2021': true,
    'node': true
  },
  'extends': ['plugin:react/recommended', 'standard-with-typescript'],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'project': 'tsconfig.json',
    'tsconfigRootDir': __dirname,
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'plugins': ['react', 'react-hooks', '@typescript-eslint'],
  'ignorePatterns': ['.eslintrc.cjs', 'node_modules/', '**/*.scss', '**/*.css'],
  'overrides': [
    {
      'files': ['*.ts', '*.tsx'],
      'rules': {
        'no-undef': 'off'
      }
    }
  ],
  'rules': {
    'no-console': 'error',
    'semi': ['error', 'never'],
    'arrow-parens': ['error', 'always'],
    'no-trailing-spaces': 'error',
    'space-before-function-paren': [
      'off'
      // {
      //   "anonymous": "always",
      //   "named": "always",
      //   "asyncArrow": "always"
      // }
    ],
    'multiline-ternary': 'off',
    'react/react-in-jsx-scope': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    '@typescript-eslint/consistent-type-definitions': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    'no-restricted-imports': 'off',
    '@typescript-eslint/no-restricted-imports': [
      'warn',
      {
        'name': 'react-redux',
        'importNames': ['useSelector', 'useDispatch'],
        'message': 'Use typed hooks `useAppDispatch` and `useAppSelector` instead.'
      }
    ],
    '@typescript-eslint/promise-function-async': 'off',
    '@typescript-eslint/restrict-template-expressions': [
      'error',
      {
        'allowNumber': true,
        'allowBoolean': true,
        'allowAny': true,
        'allowNullable': true,
        'allowRegExp': true
      }
    ]
  },
  'settings': {
    'react': {
      'version': 'detect'
    }
  }
}
