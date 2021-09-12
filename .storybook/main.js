module.exports = {
  "stories": [
    "../src/view/**/*.stories.mdx",
    "../src/view/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  "core": {
    "builder": "webpack5",
  },
  webpackFinal: async (baseConfig) => {
    // scss を読み込む
    baseConfig.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1, // 1 => postcss-loader
          },
        },
        'sass-loader',
      ],
    });
    return {...baseConfig};
  }
}