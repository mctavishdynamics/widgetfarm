import { useContext } from "react";
import { CheckboxContext } from "./CheckboxContext.ts";

export function useCheckboxContext() {
  const context = useContext(CheckboxContext);

  if (context === undefined) {
    throw new Error(
      "useCheckboxContext must be used within a CheckboxProvider",
    );
  }

  return context;
}
