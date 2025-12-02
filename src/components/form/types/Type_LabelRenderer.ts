import type { JSX } from "react";

export type Type_LabelRenderer = (args: {
  isDirty: boolean;
  isInvalid: boolean;
  isTouched: boolean;
}) => string | JSX.Element;
