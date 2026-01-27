import { createContext } from "react";

export interface IClipboardContext {
  className: string;
}

export const ClipboardContext = createContext<IClipboardContext | undefined>(
  undefined,
);
