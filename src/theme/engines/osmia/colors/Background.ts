import { TinyColor } from "@ctrl/tinycolor";
import { OsmiaColor } from "../OsmiaColor.ts";

export class Background extends OsmiaColor {
  getInsetDark() {
    const brightnessThreshold = new TinyColor("#222").getBrightness();

    if (this.engine.backdropColor.getBrightness() < brightnessThreshold) {
      return this.engine.backdropColor.brighten(10);
    } else {
      return this.engine.backdropColor.shade(30);
    }
  }

  getInsetLight() {
    return this.engine.backdropColor.brighten(10);
  }

  getInset5050() {
    return this.engine.backdropColor.brighten(25);
  }

  getDark() {
    return this.engine.backdropColor.shade(10);
  }

  getLight() {
    const brightnessThreshold = new TinyColor("#eee").getBrightness();

    if (this.engine.backdropColor.getBrightness() > brightnessThreshold) {
      if (this.engine.isHover) {
        return this.engine.backdropColor.shade(2.5);
      } else {
        return this.engine.backdropColor.shade(5);
      }
    } else {
      if (this.engine.isHover) {
        return this.engine.backdropColor.brighten(20);
      } else {
        return this.engine.backdropColor.brighten(10);
      }
    }
  }

  get5050() {
    if (this.engine.isHover) {
      return this.engine.backdropColor.brighten(30);
    } else if (this.engine.isActive) {
      return this.engine.backdropColor.shade(10);
    } else {
      return this.engine.backdropColor.brighten(20);
    }
  }

  get base(): TinyColor {
    const color = new TinyColor(this.engine.backdropColor);

    const isDark = color.isDark();
    const is5050 =
      color.getBrightness() > 128 - 10 && color.getBrightness() < 128 + 10;

    if (is5050) {
      return this.get5050();
    } else if (isDark) {
      return this.getDark();
    } else {
      return this.getLight();
    }
  }
}
