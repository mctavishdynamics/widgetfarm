import { type PropsWithChildren } from "react";
import { SelectContext, type ISelectContext } from "./SelectContext";

export interface SelectProviderProps
  extends ISelectContext, PropsWithChildren {}

export function SelectProvider({ children, className }: SelectProviderProps) {
  return (
    <SelectContext.Provider value={{ className }}>
      {children}
    </SelectContext.Provider>
  );
}
