import type { TinyColor } from "@ctrl/tinycolor";
import { OsmiaColor } from "../OsmiaColor.ts";

export class Border extends OsmiaColor {
  get base(): TinyColor {
    return this.engine.colors.background.base;
  }
}
