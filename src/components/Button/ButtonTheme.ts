import { style, type StyleRule } from "@vanilla-extract/css";
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
import { type ButtonState, DATA_SCOPE } from "./Button.tsx";

export interface MixinArgs {
  state?: ButtonState;
}

////////////////////////////////////////////////////////////////////////////////
// Theme Variables

export interface ButtonDesignTokens
  extends
    BackgroundDesignTokenMixin,
    BorderDesignTokenMixin,
    ColorDesignTokenMixin,
    OutlineDesignTokenMixin,
    PaddingDesignTokenMixin,
    TypographyDesignTokenMixin,
    FocusOutlineDesignTokenMixin,
    FocusRingDesignTokenMixin {
  boxShadow: DesignToken<string>;
}

export class ButtonTheme extends Theme<ButtonDesignTokens> {
  dataScope = DATA_SCOPE;

  colorMixin = new ColorMixin(this);
  backgroundMixin = new BackgroundMixin(this);
  borderMixin = new BorderMixin(this);
  paddingMixin = new PaddingMixin(this);
  outlineMixin = new OutlineMixin(this);
  typographyMixin = new TypographyMixin(this);
  focusRingMixin = new FocusRingMixin(this);
  focusOutlineMixin = new FocusOutlineMixin(this);

  boxShadow(): StyleRule {
    return { boxShadow: this.token("boxShadow") };
  }

  boxModel(_args: MixinArgs = {}): StyleRule {
    return {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "4px",
      ...this.paddingMixin.withPadding(),
    };
  }

  withSvg(_args: MixinArgs = {}): StyleRule {
    return {
      [this.scopedSelector.parent.has("svg").build()]: {
        ...this.paddingMixin.withPadding(),

        fontSize: "1rem",
        lineHeight: "1rem",
      },

      [this.scopedSelector.parent.child("svg").build()]: {
        width: "1rem",
        height: "1rem",
        opacity: "0.4",
      },
    };
  }

  buildCss() {
    return style({
      vars: this.designTokenManager.asCssVariables(),

      // ROOT
      [this.scopedSelector.dataPart("root").parent.build()]: {
        display: "flex",
        userSelect: "none",

        background: this.token("outlineColor"),
        border: this.outlineMixin.getOutline(),
        borderRadius: `calc(${this.token("borderRadius")} + ${this.token("outlineWidth")})`,

        ...this.boxShadow(),
      },

      // BUTTON
      [this.scopedSelector.dataPart("button").build()]: {
        all: "unset",

        ...this.backgroundMixin.withBackground(),
        ...this.borderMixin.withBorder(),
        ...this.borderMixin.withBorderRadius(),

        [this.scopedSelector.dataPart("children").build()]: {
          whiteSpace: "nowrap",

          ...this.typographyMixin.withTypography(),

          fontSize: "1rem",
          lineHeight: "1rem",

          ...this.colorMixin.withColor(),
          ...this.boxModel(),
          ...this.withSvg(),
        },
      },

      // HOVER STATE
      [this.scopedSelector.dataPart("button").not("[disabled]").hover.build()]:
        {
          ...this.backgroundMixin.withBackground({ isHover: true }),
          ...this.borderMixin.withBorder({ isHover: true }),

          [this.scopedSelector.dataPart("children").build()]: {
            ...this.colorMixin.withColor({ isHover: true }),
          },
        },

      // ACTIVE STATE
      [this.scopedSelector.dataPart("button").not("[disabled]").active.build()]:
        {
          ...this.backgroundMixin.withBackground({ isActive: true }),
          ...this.borderMixin.withBorder({ isActive: true }),

          [this.scopedSelector.dataPart("children").build()]: {
            transform: "translateY(1px)",
            ...this.colorMixin.withColor({ isActive: true }),
          },
        },

      [this.scopedSelector.dataPart("button").focusVisible.build()]: {
        ...this.focusOutlineMixin.withOutline(),

        [this.scopedSelector.dataPart("children").build()]: {
          ...this.focusRingMixin.withOutline(),
        },
      },
    });
  }
}
