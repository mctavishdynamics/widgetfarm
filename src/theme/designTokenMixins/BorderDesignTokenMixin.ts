import type { DesignToken } from "../DesignTokens.ts";

export interface BorderDesignTokenMixin {
  borderRadius: DesignToken<string>;
  borderWidth: DesignToken<string>;

  borderColor: DesignToken<string>;
  borderColorHover: DesignToken<string>;
  borderColorActive: DesignToken<string>;

  borderTopColor: DesignToken<string>;
  borderRightColor: DesignToken<string>;
  borderBottomColor: DesignToken<string>;
  borderLeftColor: DesignToken<string>;

  borderTopColorHover: DesignToken<string>;
  borderRightColorHover: DesignToken<string>;
  borderBottomColorHover: DesignToken<string>;
  borderLeftColorHover: DesignToken<string>;

  borderTopColorActive: DesignToken<string>;
  borderRightColorActive: DesignToken<string>;
  borderBottomColorActive: DesignToken<string>;
  borderLeftColorActive: DesignToken<string>;
}
