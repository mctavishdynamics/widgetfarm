import { Osmia } from "../../../theme/engines/osmia/Osmia.ts";
import { makeTheme } from "../makeTheme.ts";

const engine = new Osmia({
  backdropColor: Osmia.BACKDROP_COLOR_5050,
});

export const theme = makeTheme(engine);
