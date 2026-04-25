import type { DesignToken } from "../DesignTokens.ts";

export interface FocusRingDesignTokenMixin {
  focusRingWidth: DesignToken<string>;
  focusRingStyle: DesignToken<string>;
  focusRingColor: DesignToken<string>;
  focusRingOffset: DesignToken<string>;
}
