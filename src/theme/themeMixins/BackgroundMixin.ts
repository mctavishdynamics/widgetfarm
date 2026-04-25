import type { StyleRule } from "@vanilla-extract/css";
import type { BackgroundDesignTokenMixin } from "../designTokenMixins/BackgroundDesignTokenMixin.ts";
import type { DesignTokens } from "../DesignTokens.ts";
import { ThemeMixin } from "../ThemeMixin.ts";

export interface Args {
  isHover?: boolean;
  isActive?: boolean;
}

export class BackgroundMixin<
  T extends DesignTokens<T> & BackgroundDesignTokenMixin,
> extends ThemeMixin<T> {
  withBackground(args: Args = {}): StyleRule {
    const { isHover = false, isActive = false } = args;

    if (isHover) {
      return { background: this.token("backgroundHover") };
    } else if (isActive) {
      return { background: this.token("backgroundActive") };
    } else {
      return { background: this.token("background") };
    }
  }
}
