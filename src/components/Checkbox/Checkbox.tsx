import {
  Checkbox as BaseCheckbox,
  type CheckboxRootProps,
} from "@ark-ui/react";
import { IconCheck } from "@tabler/icons-react";
import { clsx } from "clsx";
import type { WidgetBaseProps } from "../types/WidgetBaseProps.ts";
import type { WithLabel } from "../types/WithLabel.ts";
import styles from "./Checkbox.module.css";

interface CheckboxProps extends CheckboxRootProps, WidgetBaseProps, WithLabel {
  checkboxSide?: "left" | "right";
}

export function Checkbox(props: CheckboxProps) {
  const {
    className,
    label,
    labelRenderer,
    isDirty,
    isInvalid,
    isTouched,
    checkboxSide = "left",
    ...rest
  } = props;

  return (
    <BaseCheckbox.Root className={clsx(styles.Checkbox, className)} {...rest}>
      {checkboxSide === "right" ? (
        <BaseCheckbox.Label className={clsx(styles.Checkbox)}>
          {labelRenderer
            ? labelRenderer({ isDirty, isInvalid, isTouched })
            : label}
        </BaseCheckbox.Label>
      ) : null}

      <BaseCheckbox.Control className={clsx(styles.Checkbox, className)}>
        <BaseCheckbox.Indicator className={clsx(styles.Checkbox, className)}>
          <IconCheck />
        </BaseCheckbox.Indicator>
      </BaseCheckbox.Control>
      <BaseCheckbox.HiddenInput className={clsx(styles.Checkbox, className)} />

      {checkboxSide === "left" ? (
        <BaseCheckbox.Label className={clsx(styles.Checkbox, className)}>
          {labelRenderer
            ? labelRenderer({ isDirty, isInvalid, isTouched })
            : label}
        </BaseCheckbox.Label>
      ) : null}
    </BaseCheckbox.Root>
  );
}
