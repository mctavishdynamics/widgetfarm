import { useContext } from "react";
import { NativeSelectContext } from "./NativeSelectContext";

export function useNativeSelectContext() {
  const context = useContext(NativeSelectContext);

  if (context === undefined) {
    throw new Error(
      "useNativeSelectContext must be used within a NativeSelectProvider",
    );
  }

  return context;
}
