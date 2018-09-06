module.exports = {
  'parser': 'babel-eslint',
  'plugins': [
    'flowtype'
  ],
  'extends': [
    'plugin:flowtype/recommended'
  ],
  'rules': {
    'eol-last': ['error', 'always'],
    'quotes': ['error', 'single'],
    'no-unused-vars': 'error',
    'indent': ['error', 2, { 'SwitchCase': 1 }],
    'eol-last': ['error', 'always'],
    'flowtype/boolean-style': [
      2,
      'boolean'
    ],
    'flowtype/define-flow-type': 1,
    'flowtype/delimiter-dangle': [
      2,
      'never'
    ],
    'flowtype/generic-spacing': [
      2,
      'never'
    ],
    'flowtype/no-primitive-constructor-types': 2,
    'flowtype/no-types-missing-file-annotation': 2,
    'flowtype/no-weak-types': 2,
    'flowtype/object-type-delimiter': [
      2,
      'comma'
    ],
    'flowtype/require-parameter-type': 2,
    'flowtype/require-return-type': [
      2,
      'always',
      {
        annotateUndefined: 'never',
        excludeArrowFunctions: true,
      }
    ],
    'flowtype/require-valid-file-annotation': 2,
    'flowtype/semi': [
      2,
      'always'
    ],
    'flowtype/space-after-type-colon': [
      2,
      'always'
    ],
    'flowtype/space-before-generic-bracket': [
      2,
      'never'
    ],
    'flowtype/space-before-type-colon': [
      2,
      'never'
    ],
    'flowtype/type-id-match': [
      2,
      '^([A-Z][a-z0-9]+)$'
    ],
    'flowtype/union-intersection-spacing': [
      2,
      'always'
    ],
    'flowtype/use-flow-type': 1,
    'flowtype/valid-syntax': 1
  },
  'settings': {
    'flowtype': {
      'onlyFilesWithFlowAnnotation': false
    }
  }
};
