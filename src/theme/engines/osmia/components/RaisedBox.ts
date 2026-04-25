import type { TinyColor } from "@ctrl/tinycolor";
import { OsmiaComponent } from "../OsmiaComponent.ts";

export class RaisedBox extends OsmiaComponent {
  protected _depressed: boolean = false;

  depressed() {
    this._depressed = true;
    return this;
  }

  get isDepressed() {
    return this._depressed;
  }

  get backgroundColor(): TinyColor {
    if (this.isDepressed) {
      return this.engine.colors.background.base.shade(20);
    } else {
      return this.engine.colors.background.base;
    }
  }

  get borderTopColor(): TinyColor {
    if (this.isDepressed) {
      return this.engine.colors.background.calculateDiffuseColor(
        this.backgroundColor,
      );
    } else {
      return this.engine.colors.background.calculateSpecularColor(
        this.backgroundColor,
      );
    }
  }

  get borderRightColor(): TinyColor {
    if (this.isDepressed) {
      return this.engine.colors.background.calculateSpecularColor(
        this.backgroundColor,
      );
    } else {
      return this.engine.colors.background.calculateDiffuseColor(
        this.backgroundColor,
      );
    }
  }

  get borderBottomColor(): TinyColor {
    if (this.isDepressed) {
      return this.engine.colors.background.calculateSpecularColor(
        this.backgroundColor,
      );
    } else {
      return this.engine.colors.background.calculateDiffuseColor(
        this.backgroundColor,
      );
    }
  }

  get borderLeftColor(): TinyColor {
    if (this.isDepressed) {
      return this.engine.colors.background.calculateDiffuseColor(
        this.backgroundColor,
      );
    } else {
      return this.engine.colors.background.calculateSpecularColor(
        this.backgroundColor,
      );
    }
  }

  get borderWidth() {
    return "2px";
  }

  get borderRadius() {
    return "4px";
  }

  get outlineWidth() {
    return "1px";
  }

  get outlineColor(): TinyColor {
    return this.engine.colors.backdropContrast.base;
  }

  get boxShadow() {
    return `1px 1px 1px ${this.engine.backdropColor.darken(10).toHexString()}`;
  }
}
