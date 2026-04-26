import type { Osmia } from "../../theme/engines/osmia/Osmia.ts";
import { ButtonTheme } from "./ButtonTheme.ts";

const BUTTON_PADDING_X = "10px";
const BUTTON_PADDING_Y = "6px";

export function makeOsmiaTheme(engine: Osmia) {
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
      value: BUTTON_PADDING_Y,
    },

    paddingRight: {
      value: BUTTON_PADDING_X,
    },

    paddingBottom: {
      value: BUTTON_PADDING_Y,
    },

    paddingLeft: {
      value: BUTTON_PADDING_X,
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
      value: engine.components.raisedBox.borderWidth,
    },

    borderRadius: {
      value: engine.components.raisedBox.borderRadius,
    },

    outlineWidth: {
      value: engine.components.raisedBox.outlineWidth,
    },

    outlineStyle: {
      value: engine.components.raisedBox.outlineStyle,
    },

    outlineColor: {
      value: engine.components.raisedBox.outlineColor.toHexString(),
    },

    outlineOffset: {
      value: engine.components.raisedBox.outlineOffset,
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

    boxShadow: {
      value: engine.components.raisedBox.boxShadow,
    },

    fontFamily: {
      value: "IBM Plex Sans Variable, sans-serif",
    },

    fontVariationSettings: {
      value: '"wdth" 75',
    },
  }).buildCss();
}
