import type { JSX } from "react";

export type WithLabel = {
  label?: string | JSX.Element;
  labelRenderer?: (args: {
    isDirty?: boolean;
    isInvalid?: boolean;
    isTouched?: boolean;
  }) => string | JSX.Element;
};
