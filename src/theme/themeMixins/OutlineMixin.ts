import type { StyleRule } from "@vanilla-extract/css";
import type { OutlineDesignTokenMixin } from "../designTokenMixins/OutlineDesignTokenMixin.ts";
import type { DesignTokens } from "../DesignTokens.ts";
import { ThemeMixin } from "../ThemeMixin.ts";

export class OutlineMixin<
  T extends DesignTokens<T> & OutlineDesignTokenMixin,
> extends ThemeMixin<T> {
  getOutline() {
    return `${this.token("outlineWidth")} solid ${this.token("outlineColor")}`;
  }

  getOutlineOffset() {
    return this.token("outlineOffset");
  }

  withOutline(): StyleRule {
    return {
      outline: this.getOutline(),
      outlineOffset: this.getOutlineOffset(),
    };
  }
}
