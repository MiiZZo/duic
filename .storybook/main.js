module.exports = {
    stories: ["../src/stories/**/*.stor(ies|y).(ts|tsx|js|jsx|mdx)"],
    addons: [
      '@storybook/addon-knobs/register',
      "@storybook/addon-actions",
      "@storybook/addon-links",
      "@storybook/preset-create-react-app",
      {
        name: "@storybook/addon-docs",
        options: {
          configureJSX: true,
        },
      },
    ],
};
