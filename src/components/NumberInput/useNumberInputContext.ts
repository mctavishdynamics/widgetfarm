import { useContext } from "react";
import { NumberInputContext } from "./NumberInputContext.ts";

export function useNumberInputContext() {
  const context = useContext(NumberInputContext);

  if (context === undefined) {
    throw new Error("useNumberInputContext must be used within a NumberInputProvider");
  }

  return context;
}
