import { type PropsWithChildren } from "react";
import { CheckboxContext, type ICheckboxContext } from "./CheckboxContext.ts";

export interface CheckboxProviderProps
  extends ICheckboxContext, PropsWithChildren {}

export function CheckboxProvider({
  children,
  className,
}: CheckboxProviderProps) {
  return (
    <CheckboxContext.Provider value={{ className }}>
      {children}
    </CheckboxContext.Provider>
  );
}
