/** @type { import('@storybook/nextjs').StorybookConfig } */
const config = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [],
  framework: {
    name: "@storybook/nextjs",
    options: {}
  }
};

export default config;