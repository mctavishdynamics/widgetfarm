import { CssSelectorBuilder } from "./CssSelectorBuilder.ts";
import { DesignTokenManager } from "./DesignTokenManager.ts";
import type { DesignTokens } from "./DesignTokens.ts";

export abstract class Theme<T extends DesignTokens<T>> {
  protected _tokens: T;
  protected _designTokenManager?: DesignTokenManager<T>;
  abstract dataScope: string;

  constructor(tokens: T) {
    this._tokens = tokens;
  }

  get designTokenManager() {
    if (!this._designTokenManager) {
      this._designTokenManager = new DesignTokenManager(
        this._tokens,
        this.dataScope,
      );
    }

    return this._designTokenManager;
  }

  get scopedSelector() {
    return new CssSelectorBuilder().dataScope(this.dataScope);
  }

  token(key: keyof T) {
    if (this.designTokenManager.get(key).exportCssVariable) {
      return this.designTokenManager.getAsCssVar(key);
    } else {
      return String(this.designTokenManager.getValue(key));
    }
  }

  abstract buildCss(): string;
}
