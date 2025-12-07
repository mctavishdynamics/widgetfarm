import { createContext } from "react";

export interface IDatePickerContext {
  className: string;
}

export const DatePickerContext = createContext<IDatePickerContext | undefined>(
  undefined,
);
