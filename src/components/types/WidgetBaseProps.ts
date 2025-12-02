import type { Theme } from "../../Theme.ts";

export type WidgetBaseProps = {
  theme?: Theme;

  disabled?: boolean;

  isDirty?: boolean;
  isInvalid?: boolean;
  isTouched?: boolean;
};
