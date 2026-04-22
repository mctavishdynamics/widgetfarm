import type { Osmia } from "../../theme/engines/Osmia.ts";
import { ButtonTheme } from "./ButtonTheme.ts";

export function makeTheme(engine: Osmia) {
  return new ButtonTheme({
    // Color

    color: {
      value: engine.color.toHexString(),
    },

    colorHover: {
      value: engine.hover().color.toHexString(),
    },

    colorActive: {
      value: engine.active().color.toHexString(),
    },

    // Padding

    paddingTop: {
      value: "6px",
    },

    paddingRight: {
      value: "6px",
    },

    paddingBottom: {
      value: "6px",
    },

    paddingLeft: {
      value: "6px",
    },

    // Background

    background: {
      value: engine.backgroundColor.toHexString(),
    },

    backgroundHover: {
      value: engine.hover().backgroundColor.toHexString(),
    },

    backgroundActive: {
      value: engine.active().backgroundColor.toHexString(),
    },

    // Border Colors

    borderTopColor: {
      value: engine.borderTopColor.toHexString(),
    },

    borderTopColorHover: {
      value: engine.hover().borderTopColor.toHexString(),
    },

    borderTopColorActive: {
      value: engine.active().borderTopColor.toHexString(),
    },

    borderRightColor: {
      value: engine.borderRightColor.toHexString(),
    },

    borderRightColorHover: {
      value: engine.hover().borderRightColor.toHexString(),
    },

    borderRightColorActive: {
      value: engine.active().borderRightColor.toHexString(),
    },

    borderBottomColor: {
      value: engine.borderBottomColor.toHexString(),
    },

    borderBottomColorHover: {
      value: engine.hover().borderBottomColor.toHexString(),
    },

    borderBottomColorActive: {
      value: engine.active().borderBottomColor.toHexString(),
    },

    borderLeftColor: {
      value: engine.borderLeftColor.toHexString(),
    },

    borderLeftColorHover: {
      value: engine.hover().borderLeftColor.toHexString(),
    },

    borderLeftColorActive: {
      value: engine.active().borderLeftColor.toHexString(),
    },

    // Border Misc

    borderWidth: {
      value: "2px",
    },

    borderRadius: {
      value: "4px",
    },

    outlineWidth: {
      value: "1px",
    },

    outlineColor: {
      value: engine.backdropContrastColor.toHexString(),
    },

    focusOutlineWidth: {
      value: engine.focusRingWidth,
    },

    focusOutlineStyle: {
      value: engine.focusOutlineStyle,
    },

    focusOutlineColor: {
      value: engine.focusOutlineColor.toHexString(),
    },

    focusRingWidth: {
      value: engine.focusRingWidth,
    },

    focusRingStyle: {
      value: engine.focusRingStyle,
    },

    focusRingColor: {
      value: engine.focusRingColor.toHexString(),
    },
  }).buildCss();
}
