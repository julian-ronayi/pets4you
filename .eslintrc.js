module.exports = {
    'env': {
        'browser': true,
        'es6': true
    },
    'extends': [
       'eslint:recommended',
       'airbnb',
       'plugin:react/recommended',
       'plugin:import/errors',
       'plugin:import/warnings',
       'plugin:jsx-a11y/recommended',
       'plugin:jest/recommended',
       'plugin:promise/recommended'
    ],
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly'
    },
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 2018,
        'sourceType': 'module'
    },
    'plugins': [
        'react',
        'react-hooks',
        'deprecate',
        'optimize-regex',
        'immutable',
        'jsx-a11y',
        'jest',
        'no-secrets',
        'xss',
        'promise',
        // 'graphql'
    ],
    'settings': {
      'import/resolver': {
        'node': {
          'extensions': ['.js', '.jsx', '.ts', '.tsx']
        }
      },
      'react': {
        'createClass': 'createReactClass', // Regex for Component Factory to use,
                                           // default to "createReactClass"
        'pragma': 'React',  // Pragma to use, default to "React"
        'version': 'detect', // React version. "detect" automatically picks the version you have installed.
                             // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
                             // default to latest and warns if missing
                             // It will default to "detect" in the future
      },
      'propWrapperFunctions': [
          // The names of any function used to wrap propTypes, e.g. `forbidExtraProps`. If this isn't set, any propTypes wrapped in a function will be skipped.
          'forbidExtraProps',
          { 'property': 'freeze', 'object': 'Object' },
          { 'property': 'myFavoriteWrapper' }
      ],
      'linkComponents': [
        // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
        'Hyperlink',
        { 'name': 'Link', 'linkAttribute': 'to' }
      ]
    },
    'rules': {
        // 'graphql/template-strings': ['error', {
        //   env: 'apollo',
        //   // Import your schema JSON here
        //   // schemaJson: require('./schema.json'),
        //
        //   // OR provide absolute path to your schema JSON (but not if using `eslint --cache`!)
        //   // schemaJsonFilepath: path.resolve(__dirname, './schema.json'),
        //
        //   // OR provide the schema in the Schema Language format
        //   // schemaString: printSchema(schema),
        //
        //   // tagName is gql by default
        // }],
        '@typescript-eslint/explicit-function-return-type': 0,
        'no-underscore-dangle': 0,
        'no-secrets/no-secrets': [
          'error',
          { 'ignoreContent': '^Card|^Admin|^CheckOut|^MyBreedingCard.AvailableStudButton|^data:|^https|v1485169396'}
        ],
        'jest/no-disabled-tests': 'warn',
        'jest/no-focused-tests': 'error',
        'jest/no-identical-title': 'error',
        'jest/prefer-to-have-length': 'warn',
        'jest/valid-expect': 'error',
      	'jsx-a11y/label-has-associated-control': 0,
        'import/no-unresolved': [2, {commonjs: true, amd: true}],
        'import/named': 2,
        'import/namespace': 2,
        'import/default': 2,
        'import/export': 2,
        'react/button-has-type': 0,
        'optimize-regex/optimize-regex': 'warn',
        'react/jsx-filename-extension': [1, { 'extensions': ['.tsx', '.jsx'] }],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        '@typescript-eslint/indent': ['error', 2, { 'SwitchCase': 0 }],
        'react/forbid-prop-types': 0,
        'no-param-reassign': 0,
        'promise/always-return': 0,
        'jsx-a11y/no-static-element-interactions': 0,
        'jsx-a11y/click-events-have-key-events': 0,
        'jsx-a11y/aria-role': 0,
        'jsx-a11y/anchor-is-valid': 0,
        'react/destructuring-assignment': [1, 'always', { 'ignoreClassFields': true }],
        'jsx-a11y/no-noninteractive-element-interactions': 1,
        'no-plusplus': 0,
        'react/no-string-refs': 0,
        'react/no-danger': 0,
        'indent': [
            'error',
            2,
            { 'SwitchCase': 0 }
        ],
        'linebreak-style': [
            'error',
            'unix'
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
