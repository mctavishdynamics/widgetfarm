import { mergeProps } from "@ark-ui/react";
import * as checkbox from "@zag-js/checkbox";
import { normalizeProps, useMachine } from "@zag-js/react";
import { clsx } from "clsx";
import { type InputHTMLAttributes, type Ref, useId } from "react";
import type { WithLabelProps } from "../../types/WithLabelProps";
import { renderLabel } from "../../utils/renderLabel";
import { useCheckboxContext } from "./useCheckboxContext";

export interface CheckboxProps
  extends
    WithLabelProps,
    Omit<InputHTMLAttributes<HTMLInputElement>, "checked" | "defaultChecked"> {
  ref?: Ref<HTMLLabelElement>;
  inputRef?: Ref<HTMLInputElement>;

  controlFirst?: boolean;

  checked?: checkbox.CheckedState;
  defaultChecked?: checkbox.CheckedState;

  onCheckedChange?: (checked: checkbox.CheckedChangeDetails["checked"]) => void;
}

export const Checkbox = (props: CheckboxProps) => {
  const {
    checked,
    className,
    controlFirst = false,
    defaultChecked,
    inputRef,
    label,
    labelRenderer,
    ref,
    onCheckedChange = () => {},
  } = props;

  const service = useMachine(checkbox.machine, {
    id: useId(),
    checked,
    defaultChecked,
    onCheckedChange: (args) => {
      onCheckedChange(args.checked);
    },
  });
  const api = checkbox.connect(service, normalizeProps);

  const context = useCheckboxContext();

  return (
    <label
      {...mergeProps(api.getRootProps(), {
        className: clsx(context.className, className),
      })}
      ref={ref}
    >
      {!controlFirst
        ? renderLabel({ label, labelRenderer }, (label) => {
            return <span {...api.getLabelProps()}>{label}</span>;
          })
        : null}
      <div {...api.getControlProps()}>
        <div {...api.getIndicatorProps()}>
          {api.checked
            ? context.checkedIcon
            : api.indeterminate
              ? context.indeterminateIcon
              : null}
        </div>
      </div>
      <input {...api.getHiddenInputProps()} ref={inputRef} />
      {controlFirst
        ? renderLabel({ label, labelRenderer }, (label) => {
            return <span {...api.getLabelProps()}>{label}</span>;
          })
        : null}
    </label>
  );
};
