import { createContext } from "react";

export interface IButtonContext {
  className: string;
}

export const ButtonContext = createContext<IButtonContext | undefined>(
  undefined,
);
