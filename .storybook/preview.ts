import type { Preview } from "@storybook/react-vite";

// Supports weights 100-700
// @ts-expect-error import
import "@fontsource-variable/ibm-plex-sans/wdth.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
