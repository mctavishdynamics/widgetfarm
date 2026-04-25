import type { StyleRule } from "@vanilla-extract/css";
import type { BorderDesignTokenMixin } from "../designTokenMixins/BorderDesignTokenMixin.ts";
import type { DesignTokens } from "../DesignTokens.ts";
import { ThemeMixin } from "../ThemeMixin.ts";

interface Args {
  isHover?: boolean;
  isActive?: boolean;
}

export class BorderMixin<
  T extends DesignTokens<T> & BorderDesignTokenMixin,
> extends ThemeMixin<T> {
  withBorder(args: Args = {}): StyleRule {
    const { isHover = false, isActive = false } = args;

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

  withBorderRadius(): StyleRule {
    return { borderRadius: this.token("borderRadius") };
  }
}
