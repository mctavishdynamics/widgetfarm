import type { DesignToken } from "../DesignTokens.ts";

export interface ColorDesignTokenMixin {
  color: DesignToken<string>;
  colorHover: DesignToken<string>;
  colorActive: DesignToken<string>;
}
