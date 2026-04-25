import { Osmia } from "../../../theme/engines/osmia/Osmia.ts";
import { makeOsmiaTheme } from "../makeOsmiaTheme.ts";

const engine = new Osmia({
  backdropColor: Osmia.BACKDROP_COLOR_DARK,
});

export const theme = makeOsmiaTheme(engine);
