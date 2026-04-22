import { Osmia } from "../src/theme/engines/osmia/Osmia.js";

export const mixinLight = {
  globals: {
    backgrounds: { value: "custom" },
  },
  parameters: {
    backgrounds: {
      options: {
        custom: {
          name: "light",
          value: Osmia.BACKDROP_COLOR_LIGHT,
        },
      },
    },
  },
};
