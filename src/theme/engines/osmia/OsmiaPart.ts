import type { Osmia } from "./Osmia.ts";

export class OsmiaPart {
  protected engine: Osmia;

  constructor(engine: Osmia) {
    this.engine = engine;
  }
}
