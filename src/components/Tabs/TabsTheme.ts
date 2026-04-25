import { type StyleRule, style } from "@vanilla-extract/css";
import type { DesignToken } from "../../theme/DesignTokens.ts";
import { Theme } from "../../theme/Theme.ts";
import { DATA_SCOPE } from "./Tabs.tsx";

export interface MixinArgs {
  isSelected?: boolean;
  isHover?: boolean;
  isActive?: boolean;
}

////////////////////////////////////////////////////////////////////////////////
// Theme Variables

export interface TabsDesignTokens {
  //////////////////////////////////////////////////////////////////////////////
  // TEXT

  color: DesignToken<string>;
  colorHover: DesignToken<string>;
  colorActive: DesignToken<string>;

  //////////////////////////////////////////////////////////////////////////////
  // BACKGROUND

  background: DesignToken<string>;
  backgroundHover: DesignToken<string>;
  backgroundActive: DesignToken<string>;
  backgroundSelected: DesignToken<string>;

  contentBackground: DesignToken<string>;
  contentBackgroundHover: DesignToken<string>;
  contentBackgroundActive: DesignToken<string>;

  //////////////////////////////////////////////////////////////////////////////
  // BORDER

  borderRadius: DesignToken<string>;
  borderWidth: DesignToken<string>;

  borderColor?: DesignToken<string>;
  borderColorHover?: DesignToken<string>;
  borderColorActive?: DesignToken<string>;

  contentBorderColor?: DesignToken<string>;
  contentBorderColorHover?: DesignToken<string>;
  contentBorderColorActive?: DesignToken<string>;

  borderTopColor: DesignToken<string>;
  borderRightColor: DesignToken<string>;
  borderBottomColor: DesignToken<string>;
  borderLeftColor: DesignToken<string>;

  contentBorderTopColor?: DesignToken<string>;
  contentBorderRightColor?: DesignToken<string>;
  contentBorderBottomColor?: DesignToken<string>;
  contentBorderLeftColor?: DesignToken<string>;

  borderTopColorHover?: DesignToken<string>;
  borderRightColorHover?: DesignToken<string>;
  borderBottomColorHover?: DesignToken<string>;
  borderLeftColorHover?: DesignToken<string>;

  contentBorderTopColorHover?: DesignToken<string>;
  contentBorderRightColorHover?: DesignToken<string>;
  contentBorderBottomColorHover?: DesignToken<string>;
  contentBorderLeftColorHover?: DesignToken<string>;

  borderTopColorActive?: DesignToken<string>;
  borderRightColorActive?: DesignToken<string>;
  borderBottomColorActive?: DesignToken<string>;
  borderLeftColorActive?: DesignToken<string>;

  contentBorderTopColorActive?: DesignToken<string>;
  contentBorderRightColorActive?: DesignToken<string>;
  contentBorderBottomColorActive?: DesignToken<string>;
  contentBorderLeftColorActive?: DesignToken<string>;

  borderTopColorSelected?: DesignToken<string>;
  borderRightColorSelected?: DesignToken<string>;
  borderBottomColorSelected?: DesignToken<string>;
  borderLeftColorSelected?: DesignToken<string>;

  //////////////////////////////////////////////////////////////////////////////
  // OUTLINE

  boxShadow: DesignToken<string>;

  outlineWidth: DesignToken<string>;
  outlineColor: DesignToken<string>;

  paddingTop: DesignToken<string>;
  paddingRight: DesignToken<string>;
  paddingBottom: DesignToken<string>;
  paddingLeft: DesignToken<string>;

  focusOutlineWidth: DesignToken<string>;
  focusOutlineStyle: DesignToken<string>;
  focusOutlineColor: DesignToken<string>;

  focusRingWidth: DesignToken<string>;
  focusRingStyle: DesignToken<string>;
  focusRingColor: DesignToken<string>;
  focusRingOffset: DesignToken<string>;
}

export class TabsTheme extends Theme<TabsDesignTokens> {
  dataScope = DATA_SCOPE;

  color(): StyleRule {
    return { color: this.token("color") };
  }

  withBackgroundColor(args: MixinArgs = {}): StyleRule {
    const { isSelected = false, isHover = false, isActive = false } = args;

    if (isSelected) {
      return { background: this.token("backgroundSelected") };
    } else {
      if (isHover) {
        return { background: this.token("backgroundHover") };
      } else if (isActive) {
        return { background: this.token("backgroundActive") };
      } else {
        return { background: this.token("background") };
      }
    }
  }

