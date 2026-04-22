import { Osmia } from "../../../theme/engines/Osmia.ts";
import { ButtonTheme } from "../ButtonTheme.ts";

const engine = new Osmia({
  backdropColor: "#fff",
});

export const theme = new ButtonTheme({
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
  }
}).buildCss();
