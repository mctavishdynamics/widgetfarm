import { createContext } from "react";

export interface ITabsContext {
  className: string;
}

export const TabsContext = createContext<ITabsContext | undefined>(
  undefined,
);
