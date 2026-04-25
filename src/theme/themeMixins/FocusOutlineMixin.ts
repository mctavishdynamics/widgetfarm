import type { StyleRule } from "@vanilla-extract/css";
import type { FocusOutlineDesignTokenMixin } from "../designTokenMixins/FocusOutlineDesignTokenMixin.ts";
import type { DesignTokens } from "../DesignTokens.ts";
import { ThemeMixin } from "../ThemeMixin.ts";

export class FocusOutlineMixin<
  T extends DesignTokens<T> & FocusOutlineDesignTokenMixin,
> extends ThemeMixin<T> {
  getOutline() {
    return [
      this.token("focusOutlineWidth"),
      this.token("focusOutlineStyle"),
      this.token("focusOutlineColor"),
    ].join(" ");
  }

  getOutlineOffset() {
    return this.token("focusOutlineOffset");
  }

  withOutline(): StyleRule {
    return {
      outline: this.getOutline(),
      outlineOffset: this.getOutlineOffset(),
    };
  }
}
