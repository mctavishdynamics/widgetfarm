import { createContext } from "react";

export interface IDialogContext {
  className: string;
}

export const DialogContext = createContext<
  IDialogContext | undefined
>(undefined);
