import type { Osmia } from "../../theme/engines/osmia/Osmia.ts";
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
      value: engine.borderSpecularColor.toHexString(),
    },

    borderTopColorHover: {
      value: engine.hover().borderSpecularColor.toHexString(),
    },

    borderTopColorActive: {
      value: engine.active().borderSpecularColor.toHexString(),
    },

    borderRightColor: {
      value: engine.borderDiffuseColor.toHexString(),
    },

    borderRightColorHover: {
      value: engine.hover().borderDiffuseColor.toHexString(),
    },

    borderRightColorActive: {
      value: engine.active().borderDiffuseColor.toHexString(),
    },

    borderBottomColor: {
      value: engine.borderDiffuseColor.toHexString(),
    },

    borderBottomColorHover: {
      value: engine.hover().borderDiffuseColor.toHexString(),
    },

    borderBottomColorActive: {
      value: engine.active().borderDiffuseColor.toHexString(),
    },

    borderLeftColor: {
      value: engine.borderSpecularColor.toHexString(),
    },

    borderLeftColorHover: {
      value: engine.hover().borderSpecularColor.toHexString(),
    },

    borderLeftColorActive: {
      value: engine.active().borderSpecularColor.toHexString(),
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
