const webpackConfig = require('../webpack.config')

module.exports = {
    webpackFinal: async (config) => {
        const { resolve, module } = webpackConfig('development', { hot: true })

        config.module.rules.push(module.rules[0])
        config.resolve = resolve

        return config
    },
    stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
    ],
    staticDirs: [
        '../src/shared/images'
    ],
    framework: "@storybook/react",
    core: {
        builder: "@storybook/builder-webpack5",
    },
    features: {
        storyStoreV7: true,
    },
};
