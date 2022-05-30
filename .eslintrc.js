module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: 'tsconfig.json',
        sourceType: 'module',
        tsconfigRootDir: __dirname,
    },
    extends: ['plugin:@typescript-eslint/recommended', 'plugin:react/recommended', 'plugin:prettier/recommended'],
    settings: {
        react: {
            version: 'detect',
        },
    },
    plugins: ['prettier', '@typescript-eslint'],
    env: {
        browser: true,
        es6: true,
    },
    rules: {
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
    },
}
