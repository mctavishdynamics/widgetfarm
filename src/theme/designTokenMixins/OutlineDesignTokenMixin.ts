import type { DesignToken } from "../DesignTokens.ts";

export interface OutlineDesignTokenMixin {
  outlineWidth: DesignToken<string>;
  outlineStyle: DesignToken<string>;
  outlineColor: DesignToken<string>;
  outlineOffset: DesignToken<string>;
}
