import { Osmia } from "../../../theme/engines/Osmia.ts";
import { makeTheme } from "../makeTheme.ts";

const engine = new Osmia({
  backdropColor: "#808080",
  inset: true,
});

export const theme = makeTheme(engine);
