import { describe, expect, it } from "vitest";
import { Osmia } from "../Osmia.ts";

const BACKDROP_COLOR = "#808080";

const EXPECTED_BACKGROUND_COLOR = "#b3b3b3";
const EXPECTED_HOVER_BACKGROUND_COLOR = "#cccccc";
const EXPECTED_ACTIVE_BACKGROUND_COLOR = "#737373";

function engine() {
  return new Osmia({
    backdropColor: BACKDROP_COLOR,
  });
}

describe("backgroundColor", () => {
  it("should return the background color", () => {
    const color = engine().backgroundColor.toHexString();

    expect(color).toBe(EXPECTED_BACKGROUND_COLOR);
  });

  it("should return the hover background color", () => {
    const color = engine().hover().backgroundColor.toHexString();

    expect(color).toBe(EXPECTED_HOVER_BACKGROUND_COLOR);
  });

  it("should return the active background color", () => {
    const color = engine().active().backgroundColor.toHexString();

    expect(color).toBe(EXPECTED_ACTIVE_BACKGROUND_COLOR);
  });
});
