import { type PropsWithChildren } from "react";
import {
  TextInputContext,
  type ITextInputContext,
} from "./TextInputContext";

export interface TextInputProviderProps
  extends ITextInputContext, PropsWithChildren {}

export function TextInputProvider({
  children,
  className,
}: TextInputProviderProps) {
  return (
    <TextInputContext.Provider value={{ className }}>
      {children}
    </TextInputContext.Provider>
  );
}
