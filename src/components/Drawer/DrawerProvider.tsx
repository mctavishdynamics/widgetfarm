import { type PropsWithChildren } from "react";
import {
  DrawerContext,
  type IDrawerContext,
} from "./DrawerContext.ts";

export interface DrawerProviderProps
  extends IDrawerContext, PropsWithChildren {}

export function DrawerProvider({
  children,
  className,
}: DrawerProviderProps) {
  return (
    <DrawerContext.Provider value={{ className }}>
      {children}
    </DrawerContext.Provider>
  );
}
