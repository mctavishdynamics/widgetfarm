import { createContext } from "react";

export interface INativeSelectContext {
  className: string;
}

export const NativeSelectContext = createContext<INativeSelectContext | undefined>(
  undefined,
);
