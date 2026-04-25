import { OsmiaPart } from "../OsmiaPart.ts";

export class FocusRing extends OsmiaPart {
  get width() {
    return "1px";
  }

  get style() {
    return "dotted";
  }

  get color() {
    return this.engine.colors.background.readable;
  }

  get offset() {
    return "-4px";
  }
}
