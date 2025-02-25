export default [{
}, {
    files: ["*.gs"],

    languageOptions: {
        ecmaVersion: 2022,

        parserOptions: {
            ecmaFeatures: {}
        }
    },

    rules: {
        'accessor-pairs': 0,
        'array-bracket-newline': [1, 'consistent'],
        'array-bracket-spacing': [1, 'never'],
        'array-callback-return': 0,
        'array-element-newline': 0,
        'arrow-body-style': [1, 'as-needed'],
        'arrow-parens': [1, 'always'],

        'arrow-spacing': [1, {
            before: true,
            after: true
        }],

        'block-scoped-var': 1,
        'block-spacing': 1,
        'brace-style': 1,
        'callback-return': 0,

        camelcase: [1, {
            properties: 'never'
        }],

        'capitalized-comments': 0,
        'class-methods-use-this': 1,
        'comma-dangle': [1, 'never'],

        'comma-spacing': [1, {
            before: false,
            after: true
        }],

        'comma-style': [1, 'last'],
        complexity: 0,
        'computed-property-spacing': [1, 'never'],
        'consistent-return': 0,
        'consistent-this': [1, 'me', 'Self'],
        'constructor-super': 1,
        curly: 1,
        'default-case': 0,
        'default-case-last': 1,
        'default-param-last': 1,
        'dot-location': [1, 'object'],
        'dot-notation': 1,
        'eol-last': 0,
        eqeqeq: [1, 'smart'],
        'for-direction': 1,
        'func-call-spacing': 1,
        'func-name-matching': 1,
        'func-names': 0,

        'func-style': [1, 'expression', {
            allowArrowFunctions: true
        }],

        'function-call-argument-newline': 0,
        'function-paren-newline': 0,

        'generator-star-spacing': [1, {
            before: true,
            after: false
        }],

        'getter-return': 1,
        'global-require': 1,
        'grouped-accessor-pairs': 1,
        'guard-for-in': 1,
        'handle-callback-err': 1,
        'id-blacklist': 0,
        'id-denylist': 1,
        'id-length': 0,
        'id-match': 0,
        'implicit-arrow-linebreak': 1,

        indent: [1, 4],

        'indent-legacy': 0,
        'init-declarations': 0,
        'jsx-quotes': 1,

        'key-spacing': [1, {
            afterColon: true
        }],

        'keyword-spacing': 1,
        'line-comment-position': 0,
        'linebreak-style': 1,
        'lines-around-comment': 0,
        'lines-around-directive': 1,
        'lines-between-class-members': 1,
        'max-classes-per-file': 1,
        'max-depth': 1,

        'max-len': [1, {
            code: 120
        }],

        'max-lines': 0,
        'max-lines-per-function': 0,
        'max-nested-callbacks': 1,
        'max-params': [1, 6],

        'max-statements': [0, 10, {
            ignoreTopLevelFunctions: true
        }],

        'max-statements-per-line': 1,
        'multiline-comment-style': [1, 'separate-lines'],
        'multiline-ternary': 0,

        'new-cap': [1, {
            capIsNewExceptions: ['Coloris']
        }],

        'newline-before-return': 0,
        'newline-per-chained-call': 0,
        'no-alert': 1,
        'no-array-constructor': 1,
        'no-async-promise-executor': 1,
        'no-await-in-loop': 1,

        'no-bitwise': [1, {
            allow: ['~']
        }],

        'no-buffer-constructor': 1,
        'no-caller': 1,
        'no-case-declarations': 1,
        'no-catch-shadow': 0,
        'no-class-assign': 1,
        'no-compare-neg-zero': 1,
        'no-cond-assign': 1,
        'no-confusing-arrow': 0,
        'no-console': 1,
        'no-const-assign': 1,
        'no-constant-binary-expression': 1,
        'no-constant-condition': 1,
        'no-constructor-return': 1,
        'no-continue': 0,
        'no-control-regex': 1,
        'no-debugger': 1,
        'no-delete-var': 1,
        'no-div-regex': 1,
        'no-dupe-args': 1,
        'no-dupe-class-members': 1,
        'no-dupe-else-if': 1,
        'no-dupe-keys': 1,
        'no-duplicate-case': 1,
        'no-duplicate-imports': 1,
        'no-else-return': 1,
        'no-empty': 1,
        'no-empty-character-class': 1,
        'no-empty-function': 1,
        'no-empty-pattern': 1,
        'no-eq-null': 1,
        'no-eval': 1,
        'no-ex-assign': 1,
        'no-extend-native': 1,
        'no-extra-bind': 1,
        'no-extra-boolean-cast': 1,
        'no-extra-label': 1,

        'no-extra-parens': [1, 'all', {
            nestedBinaryExpressions: false
        }],

        'no-extra-semi': 1,
        'no-fallthrough': 0,
        'no-floating-decimal': 0,
        'no-func-assign': 1,
        'no-global-assign': 1,
        'no-implicit-coercion': 0,
        'no-implicit-globals': 1,
        'no-implied-eval': 1,
        'no-import-assign': 1,
        'no-inline-comments': 0,
        'no-inner-declarations': 1,
        'no-invalid-regexp': 1,
        'no-invalid-this': 1,
        'no-irregular-whitespace': 1,
        'no-iterator': 1,
        'no-label-var': 1,
        'no-labels': 0,
        'no-lone-blocks': 1,
        'no-lonely-if': 1,
        'no-loop-func': 1,
        'no-loss-of-precision': 1,
        'no-magic-numbers': 0,
        'no-misleading-character-class': 1,

        'no-mixed-operators': [1, {
            allowSamePrecedence: true
        }],

        'no-mixed-requires': 1,
        'no-mixed-spaces-and-tabs': 1,
        'no-multi-assign': 0,
        'no-multi-spaces': 1,
        'no-multi-str': 1,

        'no-multiple-empty-lines': [1, {
            max: 1
        }],

        'no-native-reassign': 1,
        'no-negated-condition': 0,
        'no-negated-in-lhs': 1,
        'no-nested-ternary': 1,
        'no-new': 1,
        'no-new-func': 1,
        'no-new-object': 1,
        'no-new-require': 1,
        'no-new-symbol': 1,
        'no-new-wrappers': 1,
        'no-nonoctal-decimal-escape': 1,
        'no-obj-calls': 1,
        'no-octal': 1,
        'no-octal-escape': 1,
        'no-param-reassign': 0,
        'no-path-concat': 1,
        'no-plusplus': 0,
        'no-process-env': 1,
        'no-process-exit': 1,
        'no-promise-executor-return': 1,
        'no-proto': 1,
        'no-prototype-builtins': 1,

        'no-redeclare': [1, {
            builtinGlobals: true
        }],

        'no-regex-spaces': 1,
        'no-restricted-exports': 1,
        'no-restricted-globals': 1,
        'no-restricted-imports': 1,
        'no-restricted-modules': 1,
        'no-restricted-properties': 1,

        'no-restricted-syntax': [2, {
            selector: 'CatchClause[param=null]',
            message: 'Optional catch bindings are not supported by Sencha Cmd 7.8.'
        }, {
            selector: "BinaryExpression[operator='**']",
            message: 'The exponentiation operator is not supported by Sencha Cmd 7.8.'
        }, {
            selector: 'Literal[bigint]',
            message: 'BigInt literals are not supported by Sencha Cmd 7.8.'
        }, {
            selector: 'CallExpression > MemberExpression [optional=true],CallExpression > MemberExpression[optional=true]',
            message: 'Optional chaining that contains a method is not supported by Sencha Cmd 7.8'
        }, {
            selector: 'ImportExpression',
            message: 'Dynamic imports are not supported by Sencha Cmd 7.8'
        }, {
            selector: 'Literal[regex.flags=/.*d.*/]',
            message: "The 'd' flag in regex literals is not supported by JSDuck."
        }],

        'no-return-assign': 0,
        'no-return-await': 1,
        'no-script-url': 1,
        'no-self-assign': 1,
        'no-self-compare': 1,
        'no-sequences': 1,
        'no-setter-return': 1,

        'no-shadow': [1, {
            builtinGlobals: false,
            hoist: 'all',
            allow: ['el', 'element', 'reject', 'resolve']
        }],

        'no-shadow-restricted-names': 1,
        'no-spaced-func': 1,
        'no-sparse-arrays': 1,
        'no-sync': 0,
        'no-tabs': 1,
        'no-template-curly-in-string': 1,
        'no-ternary': 0,
        'no-this-before-super': 1,
        'no-throw-literal': 1,
        'no-trailing-spaces': 0,
        'no-undef': 1,
        'no-undef-init': 1,
        'no-undefined': 0,
        'no-underscore-dangle': 0,
        'no-unexpected-multiline': 1,
        'no-unmodified-loop-condition': 1,
        'no-unneeded-ternary': 1,
        'no-unreachable': 1,
        'no-unreachable-loop': 1,
        'no-unsafe-finally': 1,
        'no-unsafe-negation': 1,
        'no-unsafe-optional-chaining': 1,

        'no-unused-expressions': [1, {
            allowShortCircuit: true
        }],

        'no-unused-labels': 1,
        'no-unused-private-class-members': 1,

        'no-unused-vars': [1, {
            varsIgnorePattern: '[_]\\S*',
            argsIgnorePattern: '[_]\\S*'
        }],

        'no-use-before-define': 1,
        'no-useless-backreference': 1,
        'no-useless-call': 1,
        'no-useless-catch': 1,
        'no-useless-computed-key': 1,
        'no-useless-concat': 1,
        'no-useless-constructor': 1,
        'no-useless-escape': 1,
        'no-useless-rename': 1,
        'no-useless-return': 1,
        'no-var': 0,
        'no-void': 1,
        'no-warning-comments': 0,
        'no-whitespace-before-property': 1,
        'no-with': 1,
        'nonblock-statement-body-position': 1,
        'object-curly-newline': 1,
        'object-curly-spacing': [1, 'always'],

        'object-property-newline': [1, {
            allowAllPropertiesOnSameLine: true
        }],

        'object-shorthand': [1, 'properties'],
        'one-var': [1, 'consecutive'],
        'one-var-declaration-per-line': [1, 'always'],
        'operator-assignment': [1, 'always'],
        'operator-linebreak': [1, 'after'],
        'padded-blocks': [1, 'never'],

        'padding-line-between-statements': [1, {
            blankLine: 'always',
            prev: 'var',
            next: '*'
        }, {
            blankLine: 'any',
            prev: 'singleline-var',
            next: '*'
        }, {
            blankLine: 'always',
            prev: 'singleline-var',
            next: 'if'
        }, {
            blankLine: 'always',
            prev: 'if',
            next: '*'
        }],

        'prefer-arrow-callback': 1,
        'prefer-const': 1,
        'prefer-destructuring': 0,
        'prefer-exponentiation-operator': 0,
        'prefer-named-capture-group': 0,
        'prefer-numeric-literals': 1,
        'prefer-object-has-own': 1,
        'prefer-object-spread': 1,
        'prefer-promise-reject-errors': 1,
        'prefer-reflect': 0,
        'prefer-regex-literals': 1,
        'prefer-rest-params': 0,
        'prefer-spread': 1,
        'prefer-template': 1,
        'quote-props': [1, 'as-needed'],
        quotes: [1, 'single', 'avoid-escape'],
        radix: [1, 'as-needed'],
        'require-atomic-updates': 1,
        'require-await': 1,
        'require-unicode-regexp': 0,
        'require-yield': 1,
        'rest-spread-spacing': 1,
        semi: [1, 'always'],

        'semi-spacing': [1, {
            before: false,
            after: true
        }],

        'semi-style': 1,
        'sort-imports': 1,
        'sort-keys': 0,
        'sort-vars': 0,
        'space-before-blocks': [1, 'always'],

        'space-before-function-paren': [1, {
            anonymous: 'never',
            named: 'never',
            asyncArrow: 'always'
        }],

        'space-in-parens': [1, 'never'],
        'space-infix-ops': 1,

        'space-unary-ops': [1, {
            words: true,
            nonwords: false
        }],

        'spaced-comment': [1, 'always'],
        strict: 0,
        'switch-colon-spacing': 1,
        'symbol-description': 1,
        'template-curly-spacing': [1, 'never'],
        'template-tag-spacing': 1,
        'unicode-bom': 1,
        'use-isnan': 1,
        'valid-typeof': 1,
        'vars-on-top': 0,
        'wrap-iife': 1,
        'wrap-regex': 0,

        'yield-star-spacing': [1, {
            before: true,
            after: false
        }],

        yoda: 1
    }
}];