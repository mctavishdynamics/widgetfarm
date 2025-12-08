import { useContext } from "react";
import { TextInputContext } from "./TextInputContext";

export function useTextInputContext() {
  const context = useContext(TextInputContext);

  if (context === undefined) {
    throw new Error("useTextInputContext must be used within a TextInputProvider");
  }

  return context;
}
