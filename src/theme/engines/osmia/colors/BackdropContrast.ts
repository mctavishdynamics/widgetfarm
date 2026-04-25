import { mostReadable, TinyColor } from "@ctrl/tinycolor";
import { OsmiaColor } from "../OsmiaColor.ts";

export class BackdropContrast extends OsmiaColor {
  get base(): TinyColor {
    if (this.engine.backdropColor.isLight()) {
      return this.engine.backdropColor.shade(50);
    } else {
      return this.engine.backdropColor.brighten(50);
    }
  }

  get readable() {
    const readable = mostReadable(
      this.engine.backdropColor,
      [this.engine.backdropColor.tint(80), this.engine.backdropColor.shade(80)],
      {
        level: "AA",
        size: "small",
      },
    );

    return readable || new TinyColor("black");
  }
}
