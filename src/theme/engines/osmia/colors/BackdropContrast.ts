import type { TinyColor } from "@ctrl/tinycolor";
import { OsmiaColor } from "../OsmiaColor.ts";

export class BackdropContrast extends OsmiaColor {
  get base(): TinyColor {
    if (this.engine.backdropColor.isLight()) {
      return this.engine.backdropColor.shade(50);
    } else {
      return this.engine.backdropColor.brighten(50);
    }
  }
}
