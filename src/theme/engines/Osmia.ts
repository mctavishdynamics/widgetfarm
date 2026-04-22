import { TinyColor } from "@ctrl/tinycolor";

interface OsmiaArgs {
  backdropColor: string;
  hover?: boolean;
  active?: boolean;
}

export class Osmia {
  protected _args: OsmiaArgs;
  protected _backdropColor: TinyColor;
  protected _hover: boolean;
  protected _active: boolean;

  constructor(args: {
    backdropColor: string;
    hover?: boolean;
    active?: boolean;
  }) {
    const { backdropColor, hover = false, active = false } = args;

    this._args = args;
    this._backdropColor = new TinyColor(backdropColor);
    this._hover = hover;
    this._active = active;
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
    let color = new TinyColor(this._backdropColor);

    if (this._backdropColor.getBrightness() > 250) {
      color = color.shade(10);
    } else {
      color = color.brighten(10);
    }

    if (this._hover) {
      color = color.brighten(5);
    }

    if (this._active) {
      color = color.shade(10);
    }

    return color;
  }

  get backdropContrastColor() {
    const color = new TinyColor(this._backdropColor);

    if (color.isLight()) {
      return color.shade(50);
    } else {
      return color.brighten(50);
    }
  }

  get borderTopColor() {
    if (this._active) {
      return this.calculateDiffuseColor(this.backgroundColor, 1);
    } else {
      return this.calculateSpecularColor(this.backgroundColor);
    }
  }

  get borderRightColor() {
    if (this._active) {
      return this.calculateSpecularColor(this.backgroundColor, 0);
    } else {
      return this.calculateDiffuseColor(this.backgroundColor);
    }
  }

  get borderBottomColor() {
    return this.borderRightColor;
  }

  get borderLeftColor() {
    return this.borderTopColor;
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
