import type { Osmia } from "../../theme/engines/osmia/Osmia.ts";
import { TabsTheme } from "./TabsTheme.ts";

const TAB_PADDING_X = "16px";
const TAB_PADDING_Y = "8px";

export function makeTheme(engine: Osmia) {
  console.log(engine.hover().backgroundColor.toHexString());

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
      value: engine.raisedBox.backgroundColor.toHexString(),
    },

    backgroundHover: {
      // value: engine.debug("Something").hover().raisedBox.backgroundColor.toHexString(),
      value: engine.hover().backgroundColor.toHexString(),
    },

    backgroundActive: {
      value: engine.active().raisedBox.backgroundColor.toHexString(),
    },

    backgroundSelected: {
      value: engine.raisedBox.depressed().backgroundColor.toHexString(),
    },

    contentBackground: {
      value: engine.backgroundColor.toHexString(),
    },

    contentBackgroundHover: {
      value: engine.hover().backgroundColor.toHexString(),
    },

    contentBackgroundActive: {
      value: engine.active().backgroundColor.toHexString(),
    },

    ////////////////////////////////////////////////////////////////////////////
    // BORDER

    borderTopColor: {
      value: engine.raisedBox.borderTopColor.toHexString(),
    },

    borderTopColorHover: {
      value: engine.hover().raisedBox.borderTopColor.toHexString(),
    },

    borderTopColorActive: {
      value: engine.active().raisedBox.borderTopColor.toHexString(),
    },

    borderTopColorSelected: {
      value: engine.raisedBox.depressed().borderTopColor.toHexString(),
    },

    borderRightColor: {
      value: engine.raisedBox.borderRightColor.toHexString(),
    },

    borderRightColorHover: {
      value: engine.hover().raisedBox.borderRightColor.toHexString(),
    },

    borderRightColorActive: {
      value: engine.active().raisedBox.borderRightColor.toHexString(),
    },

    borderRightColorSelected: {
      value: engine.raisedBox.depressed().borderRightColor.toHexString(),
    },

    borderBottomColor: {
      value: engine.raisedBox.borderBottomColor.toHexString(),
    },

    borderBottomColorHover: {
      value: engine.hover().raisedBox.borderBottomColor.toHexString(),
    },

    borderBottomColorActive: {
      value: engine.active().raisedBox.borderBottomColor.toHexString(),
    },

    borderBottomColorSelected: {
      value: engine.raisedBox.depressed().borderBottomColor.toHexString(),
    },

    borderLeftColor: {
      value: engine.raisedBox.borderLeftColor.toHexString(),
    },

    borderLeftColorHover: {
      value: engine.hover().raisedBox.borderLeftColor.toHexString(),
    },

    borderLeftColorActive: {
      value: engine.active().raisedBox.borderLeftColor.toHexString(),
    },

    borderLeftColorSelected: {
      value: engine.raisedBox.depressed().borderLeftColor.toHexString(),
    },

    // Border Misc

    borderWidth: {
      value: engine.raisedBox.borderWidth,
    },

    borderRadius: {
      value: engine.raisedBox.borderRadius,
    },

    outlineWidth: {
      value: engine.raisedBox.outlineWidth,
    },

    outlineColor: {
      value: engine.raisedBox.outlineColor.toHexString(),
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
