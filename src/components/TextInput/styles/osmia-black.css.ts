import { Osmia } from "../../../theme/engines/osmia/Osmia.ts";
import { makeTheme } from "../makeTheme.ts";

const engine = new Osmia({
  backdropColor: Osmia.BACKDROP_COLOR_BLACK,
  inset: true,
});

export const theme = makeTheme(engine);
