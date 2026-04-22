import { Osmia } from "../src/theme/engines/osmia/Osmia.js";

export const mixinWhite = {
  globals: {
    backgrounds: { value: "custom" },
  },
  parameters: {
    backgrounds: {
      options: {
        custom: {
          name: "white",
          value: Osmia.BACKDROP_COLOR_WHITE,
        },
      },
    },
  },
};
