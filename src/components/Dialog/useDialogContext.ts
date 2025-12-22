import { useContext } from "react";
import { DialogContext } from "./DialogContext.ts";

export function useDialogContext() {
  const context = useContext(DialogContext);

  if (context === undefined) {
    throw new Error(
      "useDialogContext must be used within a DialogProvider",
    );
  }

  return context;
}
