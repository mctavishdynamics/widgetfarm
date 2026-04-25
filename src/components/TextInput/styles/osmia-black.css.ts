import { Osmia } from "../../../theme/engines/osmia/Osmia.ts";
import { makeOsmiaTheme } from "../makeOsmiaTheme.ts";

const engine = new Osmia({
  backdropColor: Osmia.BACKDROP_COLOR_BLACK,
  inset: true,
});

export const theme = makeOsmiaTheme(engine);
