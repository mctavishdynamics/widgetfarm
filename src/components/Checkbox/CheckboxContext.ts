import { createContext, type ReactNode } from "react";

export interface ICheckboxContext {
  className: string;
  checkedIcon?: ReactNode;
  indeterminateIcon?: ReactNode;
}

export const CheckboxContext = createContext<ICheckboxContext | undefined>(
  undefined,
);
