import type { DesignToken } from "../DesignTokens.ts";

export interface FocusOutlineDesignTokenMixin {
  focusOutlineWidth: DesignToken<string>;
  focusOutlineStyle: DesignToken<string>;
  focusOutlineColor: DesignToken<string>;
  focusOutlineOffset: DesignToken<string>;
}