  withBorder(args: MixinArgs = {}): StyleRule {
    const { isSelected = false, isHover = false, isActive = false } = args;

    if (isSelected) {
      return {
        borderTop: `${this.token("borderWidth")} solid ${this.token("borderTopColorSelected")}`,
        borderRight: `${this.token("borderWidth")} solid ${this.token("borderRightColorSelected")}`,
        borderBottom: `${this.token("borderWidth")} solid ${this.token("borderBottomColorSelected")}`,
        borderLeft: `${this.token("borderWidth")} solid ${this.token("borderLeftColorSelected")}`,
      };
    } else {
      if (isHover) {
        return {
          borderTop: `${this.token("borderWidth")} solid ${this.token("borderTopColorHover")}`,
          borderRight: `${this.token("borderWidth")} solid ${this.token("borderRightColorHover")}`,
          borderBottom: `${this.token("borderWidth")} solid ${this.token("borderBottomColorHover")}`,
          borderLeft: `${this.token("borderWidth")} solid ${this.token("borderLeftColorHover")}`,
        };
      } else if (isActive) {
        return {
          borderTop: `${this.token("borderWidth")} solid ${this.token("borderTopColorActive")}`,
          borderRight: `${this.token("borderWidth")} solid ${this.token("borderRightColorActive")}`,
          borderBottom: `${this.token("borderWidth")} solid ${this.token("borderBottomColorActive")}`,
          borderLeft: `${this.token("borderWidth")} solid ${this.token("borderLeftColorActive")}`,
        };
      } else {
        return {
          borderTop: `${this.token("borderWidth")} solid ${this.token("borderTopColor")}`,
          borderRight: `${this.token("borderWidth")} solid ${this.token("borderRightColor")}`,
          borderBottom: `${this.token("borderWidth")} solid ${this.token("borderBottomColor")}`,
          borderLeft: `${this.token("borderWidth")} solid ${this.token("borderLeftColor")}`,
        };
      }
    }
  }

  outline(): StyleRule {
    return {
      outline: `${this.token("outlineWidth")} solid ${this.token("outlineColor")}`,
      outlineOffset: "-1px",
    };
  }

  withTab(args: MixinArgs = {}): StyleRule {
    return {
      ...this.withBorder(args),
      ...this.withBackgroundColor(args),
      ...this.outline(),
    };
  }

  withTabPadding(): StyleRule {
    return {
      padding: [
        this.token("paddingTop"),
        this.token("paddingRight"),
        this.token("paddingBottom"),
        this.token("paddingLeft"),
      ].join(" "),
    };
  }

  buildCss() {
    return style({
      vars: this.designTokenManager.asCssVariables(),

      // ROOT
      [this.scopedSelector.dataPart("root").parent.build()]: {
        position: "relative",
      },

      [this.scopedSelector.dataPart("list").build()]: {
        boxShadow: this.token("boxShadow"),
        borderRadius: this.token("borderRadius"),
      },

      // TRIGGER
      [this.scopedSelector.dataPart("trigger").build()]: {
        all: "unset",

        ...this.withTab(),

        ["&[data-position=first]"]: {
          borderRadius: [
            this.token("borderRadius"),
            0,
            0,
            this.token("borderRadius"),
          ].join(" "),
        },

        ["&[data-position=last]"]: {
          borderRadius: [
            0,
            this.token("borderRadius"),
            this.token("borderRadius"),
            0,
          ].join(" "),
        },
      },

      [this.scopedSelector.dataPart("label").build()]: {
        display: "flex",
        ...this.withTabPadding(),
      },

      [this.scopedSelector.dataPart("trigger").selected().build()]: {
        ...this.withTab({ isSelected: true }),
      },

      [this.scopedSelector.dataPart("trigger").focusVisible.build()]: {
        position: "relative",
        zIndex: 1000,

        outline: "2px solid black",

        [this.scopedSelector.dataPart("label").build()]: {
          outline: [
            this.token("focusRingWidth"),
            this.token("focusRingStyle"),
            this.token("focusRingColor"),
          ].join(" "),
          outlineOffset: this.token("focusRingOffset"),
        },
      },

      [this.scopedSelector.dataPart("trigger").notSelected().hover.build()]: {
        ...this.withTab({ isHover: true }),
      },

      [this.scopedSelector.dataPart("trigger").notSelected().active.build()]: {
        ...this.withTab({ isActive: true }),

        [this.scopedSelector.dataPart("label").build()]: {
          transform: "translateY(1px)",
        },
      },
    });
  }
}
