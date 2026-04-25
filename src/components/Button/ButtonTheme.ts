import { style, type StyleRule } from "@vanilla-extract/css";
import type { DesignToken } from "../../theme/DesignTokens.ts";
import { Theme } from "../../theme/Theme.ts";
import { type ButtonState, DATA_SCOPE } from "./Button.tsx";

export interface MixinArgs {
  state?: ButtonState;
}

////////////////////////////////////////////////////////////////////////////////
// Theme Variables

export interface ButtonDesignTokens {
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

  boxShadow: DesignToken<string>;
}

export class ButtonTheme extends Theme<ButtonDesignTokens> {
  dataScope = DATA_SCOPE;

  color(args: MixinArgs = {}): StyleRule {
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

  background(args: MixinArgs = {}): StyleRule {
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

  border(args: MixinArgs = {}): StyleRule {
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

  boxShadow(): StyleRule {
    return { boxShadow: this.token("boxShadow") };
    // return { boxShadow: "0 1px 1px rgba(0, 0, 0, 0.1)" };
  }

  boxModel(_args: MixinArgs = {}): StyleRule {
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

  svg(_args: MixinArgs = {}): StyleRule {
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

        background: this.token("outlineColor"),
        border: `${this.token("outlineWidth")} solid ${this.token("outlineColor")}`,
        borderRadius: `calc(${this.token("borderRadius")} + ${this.token("outlineWidth")})`,

        userSelect: "none",

        ...this.boxShadow(),
      },

      // BUTTON
      [this.scopedSelector.dataPart("button").build()]: {
        all: "unset",

        ...this.background(),
        ...this.border(),

        [this.scopedSelector.dataPart("children").build()]: {
          whiteSpace: "nowrap",

          fontSize: "1rem",
          lineHeight: "1rem",

          ...this.color(),
          ...this.boxModel(),
          ...this.svg(),
        },
      },

      // HOVER STATE
      [this.scopedSelector.dataPart("button").not("[disabled]").hover.build()]:
        {
          ...this.background({ state: "hover" }),
          ...this.border({ state: "hover" }),

          [this.scopedSelector.dataPart("children").build()]: {
            ...this.color({ state: "hover" }),
          },
        },

      // ACTIVE STATE
      [this.scopedSelector.dataPart("button").not("[disabled]").active.build()]:
        {
          ...this.background({ state: "active" }),
          ...this.border({ state: "active" }),

          [this.scopedSelector.dataPart("children").build()]: {
            transform: "translateY(1px)",
            ...this.color({ state: "active" }),
          },
        },

      [this.scopedSelector.dataPart("button").focusVisible.build()]: {
        outline: "2px solid black",

        [this.scopedSelector.dataPart("children").build()]: {
          outline: "1px solid #000",
          outlineOffset: "-2px",
        },
      },
    });
  }
}
