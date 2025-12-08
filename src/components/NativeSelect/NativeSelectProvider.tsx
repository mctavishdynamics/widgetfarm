import { type PropsWithChildren } from "react";
import { NativeSelectContext, type INativeSelectContext } from "./NativeSelectContext";

export interface NativeSelectProviderProps
  extends INativeSelectContext, PropsWithChildren {}

export function NativeSelectProvider({ children, className }: NativeSelectProviderProps) {
  return (
    <NativeSelectContext.Provider value={{ className }}>
      {children}
    </NativeSelectContext.Provider>
  );
}
