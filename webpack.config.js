// eslint-disable-next-line @typescript-eslint/no-var-requires
require('webpack');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const HtmlWebpackPlugin = require('html-webpack-plugin');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const FriendlyErrorsWebpackPlugin = require('@soda/friendly-errors-webpack-plugin');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const ESLintPlugin = require('eslint-webpack-plugin')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

const config = {
    entry: [
        'react-hot-loader/patch',
        './src/index.tsx'
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].[contenthash].js'
    },
    module: {
        rules: [
            {
                test: /\.(js(x)?|ts(x)?)$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
        ]
    },
    devServer: {
        port: 3000,
        static: {
            directory: './public'
        },
    },
    stats: 'none',
    plugins: [
        new ForkTsCheckerWebpackPlugin(),
        new HtmlWebpackPlugin
        ({
            template: 'public/index.html',
            filename: 'index.html',
            favicon: 'public/icon.png'
        }),
        new FriendlyErrorsWebpackPlugin({
            compilationSuccessInfo: {
                messages: ['You application is running here http://localhost:3000'],
            },
        }),
        new ESLintPlugin({extensions: ['ts']}),
        new ReactRefreshWebpackPlugin()
    ],
    resolve: {
        extensions: [
            '.tsx',
            '.ts',
            '.js'
        ],
        alias:
            {
                'react-dom':
                    '@hot-loader/react-dom',
                '^effector$': "effector/compat",
                "^effector-react$": "effector-react/compat"
            }
        ,
        plugins: [new TsconfigPathsPlugin({})]
    },
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name:
                        'vendors',
                    chunks:
                        'all'
                }
            }
        }
    },

};

module.exports = (env, options) => {
    // const production = options.mode === 'production';

    if (options.hot) {
        // Cannot use 'contenthash' when hot reloading is enabled.
        config.output.filename = '[name].[hash].js';
    }

    return config;
};
