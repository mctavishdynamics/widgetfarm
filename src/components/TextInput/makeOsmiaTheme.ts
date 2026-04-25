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
      value: engine.components.insetBox.outlineOffset,
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
      value: engine.components.insetBox.borderTopColor.toHexString(),
    },

    borderTopColorHover: {
      value: engine.hover().components.insetBox.borderTopColor.toHexString(),
    },

    borderTopColorActive: {
      value: engine.active().components.insetBox.borderTopColor.toHexString(),
    },

    borderRightColor: {
      value: engine.components.insetBox.borderRightColor.toHexString(),
    },

    borderRightColorHover: {
      value: engine.hover().components.insetBox.borderRightColor.toHexString(),
    },

    borderRightColorActive: {
      value: engine.active().components.insetBox.borderRightColor.toHexString(),
    },

    borderBottomColor: {
      value: engine.components.insetBox.borderBottomColor.toHexString(),
    },

    borderBottomColorHover: {
      value: engine.hover().components.insetBox.borderBottomColor.toHexString(),
    },

    borderBottomColorActive: {
      value: engine
        .active()
        .components.insetBox.borderBottomColor.toHexString(),
    },

    borderLeftColor: {
      value: engine.components.insetBox.borderLeftColor.toHexString(),
    },

    borderLeftColorHover: {
      value: engine.hover().components.insetBox.borderLeftColor.toHexString(),
    },

    borderLeftColorActive: {
      value: engine.active().components.insetBox.borderLeftColor.toHexString(),
    },

    // Border Misc

    borderWidth: {
      value: engine.components.insetBox.borderWidth,
    },

    borderRadius: {
      value: engine.components.insetBox.borderRadius,
    },

    // Outline

    outlineWidth: {
      value: engine.components.insetBox.outlineWidth,
    },

    outlineStyle: {
      value: engine.components.insetBox.outlineStyle,
    },

    outlineColor: {
      value: engine.components.insetBox.outlineColor.toHexString(),
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
