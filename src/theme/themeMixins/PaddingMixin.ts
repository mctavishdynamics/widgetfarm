import type { StyleRule } from "@vanilla-extract/css";
import type { PaddingDesignTokenMixin } from "../designTokenMixins/PaddingDesignTokenMixin.ts";
import type { DesignTokens } from "../DesignTokens.ts";
import { ThemeMixin } from "../ThemeMixin.ts";

export class PaddingMixin<
  T extends DesignTokens<T> & PaddingDesignTokenMixin,
> extends ThemeMixin<T> {
  withPadding(): StyleRule {
    return {
      padding: [
        this.token("paddingTop"),
        this.token("paddingRight"),
        this.token("paddingBottom"),
        this.token("paddingLeft"),
      ].join(" "),
    };
  }
}
