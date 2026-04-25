import type { StyleRule } from "@vanilla-extract/css";
import type { ColorDesignTokenMixin } from "../designTokenMixins/ColorDesignTokenMixin.ts";
import type { DesignTokens } from "../DesignTokens.ts";
import { ThemeMixin } from "../ThemeMixin.ts";

interface Args {
  isHover?: boolean;
  isActive?: boolean;
}

export class ColorMixin<
  T extends DesignTokens<T> & ColorDesignTokenMixin,
> extends ThemeMixin<T> {
  withColor(args: Args = {}): StyleRule {
    const { isHover = false, isActive = false } = args;

    if (isHover) {
      return { color: this.token("colorHover") };
    } else if (isActive) {
      return { color: this.token("colorActive") };
    } else {
      return { color: this.token("color") };
    }
  }
}
