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
  getColor(args: Args = {}): string {
    const { isHover = false, isActive = false } = args;

    if (isHover) {
      return this.token("colorHover");
    } else if (isActive) {
      return this.token("colorActive");
    } else {
      return this.token("color");
    }
  }

  withColor(args: Args = {}): StyleRule {
    return { color: this.getColor(args) };
  }
}
