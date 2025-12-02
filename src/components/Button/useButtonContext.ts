import { useContext } from "react";
import { ButtonContext } from "./ButtonContext.ts";

export function useButtonContext() {
  const context = useContext(ButtonContext);

  if (context === undefined) {
    throw new Error("useButtonContext must be used within a ButtonProvider");
  }

  return context;
}
