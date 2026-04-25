import type { DesignToken } from "../DesignTokens.ts";

export interface BackgroundDesignTokenMixin {
  background: DesignToken<string>;
  backgroundHover: DesignToken<string>;
  backgroundActive: DesignToken<string>;
}
