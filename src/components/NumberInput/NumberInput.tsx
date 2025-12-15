import * as numberInput from "@zag-js/number-input";
import { normalizeProps, useMachine } from "@zag-js/react";
import { clsx } from "clsx";
import { type InputHTMLAttributes, type Ref, useId } from "react";
import type { ErrorType } from "../../ErrorType";
import type { LabelRendererType } from "../../types/LabelRendererType";
import type { LabelType } from "../../types/LabelType";
import type { WithLabelProps } from "../../types/WithLabelProps.ts";
import { renderLabel } from "../../utils/renderLabel.ts";
import { Button } from "../Button/Button.tsx";
import { TextInput } from "../TextInput/TextInput.tsx";
import { useNumberInputContext } from "./useNumberInputContext.ts";

export interface NumberInputProps
  extends
    WithLabelProps,
    Omit<InputHTMLAttributes<HTMLInputElement>, "children"> {
  label?: LabelType;
  labelRenderer?: LabelRendererType;
  error?: ErrorType;
  ref?: Ref<HTMLInputElement>;
  min?: number;
  max?: number;
  value?: string | number;
  defaultValue?: string | number;
  onValueChange?: (details: numberInput.ValueChangeDetails) => void;
}

const DATA_SCOPE = "number-input";

export function NumberInput(props: NumberInputProps) {
  const {
    className,
    label,
    labelRenderer,
    min,
    max,
    value,
    defaultValue,
    onValueChange,
    ref,
    error,
  } = props;

  const context = useNumberInputContext();

  const service = useMachine(numberInput.machine, {
    id: useId(),
    max,
    min,
    value: value !== undefined ? `${value}` : undefined,
    defaultValue: defaultValue !== undefined ? `${defaultValue}` : undefined,
    onValueChange,
  });
  const api = numberInput.connect(service, normalizeProps);

  const decrementProps = api.getDecrementTriggerProps();
  type decrementPropsType = Omit<typeof decrementProps, "color">;

  const incrementProps = api.getIncrementTriggerProps();
  type incrementPropsType = Omit<typeof incrementProps, "color">;

  return (
    <div {...api.getRootProps()} className={clsx(context.className, className)}>
      {renderLabel({ label, labelRenderer }, (label) => {
        return <label {...api.getLabelProps()}>{label}</label>;
      })}
      <div {...api.getControlProps()} data-scope={DATA_SCOPE}>
        <Button {...(decrementProps as decrementPropsType)}>−</Button>
        <TextInput {...api.getInputProps()} ref={ref} error={!!error} />
        <Button {...(incrementProps as incrementPropsType)}>+</Button>
      </div>
      {error && error !== true ? (
        <div data-scope={DATA_SCOPE} data-part={"error"}>
          {error}
        </div>
      ) : null}
    </div>
  );
}
