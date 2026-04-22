export class CssSelectorBuilder {
  private selectorParts: Array<string> = [];

  get parent() {
    this.selectorParts.unshift("&");
    return this;
  }

  dataScope(scope: string) {
    this.selectorParts.push(`[data-scope=${scope}]`);
    return this;
  }

  dataPart(part: string) {
    this.selectorParts.push(`[data-part=${part}]`);
    return this;
  }

  has(selector: string) {
    this.selectorParts.push(`:has(${selector})`);
    return this;
  }

  not(selector: string) {
    this.selectorParts.push(`:not(${selector})`);
    return this;
  }

  get hover() {
    this.selectorParts.push(":hover");
    return this;
  }

  get active() {
    this.selectorParts.push(":active");
    return this;
  }

  get focus() {
    this.selectorParts.push(":focus");
    return this;
  }

  get focusWithin() {
    this.selectorParts.push(":focus-within");
    return this;
  }

  get focusVisible() {
    this.selectorParts.push(":focus-visible");
    return this;
  }

  child(selector: string) {
    this.selectorParts.push(`> ${selector}`);
    return this;
  }

  build() {
    return this.selectorParts.join("");
  }
}
