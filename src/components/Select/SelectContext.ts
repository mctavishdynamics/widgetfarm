import { createContext } from "react";

export interface ISelectContext {
  className: string;
}

export const SelectContext = createContext<ISelectContext | undefined>(
  undefined,
);
