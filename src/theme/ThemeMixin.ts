import type { DesignTokens } from "./DesignTokens.ts";
import { Theme } from "./Theme.ts";

export class ThemeMixin<T extends DesignTokens<T>> {
  protected _theme: Theme<T>;

  constructor(theme: Theme<T>) {
    this._theme = theme;
  }

  get theme(): Theme<T> {
    return this._theme;
  }

  token(token: keyof T) {
    return this.theme.token(token);
  }
}
