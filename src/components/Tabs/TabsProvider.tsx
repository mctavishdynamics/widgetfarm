import { type PropsWithChildren } from "react";
import { TabsContext, type ITabsContext } from "./TabsContext.ts";

export interface TabsProviderProps
  extends ITabsContext, PropsWithChildren {}

export function TabsProvider({ children, className }: TabsProviderProps) {
  return (
    <TabsContext.Provider value={{ className }}>
      {children}
    </TabsContext.Provider>
  );
}
