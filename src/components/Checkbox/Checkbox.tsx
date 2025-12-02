import {
  Checkbox as BaseCheckbox,
  type CheckboxRootProps,
} from "@ark-ui/react";
import { clsx } from "clsx";
import { TbCheck } from "react-icons/tb";
import type { WidgetBaseProps } from "../types/WidgetBaseProps.ts";
import type { WithLabel } from "../types/WithLabel.ts";
import { useCheckboxContext } from "./useCheckboxContext.ts";

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

  const context = useCheckboxContext();

  return (
    <BaseCheckbox.Root className={clsx(context.className, className)} {...rest}>
      {checkboxSide === "right" ? (
        <BaseCheckbox.Label className={clsx(context.className)}>
          {labelRenderer
            ? labelRenderer({ isDirty, isInvalid, isTouched })
            : label}
        </BaseCheckbox.Label>
      ) : null}

      <BaseCheckbox.Control className={clsx(context.className, className)}>
        <BaseCheckbox.Indicator className={clsx(context.className, className)}>
          <TbCheck />
        </BaseCheckbox.Indicator>
      </BaseCheckbox.Control>

      <BaseCheckbox.HiddenInput
        className={clsx(context.className, className)}
      />

      {checkboxSide === "left" ? (
        <BaseCheckbox.Label className={clsx(context.className, className)}>
          {labelRenderer
            ? labelRenderer({ isDirty, isInvalid, isTouched })
            : label}
        </BaseCheckbox.Label>
      ) : null}
    </BaseCheckbox.Root>
  );
}
