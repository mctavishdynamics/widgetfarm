import type { StyleRule } from "@vanilla-extract/css";
import type { TypographyDesignTokenMixin } from "../designTokenMixins/TypographyDesignTokenMixin.ts";
import type { DesignTokens } from "../DesignTokens.ts";
import { ThemeMixin } from "../ThemeMixin.ts";

export class TypographyMixin<
  T extends DesignTokens<T> & TypographyDesignTokenMixin,
> extends ThemeMixin<T> {
  getFontFamily(): string {
    return this.token("fontFamily");
  }

  getFontVariationSettings(): string | null {
    return this.token("fontVariationSettings");
  }

  withTypography(): StyleRule {
    const rule: StyleRule = {
      fontFamily: this.getFontFamily(),
    };

    const fontVariationSettings = this.getFontVariationSettings();
    if (fontVariationSettings) {
      rule.fontVariationSettings = fontVariationSettings;
    }

    return rule;
  }
}
