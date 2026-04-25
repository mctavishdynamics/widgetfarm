import { expect } from "storybook/test";
import { describe, it } from "vitest";
import { Osmia } from "../Osmia.ts";

describe("Osmia Theme Engine", () => {
  it("should create a new instance with default arguments", () => {
    const engine = new Osmia({
      backdropColor: "#000000",
    });

    const hovered = engine.hover();

    expect(engine === hovered).toBeFalsy();
  });
});
