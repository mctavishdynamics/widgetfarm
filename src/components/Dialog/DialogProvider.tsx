import { type PropsWithChildren } from "react";
import {
  DialogContext,
  type IDialogContext,
} from "./DialogContext.ts";

export interface DialogProviderProps
  extends IDialogContext, PropsWithChildren {}

export function DialogProvider({
  children,
  className,
}: DialogProviderProps) {
  return (
    <DialogContext.Provider value={{ className }}>
      {children}
    </DialogContext.Provider>
  );
}
