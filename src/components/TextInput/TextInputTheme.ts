import { style } from "@vanilla-extract/css";
import type { BackgroundDesignTokenMixin } from "../../theme/designTokenMixins/BackgroundDesignTokenMixin.ts";
import type { BorderDesignTokenMixin } from "../../theme/designTokenMixins/BorderDesignTokenMixin.ts";
import type { ColorDesignTokenMixin } from "../../theme/designTokenMixins/ColorDesignTokenMixin.ts";
import type { FocusOutlineDesignTokenMixin } from "../../theme/designTokenMixins/FocusOutlineDesignTokenMixin.ts";
import type { FocusRingDesignTokenMixin } from "../../theme/designTokenMixins/FocusRingDesignTokenMixin.ts";
import type { OutlineDesignTokenMixin } from "../../theme/designTokenMixins/OutlineDesignTokenMixin.ts";
import type { PaddingDesignTokenMixin } from "../../theme/designTokenMixins/PaddingDesignTokenMixin.ts";
import { Theme } from "../../theme/Theme.ts";
import { BackgroundMixin } from "../../theme/themeMixins/BackgroundMixin.ts";
import { BorderMixin } from "../../theme/themeMixins/BorderMixin.ts";
import { ColorMixin } from "../../theme/themeMixins/ColorMixin.ts";
import { FocusOutlineMixin } from "../../theme/themeMixins/FocusOutlineMixin.ts";
import { FocusRingMixin } from "../../theme/themeMixins/FocusRingMixin.ts";
import { OutlineMixin } from "../../theme/themeMixins/OutlineMixin.ts";
import { PaddingMixin } from "../../theme/themeMixins/PaddingMixin.ts";
import { DATA_SCOPE } from "./TextInput.tsx";

export interface MixinArgs {
  isHover?: boolean;
  isActive?: boolean;
}

////////////////////////////////////////////////////////////////////////////////
// Theme Variables

export interface TextInputDesignTokens
  extends
    ColorDesignTokenMixin,
    BackgroundDesignTokenMixin,
    BorderDesignTokenMixin,
    OutlineDesignTokenMixin,
    PaddingDesignTokenMixin,
    FocusOutlineDesignTokenMixin,
    FocusRingDesignTokenMixin {}

export class TextInputTheme extends Theme<TextInputDesignTokens> {
  dataScope = DATA_SCOPE;

  backgroundMixin = new BackgroundMixin(this);
  borderMixin = new BorderMixin(this);
  colorMixin = new ColorMixin(this);
  focusOutlineMixin = new FocusOutlineMixin(this);
  focusRingMixin = new FocusRingMixin(this);
  outlineMixin = new OutlineMixin(this);
  paddingMixin = new PaddingMixin(this);

  buildCss() {
    return style({
      vars: this.designTokenManager.asCssVariables(),

      // ROOT
      [this.scopedSelector.dataPart("root").parent.build()]: {
        display: "inline-flex",
        flexDirection: "column",
        flex: 1,
        gap: "8px",
      },

      // LABEL
      [this.scopedSelector.dataPart("label").build()]: {
        textOverflow: "ellipsis",
        overflow: "hidden",

        ...this.colorMixin.withColor(),
      },

      // CONTROL
      [this.scopedSelector.dataPart("control").build()]: {
        position: "relative",
        display: "flex",

        height: "32px",

        outline: `1px solid ${this.token("outlineColor")}`,
        outlineOffset: 0,

        background: this.token("outlineColor"),
        borderRadius: "3px",
      },

      // INPUT
      [this.scopedSelector.dataPart("input").build()]: {
        all: "unset",

        display: "flex",
        flex: 1,
        width: "100%",
        position: "relative",
        zIndex: 0,

        ...this.colorMixin.withColor(),
        ...this.backgroundMixin.withBackground(),

        borderTop: `${this.token("borderWidth")} solid ${this.token("borderTopColor")}`,
        borderRight: `${this.token("borderWidth")} solid ${this.token("borderRightColor")}`,
        borderBottom: `${this.token("borderWidth")} solid ${this.token("borderBottomColor")}`,
        borderLeft: `${this.token("borderWidth")} solid ${this.token("borderLeftColor")}`,

        borderRadius: "4px",
        padding: "8px",
      },

      [this.scopedSelector.dataPart("input").hover.build()]: {
        ...this.backgroundMixin.withBackground({ isHover: true }),
      },

      [this.scopedSelector.dataPart("input").active.build()]: {
        ...this.backgroundMixin.withBackground({ isActive: true }),
      },
    });
  }
}
