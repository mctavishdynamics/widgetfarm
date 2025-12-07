import { type PropsWithChildren } from "react";
import {
  DatePickerContext,
  type IDatePickerContext,
} from "./DatePickerContext";

export interface DatePickerProviderProps
  extends IDatePickerContext, PropsWithChildren {}

export function DatePickerProvider({
  children,
  className,
}: DatePickerProviderProps) {
  return (
    <DatePickerContext.Provider value={{ className }}>
      {children}
    </DatePickerContext.Provider>
  );
}
