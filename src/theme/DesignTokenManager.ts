import type { DesignTokens } from "./DesignTokens.ts";

export class DesignTokenManager<T extends DesignTokens<T>> {
  protected tokens: T;
  protected cssPrefix: string;

  constructor(tokens: T, prefix: string = "") {
    this.tokens = tokens;
    this.cssPrefix = prefix;
  }

  get(name: keyof T) {
    if (!this.tokens[name]) {
      throw new Error(
        `Token ${String(name)} not found in design token manager`,
      );
    }
    return this.tokens[name];
  }

  getValue(name: keyof T) {
    return this.tokens[name].value;
  }

  getAsCssVar(name: keyof T) {
    return `var(${this.getCssVarName(name)})`;
  }

  getCssVarName(name: keyof T) {
    const cssName = String(name)
      .trim()
      .replace(/[^a-zA-Z0-9-_]/g, "-")
      .replace(/-+/g, "-");

    if (this.cssPrefix.length) {
      return `--${this.cssPrefix}-${cssName}`;
    } else {
      return `--${cssName}`;
    }
  }

  asCssVariables() {
    return Object.fromEntries(
      Object.keys(this.tokens)
        .map((key) => {
          const token = this.get(key as Extract<keyof T, string>);

          if (!token.exportCssVariable) {
            return [];
          }

          return [
            this.getCssVarName(key as Extract<keyof T, string>),
            this.getValue(key as Extract<keyof T, string>),
          ] as const;
        })
        .filter((x) => x.length),
    );
  }
}
