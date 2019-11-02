module.exports = {
    'env': {
        'commonjs': true,
        'es6': true,
        'node': true
    },
    'extends': 'eslint:recommended',
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly'
    },
    'parserOptions': {
        'ecmaVersion': 2018
    },
    'rules': {
        'array-callback-return': [
            'error'
        ],
        'block-scoped-var': [
            'error'
        ],
        'class-methods-use-this': [
            'error'
        ],
        'complexity': [
            'error'
        ],
        'curly': [
            'error'
        ],
        'default-case': [
            'error'
        ],
        'dot-notation': [
            'error'
        ],
        'max-classes-per-file': [
            'error',
            1
        ],
        'no-case-declarations': [
            'error'
        ],
        'no-empty-function': [
            'error'
        ],
        'no-extend-native': [
            'error'
        ],
        'no-extra-bind': [
            'error'
        ],
        'no-fallthrough': [
            'error'
        ],
        'no-floating-decimal': [
            'error'
        ],
        'no-global-assign': [
            'error'
        ],
        'no-implicit-coercion': [
            'error'
        ],
        'no-invalid-this': [
            'error'
        ],        
        'no-labels': [
            'error'
        ],
        'no-lone-blocks': [
            'error'
        ],
        'no-loop-func': [
            'error'
        ],
        'no-multi-spaces': [
            'error'
        ],
        'no-multi-str': [
            'error'
        ],
        'no-new': [
            'error'
        ],
        'no-new-func': [
            'error'
        ],
        'no-new-wrappers': [
            'error'
        ],
        'no-octal': [
            'error'
        ],
        'no-octal-escape': [
            'error'
        ],
        'no-param-reassign': [
            'error'
        ],
        'no-proto': [
            'error'
        ],
        'no-redeclare': [
            'error'
        ],
        'no-return-assign': [
            'error'
        ],
        'no-return-await': [
            'error'
        ],
        'no-self-assign': [
            'error'
        ],
        'no-self-compare': [
            'error'
        ],
        'no-sequences': [
            'error'
        ],
        'no-throw-literal': [
            'error'
        ],
        'no-unmodified-loop-condition': [
            'error'
        ],
        'no-unused-labels': [
            'error'
        ],
        'no-useless-call': [
            'error'
        ],
        'no-useless-catch': [
            'error'
        ],
        'no-unused-expressions': [
            'error'
        ],
        'no-useless-concat': [
            'error'
        ],
        'no-useless-escape': [
            'error'
        ],
        'no-useless-return': [
            'error'
        ],
        'no-void': [
            'error'
        ],
        'no-with': [
            'error'
        ],
        'prefer-promise-reject-errors': [
            'error'
        ],
        'require-await': [
            'error'
        ],
        'vars-on-top': [
            'error'
        ],
        'no-new-require': [
            'error'
        ],
        'no-path-concat': [
            'error'
        ],
        'no-sync': [
            'error'
        ],
        'array-bracket-spacing': [
            'error'
        ],
        'block-spacing': [
            'error'
        ],
        'brace-style': [
            'error'
        ],
        'camelcase': [
            'error'
        ],
        'comma-dangle': [
            'error',
        ],
        'comma-spacing': [
            'error'
        ],
        'comma-style': [
            'error'
        ],
        'computed-property-spacing': [
            'error'
        ],
        'func-call-spacing': [
            'error'
        ],
        'no-array-constructor': [
            'error'
        ],
        'no-mixed-spaces-and-tabs': [
            'error'
        ],
        'no-multiple-empty-lines': [
            'error'
        ],
        'no-tabs': [
            'error'
        ],
        'no-trailing-spaces': [
            'error'
        ],
        'no-unneeded-ternary': [
            'error'
        ],
        'no-whitespace-before-property': [
            'error'
        ],
        'nonblock-statement-body-position': [
            'error'
        ],
        'operator-assignment': [
            'error'
        ],
        'indent': [
            'error',
            2
        ],
        'linebreak-style': [
            'error',
            'windows'
        ],
        'comma-dangle': [
            'error'
        ],
        'no-const-assign': [
            'error'
        ],
        'no-var': [
            'error'
        ],
        'prefer-const': [
            'error'
        ],
        'prefer-template': [
            'error'
        ],
        'object-curly-spacing': [
            'error'
        ],
        'quotes': [
            'error',
            'single',
            { 'allowTemplateLiterals': true }
        ],
        'semi': [
            'error',
            'always'
        ]
    }
};