import { type JSX } from "react";

export type LabelRenderer = (args: {
  label?: string | JSX.Element;
  isDirty: boolean;
  isInvalid: boolean;
  isTouched: boolean;
}) => string | JSX.Element;
