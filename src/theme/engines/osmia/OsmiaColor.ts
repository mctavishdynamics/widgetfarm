import { mostReadable, TinyColor } from "@ctrl/tinycolor";
import type { Osmia } from "./Osmia.ts";

export abstract class OsmiaColor {
  protected engine: Osmia;

  constructor(engine: Osmia) {
    this.engine = engine;
  }

  abstract get base(): TinyColor;

  get specular() {
    return this.calculateSpecularColor(this.base);
  }

  get diffuse() {
    return this.calculateDiffuseColor(this.base);
  }

  get bright() {
    return this.base.brighten(10);
  }

  get dark() {
    return this.base.darken(10);
  }

  calculateSpecularColor(color: string | TinyColor, amount = 1) {
    const isDark = new TinyColor(color).isDark();

    if (isDark) {
      return new TinyColor(color).brighten(10 * amount);
    } else {
      return new TinyColor(color).brighten(10 * amount);
    }
  }

  calculateDiffuseColor(color: string | TinyColor, amount = 1) {
    const isDark = new TinyColor(color).isDark();

    if (isDark) {
      return new TinyColor(color).darken(10 * amount);
    } else {
      return new TinyColor(color).darken(10 * amount);
    }
  }

  get readable() {
    const readable = mostReadable(
      this.base,
      [this.base.tint(80), this.base.shade(80)],
      {
        level: "AA",
        size: "small",
      },
    );

    return readable || new TinyColor("black");
  }
}
