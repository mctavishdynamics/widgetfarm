import { Osmia } from "../src/theme/engines/osmia/Osmia.js";

export const mixinBlack = {
  globals: {
    backgrounds: { value: "custom" },
  },
  parameters: {
    backgrounds: {
      options: {
        custom: {
          name: "black",
          value: Osmia.BACKDROP_COLOR_BLACK,
        },
      },
    },
  },
};
