import { OsmiaPart } from "../OsmiaPart.ts";

export class FocusOutline extends OsmiaPart {
  get width() {
    return "1px";
  }

  get style() {
    return "solid";
  }

  get color() {
    return this.engine.colors.backdropContrast.base;
  }
}
