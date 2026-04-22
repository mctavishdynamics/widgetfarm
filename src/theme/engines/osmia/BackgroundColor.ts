import { TinyColor } from "@ctrl/tinycolor";
import { OsmiaFragment } from "./OsmiaFragment.ts";

export class BackgroundColor extends OsmiaFragment {
  getInsetDark() {
    const brightnessThreshold = new TinyColor("#222").getBrightness();

    if (this.backdropColor.getBrightness() < brightnessThreshold) {
      return this.backdropColor.brighten(10);
    } else {
      return this.backdropColor.shade(30);
    }
  }

  getInsetLight() {
    return this.backdropColor.brighten(10);
  }

  getInset5050() {
    return this.backdropColor.brighten(25);
  }

  getDark() {
    return this.backdropColor.shade(10);
  }

  getLight() {
    const brightnessThreshold = new TinyColor("#eee").getBrightness();

    if (this.backdropColor.getBrightness() > brightnessThreshold) {
      return this.backdropColor.shade(5);
    } else {
      return this.backdropColor.brighten(10);
    }
  }

  get5050() {
    return this.backdropColor.brighten(20);
  }

  get() {
    const color = new TinyColor(this.backdropColor);
    const isDark = color.isDark();
    const is5050 =
      color.getBrightness() > 128 - 10 && color.getBrightness() < 128 + 10;

    if (this.isInset) {
      if (is5050) {
        return this.getInset5050();
      } else if (isDark) {
        return this.getInsetDark();
      } else {
        return this.getInsetLight();
      }
    } else {
      if (is5050) {
        return this.get5050();
      } else if (isDark) {
        return this.getDark();
      } else {
        return this.getLight();
      }
    }
  }
}
