import { OsmiaComponent } from "../OsmiaComponent.ts";

export class InsetBox extends OsmiaComponent {
  get backgroundColor() {
    return this.engine.colors.background.base;
  }

  get borderTopColor() {
    return this.engine.colors.background.diffuse;
  }

  get borderRightColor() {
    return this.engine.colors.background.base;
  }

  get borderBottomColor() {
    return this.engine.colors.background.base;
  }

  get borderLeftColor() {
    return this.engine.colors.background.diffuse;
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

  get outlineStyle() {
    return "solid";
  }

  get outlineColor() {
    return this.engine.colors.backdropContrast.base;
  }

  get outlineOffset() {
    return "0";
  }
}
