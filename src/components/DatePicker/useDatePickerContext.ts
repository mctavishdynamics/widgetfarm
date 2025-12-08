import { useContext } from "react";
import { DatePickerContext } from "./DatePickerContext";

export function useDatePickerContext() {
  const context = useContext(DatePickerContext);

  if (context === undefined) {
    throw new Error("useDatePickerContext must be used within a DatePickerProvider");
  }

  return context;
}
