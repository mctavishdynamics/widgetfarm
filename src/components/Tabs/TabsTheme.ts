import { type StyleRule, style } from "@vanilla-extract/css";
import type { BackgroundDesignTokenMixin } from "../../theme/designTokenMixins/BackgroundDesignTokenMixin.ts";
import type { BorderDesignTokenMixin } from "../../theme/designTokenMixins/BorderDesignTokenMixin.ts";
import type { ColorDesignTokenMixin } from "../../theme/designTokenMixins/ColorDesignTokenMixin.ts";
import type { FocusOutlineDesignTokenMixin } from "../../theme/designTokenMixins/FocusOutlineDesignTokenMixin.ts";
import type { FocusRingDesignTokenMixin } from "../../theme/designTokenMixins/FocusRingDesignTokenMixin.ts";
import type { OutlineDesignTokenMixin } from "../../theme/designTokenMixins/OutlineDesignTokenMixin.ts";
import type { PaddingDesignTokenMixin } from "../../theme/designTokenMixins/PaddingDesignTokenMixin.ts";
import type { TypographyDesignTokenMixin } from "../../theme/designTokenMixins/TypographyDesignTokenMixin.ts";
import type { DesignToken } from "../../theme/DesignTokens.ts";
import { Theme } from "../../theme/Theme.ts";
import { BackgroundMixin } from "../../theme/themeMixins/BackgroundMixin.ts";
import { BorderMixin } from "../../theme/themeMixins/BorderMixin.ts";
import { ColorMixin } from "../../theme/themeMixins/ColorMixin.ts";
import { FocusOutlineMixin } from "../../theme/themeMixins/FocusOutlineMixin.ts";
import { FocusRingMixin } from "../../theme/themeMixins/FocusRingMixin.ts";
import { OutlineMixin } from "../../theme/themeMixins/OutlineMixin.ts";
import { PaddingMixin } from "../../theme/themeMixins/PaddingMixin.ts";
import { TypographyMixin } from "../../theme/themeMixins/TypographyMixin.ts";
import { DATA_SCOPE } from "./Tabs.tsx";

export interface MixinArgs {
  isSelected?: boolean;
  isHover?: boolean;
  isActive?: boolean;
}

////////////////////////////////////////////////////////////////////////////////
// Theme Variables

export interface TabsDesignTokens
  extends
    ColorDesignTokenMixin,
    BackgroundDesignTokenMixin,
    BorderDesignTokenMixin,
    OutlineDesignTokenMixin,
    PaddingDesignTokenMixin,
    FocusOutlineDesignTokenMixin,
    FocusRingDesignTokenMixin,
    TypographyDesignTokenMixin {
  backgroundSelected: DesignToken<string>;

  borderTopColorSelected: DesignToken<string>;
  borderRightColorSelected: DesignToken<string>;
  borderBottomColorSelected: DesignToken<string>;
  borderLeftColorSelected: DesignToken<string>;

  contentBackground: DesignToken<string>;
  contentBackgroundHover: DesignToken<string>;
  contentBackgroundActive: DesignToken<string>;

  contentBorderColor?: DesignToken<string>;
  contentBorderColorHover?: DesignToken<string>;
  contentBorderColorActive?: DesignToken<string>;

  contentBorderTopColor?: DesignToken<string>;
  contentBorderRightColor?: DesignToken<string>;
  contentBorderBottomColor?: DesignToken<string>;
  contentBorderLeftColor?: DesignToken<string>;

  boxShadow: DesignToken<string>;
}

export class TabsTheme extends Theme<TabsDesignTokens> {
  dataScope = DATA_SCOPE;

  colorMixin = new ColorMixin(this);
  backgroundMixin = new BackgroundMixin(this);
  borderMixin = new BorderMixin(this);
  outlineMixin = new OutlineMixin(this);
  paddingMixin = new PaddingMixin(this);
  focusRingMixin = new FocusRingMixin(this);
  focusOutlineMixin = new FocusOutlineMixin(this);
  typographyMixin = new TypographyMixin(this);

  withBackgroundColor(args: MixinArgs = {}): StyleRule {
    const { isSelected = false } = args;

    if (isSelected) {
      return { background: this.token("backgroundSelected") };
    } else {
      return this.backgroundMixin.withBackground(args);
    }
  }

  withBorder(args: MixinArgs = {}): StyleRule {
    const { isSelected = false } = args;

    if (isSelected) {
      return {
        borderTop: `${this.token("borderWidth")} solid ${this.token("borderTopColorSelected")}`,
        borderRight: `${this.token("borderWidth")} solid ${this.token("borderRightColorSelected")}`,
        borderBottom: `${this.token("borderWidth")} solid ${this.token("borderBottomColorSelected")}`,
        borderLeft: `${this.token("borderWidth")} solid ${this.token("borderLeftColorSelected")}`,
      };
    } else {
      return this.borderMixin.withBorder(args);
    }
  }

  withTab(args: MixinArgs = {}): StyleRule {
    return {
      ...this.colorMixin.withColor(args),
      ...this.withBorder(args),
      ...this.withBackgroundColor(args),
      ...this.outlineMixin.withOutline(),
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
        ...this.typographyMixin.withTypography(),
        ...this.paddingMixin.withPadding(),
      },

      [this.scopedSelector.dataPart("trigger").selected().build()]: {
        ...this.withTab({ isSelected: true }),
      },

      [this.scopedSelector.dataPart("trigger").focusVisible.build()]: {
        position: "relative",
        zIndex: 1000,

        ...this.focusOutlineMixin.withOutline(),

        [this.scopedSelector.dataPart("label").build()]: {
          ...this.focusRingMixin.withOutline(),
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
