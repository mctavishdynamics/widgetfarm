import { type PropsWithChildren } from "react";
import { CheckboxContext, type ICheckboxContext } from "./CheckboxContext";

export interface CheckboxProviderProps
  extends ICheckboxContext, PropsWithChildren {}

export function CheckboxProvider({
  children,
  className,
  checkedIcon,
  indeterminateIcon,
}: CheckboxProviderProps) {
  return (
    <CheckboxContext.Provider
      value={{ className, checkedIcon, indeterminateIcon }}
    >
      {children}
    </CheckboxContext.Provider>
  );
}
