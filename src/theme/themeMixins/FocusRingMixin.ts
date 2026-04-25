import type { StyleRule } from "@vanilla-extract/css";
import type { FocusRingDesignTokenMixin } from "../designTokenMixins/FocusRingDesignTokenMixin.ts";
import type { DesignTokens } from "../DesignTokens.ts";
import { ThemeMixin } from "../ThemeMixin.ts";

export class FocusRingMixin<
  T extends DesignTokens<T> & FocusRingDesignTokenMixin,
> extends ThemeMixin<T> {
  getOutline() {
    return [
      this.token("focusRingWidth"),
      this.token("focusRingStyle"),
      this.token("focusRingColor"),
    ].join(" ");
  }

  getOutlineOffset() {
    return this.token("focusRingOffset");
  }

  withOutline(): StyleRule {
    return {
      outline: this.getOutline(),
      outlineOffset: this.getOutlineOffset(),
    };
  }
}
