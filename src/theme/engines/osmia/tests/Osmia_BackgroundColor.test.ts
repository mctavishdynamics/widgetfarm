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
  it("DEFAULT STATE", () => {
    const color = engine().colors.background.base.toHexString();

    expect(color).toBe(EXPECTED_BACKGROUND_COLOR);
  });

  it("HOVER STATE", () => {
    const color = engine().hover().colors.background.base.toHexString();

    expect(color).toBe(EXPECTED_HOVER_BACKGROUND_COLOR);
  });

  it("ACTIVE STATE", () => {
    const color = engine().active().colors.background.base.toHexString();

    expect(color).toBe(EXPECTED_ACTIVE_BACKGROUND_COLOR);
  });

  it("INSET DEFAULT STATE", () => {
    const color = engine().active().colors.background.base.toHexString();

    expect(color).toBe(EXPECTED_ACTIVE_BACKGROUND_COLOR);
  });
});
