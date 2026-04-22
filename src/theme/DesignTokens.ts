export type DesignTokens<T> = {
  [K in keyof T]: DesignToken<unknown>;
};

export interface DesignToken<T> {
  value: T;
  exportCssVariable?: boolean;
}
