import { Osmia } from "../src/theme/engines/osmia/Osmia.js";

export const mixinDark = {
  globals: {
    backgrounds: { value: "custom" },
  },
  parameters: {
    backgrounds: {
      options: {
        custom: {
          name: "dark",
          value: Osmia.BACKDROP_COLOR_DARK,
        },
      },
    },
  },
};
