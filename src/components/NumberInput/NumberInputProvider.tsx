import { type PropsWithChildren } from "react";
import {
  NumberInputContext,
  type INumberInputContext,
} from "./NumberInputContext.ts";

export interface NumberInputProviderProps
  extends INumberInputContext, PropsWithChildren {}

export function NumberInputProvider({
  children,
  className,
}: NumberInputProviderProps) {
  return (
    <NumberInputContext.Provider value={{ className }}>
      {children}
    </NumberInputContext.Provider>
  );
}
