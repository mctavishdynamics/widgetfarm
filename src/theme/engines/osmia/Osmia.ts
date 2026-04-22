import { TinyColor, mostReadable } from "@ctrl/tinycolor";
import { BackgroundColor } from "./BackgroundColor.ts";

interface OsmiaArgs {
  backdropColor: string;
  hover?: boolean;
  active?: boolean;
}

export class Osmia {
  static BACKDROP_COLOR_WHITE = "#fff";
  static BACKDROP_COLOR_LIGHT = "#eee";
  static BACKDROP_COLOR_DARK = "#333";
  static BACKDROP_COLOR_BLACK = "#000";
  static BACKDROP_COLOR_5050 = "#808080";

  protected _args: OsmiaArgs;
  protected _backdropColor: TinyColor;
  protected _hover: boolean;
  protected _active: boolean;
  protected _inset: boolean;

  constructor(args: {
    backdropColor: string;
    hover?: boolean;
    active?: boolean;
    inset?: boolean;
  }) {
    const {
      backdropColor,
      hover = false,
      active = false,
      inset = false,
    } = args;

    this._args = args;
    this._backdropColor = new TinyColor(backdropColor);
    this._hover = hover;
    this._active = active;
    this._inset = inset;
  }

  get backdropColor() {
    return this._backdropColor;
  }

  get isHover() {
    return this._hover;
  }

  get isActive() {
    return this._active;
  }

  get isInset() {
    return this._inset;
  }

  hover() {
    return new Osmia({
      ...this._args,
      hover: true,
    });
  }

  active() {
    return new Osmia({
      ...this._args,
      active: true,
    });
  }

  get backgroundColor() {
    return new BackgroundColor(this).get();
  }

  get backdropContrastColor() {
    if (this.isInset) {
      if (this.backdropColor.isLight()) {
        return this.backdropColor.shade(35);
      } else {
        return this.backdropColor.brighten(20);
      }
    } else {
      if (this.backdropColor.isLight()) {
        return this.backdropColor.shade(50);
      } else {
        return this.backdropColor.brighten(50);
      }
    }
  }

  get borderSpecularColor() {
    // Dark
    if (this.backgroundColor.isDark()) {
      if (this.isInset) {
        return this.backgroundColor.brighten(2.5);
      }
    }

    // Light
    else {
      if (this.backdropColor.getBrightness() > 250) {
        return this.backgroundColor.shade(2.5);
      } else {
        return this.backgroundColor.brighten(10);
      }
    }

    if (this.isActive) {
      return this.calculateDiffuseColor(this.backgroundColor, 1);
    } else {
      return this.calculateSpecularColor(this.backgroundColor);
    }
  }

  get borderDiffuseColor() {
    if (this.isActive) {
      return this.calculateSpecularColor(this.backgroundColor, 0);
    } else {
      return this.calculateDiffuseColor(this.backgroundColor);
    }
  }

  get focusOutlineWidth() {
    return "1px";
  }

  get focusOutlineStyle() {
    return "solid";
  }

  get focusOutlineColor() {
    return new TinyColor("black");
  }

  get focusRingWidth() {
    return "1px";
  }

  get focusRingStyle() {
    return "solid";
  }

  get focusRingColor() {
    return new TinyColor("black");
  }

  get color() {
    const readable = mostReadable(
      this.backgroundColor,
      [this.backgroundColor.tint(80), this.backgroundColor.shade(80)],
      {
        level: "AA",
        size: "small",
      },
    );

    return readable || new TinyColor("black");
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
}
