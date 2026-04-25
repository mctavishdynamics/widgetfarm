import type { DesignToken } from "../DesignTokens.ts";

export interface PaddingDesignTokenMixin {
  paddingTop: DesignToken<string>;
  paddingRight: DesignToken<string>;
  paddingBottom: DesignToken<string>;
  paddingLeft: DesignToken<string>;
}
