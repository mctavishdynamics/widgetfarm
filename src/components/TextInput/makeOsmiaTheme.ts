import type { Osmia } from "../../theme/engines/osmia/Osmia.ts";
import { TextInputTheme } from "./TextInputTheme.ts";

export function makeOsmiaTheme(engine: Osmia) {
  return new TextInputTheme({
    // Color

    borderColor: { value: engine.colors.background.base.toHexString() },

    borderColorHover: {
      value: engine.hover().colors.background.base.toHexString(),
    },

    borderColorActive: {
      value: engine.active().colors.background.base.toHexString(),
    },

    outlineOffset: {
      value: "1px",
    },

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
      value: engine.active().colors.background.base.toHexString(),
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
      value: engine.components.raisedBox.borderWidth,
    },

    borderRadius: {
      value: engine.components.raisedBox.borderRadius,
    },

    // Outline

    outlineWidth: {
      value: engine.components.raisedBox.outlineWidth,
    },

    outlineStyle: {
      value: engine.components.raisedBox.outlineStyle,
    },

    outlineColor: {
      value: engine.components.raisedBox.outlineColor.toHexString(),
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

    focusOutlineOffset: {
      value: engine.parts.focusOutline.offset,
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

    focusRingOffset: {
      value: engine.parts.focusRing.offset,
    },
  }).buildCss();
}
