import { useContext } from "react";
import { TabsContext } from "./TabsContext.ts";

export function useTabsContext() {
  const context = useContext(TabsContext);

  if (context === undefined) {
    throw new Error("useTabsContext must be used within a TabsProvider");
  }

  return context;
}
