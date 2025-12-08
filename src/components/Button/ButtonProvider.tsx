import { type PropsWithChildren } from "react";
import { ButtonContext, type IButtonContext } from "./ButtonContext";

export interface ButtonProviderProps
  extends IButtonContext, PropsWithChildren {}

export function ButtonProvider({ children, className }: ButtonProviderProps) {
  return (
    <ButtonContext.Provider value={{ className }}>
      {children}
    </ButtonContext.Provider>
  );
}
