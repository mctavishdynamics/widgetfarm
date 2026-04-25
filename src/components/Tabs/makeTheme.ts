import type { Osmia } from "../../theme/engines/osmia/Osmia.ts";
import { TabsTheme } from "./TabsTheme.ts";

const TAB_PADDING_X = "16px";
const TAB_PADDING_Y = "8px";

export function makeTheme(engine: Osmia) {
  return new TabsTheme({
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
      value: TAB_PADDING_Y,
    },

    paddingRight: {
      value: TAB_PADDING_X,
    },

    paddingBottom: {
      value: TAB_PADDING_Y,
    },

    paddingLeft: {
      value: TAB_PADDING_X,
    },

    ////////////////////////////////////////////////////////////////////////////
    // BACKGROUND

    background: {
      value: engine.components.raisedBox.backgroundColor.toHexString(),
    },

    backgroundHover: {
      value: engine.hover().colors.background.base.toHexString(),
    },

    backgroundActive: {
      value: engine.active().components.raisedBox.backgroundColor.toHexString(),
    },

    backgroundSelected: {
      value: engine.components.raisedBox
        .depressed()
        .backgroundColor.toHexString(),
    },

    contentBackground: {
      value: engine.colors.background.base.toHexString(),
    },

    contentBackgroundHover: {
      value: engine.hover().colors.background.base.toHexString(),
    },

    contentBackgroundActive: {
      value: engine.active().colors.background.base.toHexString(),
    },

    ////////////////////////////////////////////////////////////////////////////
    // BORDER

    borderTopColor: {
      value: engine.components.raisedBox.borderTopColor.toHexString(),
    },

    borderTopColorHover: {
      value: engine.hover().components.raisedBox.borderTopColor.toHexString(),
    },

    borderTopColorActive: {
      value: engine.active().components.raisedBox.borderTopColor.toHexString(),
    },

    borderTopColorSelected: {
      value: engine.components.raisedBox
        .depressed()
        .borderTopColor.toHexString(),
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

    borderRightColorSelected: {
      value: engine.components.raisedBox
        .depressed()
        .borderRightColor.toHexString(),
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

    borderBottomColorSelected: {
      value: engine.components.raisedBox
        .depressed()
        .borderBottomColor.toHexString(),
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

    borderLeftColorSelected: {
      value: engine.components.raisedBox
        .depressed()
        .borderLeftColor.toHexString(),
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

    outlineColor: {
      value: engine.components.raisedBox.outlineColor.toHexString(),
    },

    focusOutlineWidth: {
      value: engine.parts.outline.width,
    },

    focusOutlineStyle: {
      value: engine.parts.focusRing.style,
    },

    focusOutlineColor: {
      value: engine.parts.focusRing.color.toHexString(),
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

    focusRingOffset: { value: engine.parts.focusRing.offset },

    boxShadow: {
      value: engine.components.raisedBox.boxShadow,
    },
  }).buildCss();
}
