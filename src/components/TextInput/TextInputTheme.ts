import { type ComplexStyleRule, style } from "@vanilla-extract/css";
import type { DesignToken } from "../../theme/DesignTokens.ts";
import { Theme } from "../../theme/Theme.ts";
import { DATA_SCOPE } from "./TextInput.tsx";

export interface MixinArgs {
  state?: "default" | "hover" | "active";
}

////////////////////////////////////////////////////////////////////////////////
// Theme Variables

export interface TextInputDesignTokens {
  color: DesignToken<string>;
  colorHover: DesignToken<string>;
  colorActive: DesignToken<string>;

  background: DesignToken<string>;
  backgroundHover: DesignToken<string>;
  backgroundActive: DesignToken<string>;

  borderColor?: DesignToken<string>;
  borderColorHover?: DesignToken<string>;
  borderColorActive?: DesignToken<string>;

  borderTopColor?: DesignToken<string>;
  borderRightColor?: DesignToken<string>;
  borderBottomColor?: DesignToken<string>;
  borderLeftColor?: DesignToken<string>;

  borderTopColorHover?: DesignToken<string>;
  borderRightColorHover?: DesignToken<string>;
  borderBottomColorHover?: DesignToken<string>;
  borderLeftColorHover?: DesignToken<string>;

  borderTopColorActive?: DesignToken<string>;
  borderRightColorActive?: DesignToken<string>;
  borderBottomColorActive?: DesignToken<string>;
  borderLeftColorActive?: DesignToken<string>;

  borderRadius: DesignToken<string>;
  borderWidth: DesignToken<string>;

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
}

export class TextInputTheme extends Theme<TextInputDesignTokens> {
  dataScope = DATA_SCOPE;

  color(args: MixinArgs = {}): ComplexStyleRule {
    const { state } = args;

    switch (state) {
      case "hover":
        return { color: this.token("colorHover") };
      case "active":
        return { color: this.token("colorActive") };
      default:
        return { color: this.token("color") };
    }
  }

  background(args: MixinArgs = {}): ComplexStyleRule {
    const { state } = args;

    switch (state) {
      case "hover":
        return { background: this.token("backgroundHover") };
      case "active":
        return { background: this.token("backgroundActive") };
      default:
        return { background: this.token("background") };
    }
  }

  border(args: MixinArgs = {}): ComplexStyleRule {
    let topColor = this.token("borderTopColor");
    let rightColor = this.token("borderRightColor");
    let bottomColor = this.token("borderBottomColor");
    let leftColor = this.token("borderLeftColor");

    switch (args.state) {
      case "hover":
        topColor = this.token("borderTopColorHover");
        rightColor = this.token("borderRightColorHover");
        bottomColor = this.token("borderBottomColorHover");
        leftColor = this.token("borderLeftColorHover");
        break;
      case "active":
        topColor = this.token("borderTopColorActive");
        rightColor = this.token("borderRightColorActive");
        bottomColor = this.token("borderBottomColorActive");
        leftColor = this.token("borderLeftColorActive");
        break;
      default:
        break;
    }

    return {
      borderRadius: this.token("borderRadius"),
      borderTop: `${this.token("borderWidth")} solid ${topColor}`,
      borderRight: `${this.token("borderWidth")} solid ${rightColor}`,
      borderBottom: `${this.token("borderWidth")} solid ${bottomColor}`,
      borderLeft: `${this.token("borderWidth")} solid ${leftColor}`,
    };
  }

  boxShadow(_args: MixinArgs = {}): ComplexStyleRule {
    return { boxShadow: "0 1px 1px rgba(0, 0, 0, 0.1)" };
  }

  boxModel(_args: MixinArgs = {}): ComplexStyleRule {
    return {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "4px",
      padding: [
        this.token("paddingTop"),
        this.token("paddingRight"),
        this.token("paddingBottom"),
        this.token("paddingLeft"),
      ].join(" "),
    };
  }

  svg(_args: MixinArgs = {}): ComplexStyleRule {
    return {
      [this.scopedSelector.parent.has("svg").build()]: {
        padding: [
          this.token("paddingTop"),
          this.token("paddingRight"),
          this.token("paddingBottom"),
          this.token("paddingLeft"),
        ].join(" "),

        fontFamily: "sans-serif",
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
        display: "inline-flex",
        flexDirection: "column",
        flex: 1,
        gap: "8px",
      },

      // LABEL
      [this.scopedSelector.dataPart("label").build()]: {
        textOverflow: "ellipsis",
        overflow: "hidden",

        ...this.color(),
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

        ...this.color(),
        ...this.background(),

        borderTop: `${this.token("borderWidth")} solid ${this.token("borderTopColor")}`,
        borderRight: `${this.token("borderWidth")} solid ${this.token("borderRightColor")}`,
        borderBottom: `${this.token("borderWidth")} solid ${this.token("borderBottomColor")}`,
        borderLeft: `${this.token("borderWidth")} solid ${this.token("borderLeftColor")}`,

        borderRadius: "4px",
        padding: "8px",
      },

      [this.scopedSelector.dataPart("input").hover.build()]: {
        ...this.background({ state: "hover" }),
      },

      [this.scopedSelector.dataPart("input").active.build()]: {
        ...this.background({ state: "active" }),
      },
    });
  }
}
