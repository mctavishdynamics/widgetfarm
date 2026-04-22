import { Osmia } from "../../../theme/engines/Osmia.ts";
import { makeTheme } from "../makeTheme.ts";

const engine = new Osmia({
  backdropColor: "#808080",
});

export const theme = makeTheme(engine);
