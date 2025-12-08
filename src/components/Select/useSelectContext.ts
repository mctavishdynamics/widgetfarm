import { useContext } from "react";
import { SelectContext } from "./SelectContext";

export function useSelectContext() {
  const context = useContext(SelectContext);

  if (context === undefined) {
    throw new Error("useSelectContext must be used within a SelectProvider");
  }

  return context;
}
