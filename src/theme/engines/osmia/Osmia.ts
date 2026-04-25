import { TinyColor } from "@ctrl/tinycolor";
import {
  BaseThemeEngine,
  type BaseThemeEngineArgs,
} from "../base/BaseThemeEngine.ts";
import { BackdropContrast } from "./colors/BackdropContrast.ts";
import { Background } from "./colors/Background.ts";
import { Border } from "./colors/Border.ts";
import { InsetBox } from "./components/InsetBox.ts";
import { RaisedBox } from "./components/RaisedBox.ts";
import type { OsmiaColor } from "./OsmiaColor.ts";
import type { OsmiaComponent } from "./OsmiaComponent.ts";
import type { OsmiaPart } from "./OsmiaPart.ts";
import { FocusOutline } from "./parts/FocusOutline.ts";
import { FocusRing } from "./parts/FocusRing.ts";
import { Outline } from "./parts/Outline.ts";

interface OsmiaArgs extends BaseThemeEngineArgs {
  backdropColor: string;
}

export class Osmia extends BaseThemeEngine<OsmiaArgs> {
  static BACKDROP_COLOR_WHITE = "#fff";
  static BACKDROP_COLOR_LIGHT = "#ddd";
  static BACKDROP_COLOR_DARK = "#333";
  static BACKDROP_COLOR_BLACK = "#000";
  static BACKDROP_COLOR_5050 = "#808080";

  protected _backdropColor: TinyColor;

  constructor(args: OsmiaArgs) {
    super(args);

    const { backdropColor = Osmia.BACKDROP_COLOR_LIGHT } = args;
    this._backdropColor = new TinyColor(backdropColor);
  }

  get backdropColor() {
    return this._backdropColor;
  }

  get colors() {
    return {
      backdropContrast: new BackdropContrast(this),
      background: new Background(this),
      border: new Border(this),
    } satisfies Record<string, OsmiaColor>;
  }

  get components() {
    return {
      raisedBox: new RaisedBox(this),
      insetBox: new InsetBox(this),
    } satisfies Record<string, OsmiaComponent>;
  }

  get parts() {
    return {
      outline: new Outline(this),
      focusRing: new FocusRing(this),
      focusOutline: new FocusOutline(this),
    } satisfies Record<string, OsmiaPart>;
  }

  get color() {
    return this.colors.background.readable;
  }
}
