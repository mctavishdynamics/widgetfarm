import { createContext } from "react";

export interface ICheckboxContext {
  className: string;
}

export const CheckboxContext = createContext<ICheckboxContext | undefined>(
  undefined,
);
