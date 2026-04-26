import type { DesignToken } from "../DesignTokens.ts";

export interface TypographyDesignTokenMixin {
  fontFamily: DesignToken<string>;
  fontVariationSettings: DesignToken<string>;
}
