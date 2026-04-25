import type { Osmia } from "../../theme/engines/osmia/Osmia.ts";
import { TextInputTheme } from "./TextInputTheme.ts";

export function makeTheme(engine: Osmia) {
  return new TextInputTheme({
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
      value: engine.colors.background.base.toHexString(),
    },

    backgroundHover: {
      value: engine.colors.background.base.toHexString(),
    },

    backgroundActive: {
      value: engine.active().colors.backgroundColor.base.toHexString(),
    },

    // Border Colors

    borderTopColor: {
      value: engine.borderDiffuseColor.toHexString(),
    },

    borderTopColorHover: {
      value: engine.hover().borderSpecularColor.toHexString(),
    },

    borderTopColorActive: {
      value: engine.active().borderSpecularColor.toHexString(),
    },

    borderRightColor: {
      value: engine.borderSpecularColor.toHexString(),
    },

    borderRightColorHover: {
      value: engine.hover().borderDiffuseColor.toHexString(),
    },

    borderRightColorActive: {
      value: engine.active().borderDiffuseColor.toHexString(),
    },

    borderBottomColor: {
      value: engine.borderSpecularColor.toHexString(),
    },

    borderBottomColorHover: {
      value: engine.hover().borderSpecularColor.toHexString(),
    },

    borderBottomColorActive: {
      value: engine.active().borderSpecularColor.toHexString(),
    },

    borderLeftColor: {
      value: engine.borderDiffuseColor.toHexString(),
    },

    borderLeftColorHover: {
      value: engine.hover().borderSpecularColor.toHexString(),
    },

    borderLeftColorActive: {
      value: engine.active().borderDiffuseColor.toHexString(),
    },

    // Border Misc

    borderWidth: {
      value: "2px",
    },

    borderRadius: {
      value: "4px",
    },

    // Outline

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
