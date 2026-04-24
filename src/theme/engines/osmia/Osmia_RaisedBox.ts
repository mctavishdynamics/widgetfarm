import { OsmiaComponent } from "./OsmiaComponent.ts";

export class Osmia_RaisedBox extends OsmiaComponent {
  protected _depressed: boolean = false;

  depressed() {
    this._depressed = true;
    return this;
  }

  get isDepressed() {
    return this._depressed;
  }

  get backgroundColor() {
    if (this.isDepressed) {
      return this.engine.backgroundColor.shade(20);
    } else {
      return this.engine.backgroundColor;
    }
  }

  get borderTopColor() {
    if (this.isDepressed) {
      return this.engine.calculateDiffuseColor(this.backgroundColor);
    } else {
      return this.engine.borderSpecularColor;
    }
  }

  get borderRightColor() {
    if (this.isDepressed) {
      return this.engine.calculateSpecularColor(this.backgroundColor);
    } else {
      return this.engine.borderDiffuseColor;
    }
  }

  get borderBottomColor() {
    if (this.isDepressed) {
      return this.engine.calculateSpecularColor(this.backgroundColor);
    } else {
      return this.engine.borderDiffuseColor;
    }
  }

  get borderLeftColor() {
    if (this.isDepressed) {
      return this.engine.calculateDiffuseColor(this.backgroundColor);
    } else {
      return this.engine.borderSpecularColor;
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

  get outlineColor() {
    return this.engine.backdropContrastColor;
  }
}
