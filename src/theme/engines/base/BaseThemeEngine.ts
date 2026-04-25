export interface BaseThemeEngineArgs {
  hover?: boolean;
  active?: boolean;
  focus?: boolean;
}

export class BaseThemeEngine<T extends BaseThemeEngineArgs> {
  protected _args: T;

  // STATE
  protected _hover: boolean;
  protected _active: boolean;
  protected _focus: boolean;

  constructor(args: T) {
    const { hover = false, active = false, focus = false } = args;

    this._args = args;

    this._hover = hover;
    this._active = active;
    this._focus = focus;
  }

  protected cloneWith(args: Partial<T>): this {
    const constructor = this.constructor as new (args: T) => this;

    return new constructor({
      ...this._args,
      ...args,
    });
  }

  get isHover() {
    return this._hover;
  }

  get isActive() {
    return this._active;
  }

  get isFocus() {
    return this._focus;
  }

  hover() {
    return this.cloneWith({
      hover: true,
    } as Partial<T>);
  }

  active() {
    return this.cloneWith({
      active: true,
    } as Partial<T>);
  }

  focus() {
    return this.cloneWith({
      active: true,
    } as Partial<T>);
  }
}
