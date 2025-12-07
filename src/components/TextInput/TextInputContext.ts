import { createContext } from "react";

export interface ITextInputContext {
  className: string;
}

export const TextInputContext = createContext<ITextInputContext | undefined>(
  undefined,
);
