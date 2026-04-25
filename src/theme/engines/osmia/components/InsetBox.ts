import { OsmiaComponent } from "../OsmiaComponent.ts";

export class InsetBox extends OsmiaComponent {
  get backgroundColor() {
    return this.engine.colors.background.base;
  }

  get backdropContrastColor() {
    return this.engine.colors.backdropContrast.base;
  }

  get borderTopColor() {
    return this.engine.colors.background.specular;
  }

  get borderRightColor() {
    return this.engine.colors.background.diffuse;
  }

  get borderBottomColor() {
    return this.engine.colors.background.diffuse;
  }

  get borderLeftColor() {
    return this.engine.colors.background.specular;
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
    return this.engine.colors.backdropContrast.base;
  }
}
