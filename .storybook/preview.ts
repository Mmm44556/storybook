import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'orange',
          value: '#FF8600'
        },
        {
          name: 'light',
          value: '#f5f5f5',
        },
        {
          name: 'dark',
          value: '#333333',
        },
        {
          name: 'facebook',
          value: '#3b5998',
        },
      ],
    }
  },
};

export default preview;
