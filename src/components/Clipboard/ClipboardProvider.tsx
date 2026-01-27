import { type PropsWithChildren } from "react";
import {
  ClipboardContext,
  type IClipboardContext,
} from "./ClipboardContext.ts";

export interface ClipboardProviderProps
  extends IClipboardContext, PropsWithChildren {}

export function ClipboardProvider({
  children,
  className,
}: ClipboardProviderProps) {
  return (
    <ClipboardContext.Provider value={{ className }}>
      {children}
    </ClipboardContext.Provider>
  );
}
