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
      value: engine.components.raisedBox.backgroundColor.toHexString(),
    },

    backgroundHover: {
      value: engine.hover().components.raisedBox.backgroundColor.toHexString(),
    },

    backgroundActive: {
      value: engine.active().components.raisedBox.backgroundColor.toHexString(),
    },

    // Border Colors

    borderTopColor: {
      value: engine.components.raisedBox.borderTopColor.toHexString(),
    },

    borderTopColorHover: {
      value: engine.hover().components.raisedBox.borderTopColor.toHexString(),
    },

    borderTopColorActive: {
      value: engine.active().components.raisedBox.borderTopColor.toHexString(),
    },

    borderRightColor: {
      value: engine.components.raisedBox.borderRightColor.toHexString(),
    },

    borderRightColorHover: {
      value: engine.hover().components.raisedBox.borderRightColor.toHexString(),
    },

    borderRightColorActive: {
      value: engine
        .active()
        .components.raisedBox.borderRightColor.toHexString(),
    },

    borderBottomColor: {
      value: engine.components.raisedBox.borderBottomColor.toHexString(),
    },

    borderBottomColorHover: {
      value: engine
        .hover()
        .components.raisedBox.borderBottomColor.toHexString(),
    },

    borderBottomColorActive: {
      value: engine
        .active()
        .components.raisedBox.borderBottomColor.toHexString(),
    },

    borderLeftColor: {
      value: engine.components.raisedBox.borderLeftColor.toHexString(),
    },

    borderLeftColorHover: {
      value: engine.hover().components.raisedBox.borderLeftColor.toHexString(),
    },

    borderLeftColorActive: {
      value: engine.active().components.raisedBox.borderLeftColor.toHexString(),
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
      value: engine.colors.backdropContrast.base.toHexString(),
    },

    focusOutlineWidth: {
      value: engine.parts.focusOutline.width,
    },

    focusOutlineStyle: {
      value: engine.parts.focusOutline.style,
    },

    focusOutlineColor: {
      value: engine.parts.focusOutline.color.toHexString(),
    },

    focusRingWidth: {
      value: engine.parts.focusRing.width,
    },

    focusRingStyle: {
      value: engine.parts.focusRing.style,
    },

    focusRingColor: {
      value: engine.parts.focusRing.color.toHexString(),
    },

    boxShadow: {
      value: engine.components.raisedBox.boxShadow,
    },
  }).buildCss();
}
