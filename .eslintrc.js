module.exports = {
  root: true,


  extends: [
    '@vue/airbnb',
    'plugin:vue/essential',
  ],


  rules: {
    'arrow-parens': ['error', 'as-needed'],

    'comma-dangle': ['error', 'always-multiline'],

    'key-spacing': ['error', {
      align: 'value',
    }],

    'no-multi-spaces': ['error', {
      exceptions: {
        ImportDeclaration:  true,
        Property:           true,
        VariableDeclarator: true
      },
      ignoreEOLComments: false,
    }],

    'no-multiple-empty-lines': ['error', {
      max:    4,
      maxBOF: 0,
    }],
  },
};
