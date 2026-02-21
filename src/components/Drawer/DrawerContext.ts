import { createContext } from "react";

export interface IDrawerContext {
  className: string;
}

export const DrawerContext = createContext<
  IDrawerContext | undefined
>(undefined);
