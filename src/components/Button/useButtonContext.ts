import { useContext } from "react";
import { ButtonContext } from "./ButtonContext";

export function useButtonContext() {
  const context = useContext(ButtonContext);

  if (context === undefined) {
    throw new Error("useButtonContext must be used within a ButtonProvider");
  }

  return context;
}
