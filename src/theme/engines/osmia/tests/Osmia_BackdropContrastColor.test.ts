import { describe, expect, it } from "vitest";
import { Osmia } from "../Osmia.ts";

const BACKDROP_COLOR = "#808080";

function engine() {
  return new Osmia({
    backdropColor: BACKDROP_COLOR,
  });
}

describe("backdropContrastColor", () => {
  it("DEFAULT STATE", () => {
    const color = engine().colors.backdropContrast.base.toHexString();
    expect(color).toBe("#404040");
  });
});
