import { createContext } from "react";

export interface INumberInputContext {
  className: string;
}

export const NumberInputContext = createContext<INumberInputContext | undefined>(
  undefined,
);
