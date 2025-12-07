import { useContext } from "react";
import { TextInputContext } from "./TextInputContext.ts";

export function useTextInputContext() {
  const context = useContext(TextInputContext);

  if (context === undefined) {
    throw new Error("useTextInputContext must be used within a TextInputProvider");
  }

  return context;
}
