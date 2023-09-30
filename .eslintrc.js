module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: 'tsconfig.json',
        sourceType: 'module',
        tsconfigRootDir: __dirname,
    },
    extends: ['plugin:@typescript-eslint/recommended', 'plugin:react/recommended', 'plugin:prettier/recommended'],
    plugins: ['prettier', '@typescript-eslint', "react"],
    env: {
        browser: true,
        es6: true,
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    rules: {
        "react/react-in-jsx-scope": "off",
        'linebreak-style': 'off',
        'prettier/prettier': [
            'error',
            {
                endOfLine: 'auto',
            },
            {
                usePrettierrc: true,
            },
        ],
        'no-console': 'warn',
        '@typescript-eslint/no-empty-function': 'off',
        'no-eval': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        'react/jsx-key': 1,
        "react/react-in-jsx-scope": 2,          
    },
}