import type { Osmia } from "./Osmia.ts";

export class OsmiaFragment {
  protected engine: Osmia;

  constructor(engine: Osmia) {
    this.engine = engine;
  }

  get backdropColor() {
    return this.engine.backdropColor;
  }

  get isHover() {
    return this.engine.isHover;
  }

  get isActive() {
    return this.engine.isActive;
  }

  get isInset() {
    return this.engine.isInset;
  }
}
