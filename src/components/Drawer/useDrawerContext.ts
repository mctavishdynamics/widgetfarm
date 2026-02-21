import { useContext } from "react";
import { DrawerContext } from "./DrawerContext.ts";

export function useDrawerContext() {
  const context = useContext(DrawerContext);

  if (context === undefined) {
    throw new Error(
      "useDrawerContext must be used within a DrawerProvider",
    );
  }

  return context;
}
