import type { JSX } from "react";
import type { LabelRendererType } from "../types/LabelRendererType";
import type { LabelType } from "../types/LabelType";

export function renderLabel(
  args: {
    label?: LabelType;
    labelRenderer?: LabelRendererType;
  },
  then: (label?: LabelType) => JSX.Element,
) {
  const { label, labelRenderer } = args;

  if (typeof labelRenderer == "function") {
    return then(labelRenderer({ label }));
  } else if (label) {
    return then(label);
  } else {
    return null;
  }
}
