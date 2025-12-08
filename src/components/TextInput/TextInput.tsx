import { clsx } from "clsx";
import { type InputHTMLAttributes, type JSX, type Ref, useId } from "react";
import type { FormStateProps } from "../../FormStateProps";
import { useTextInputContext } from "./useTextInputContext.ts";

export type TextInputLabelRenderer = (args: {
  label?: string | JSX.Element;
  isDirty: boolean;
  isInvalid: boolean;
  isTouched: boolean;
}) => string | JSX.Element;

export type TextInputError = boolean | string | JSX.Element;

export interface TextInputProps
  extends
    Omit<InputHTMLAttributes<HTMLInputElement>, "children">,
    FormStateProps {
  label?: string | JSX.Element;
  labelRenderer?: TextInputLabelRenderer;
  error?: TextInputError;
  ref?: Ref<HTMLInputElement>;
}

const DATA_SCOPE = "text-input";

export function TextInput(props: TextInputProps) {
  const {
    className,
    id,
    name,

    label,
    labelRenderer,

    error,

    isDirty = false,
    isInvalid = false,
    isTouched = false,

    ...rest
  } = props;

  const context = useTextInputContext();
  const usedId = useId();

  const _id = id || usedId;
  const _name = name || _id;

  let _label = label;

  if (typeof labelRenderer === "function") {
    if (labelRenderer({ isDirty, isInvalid, isTouched })) {
      _label = labelRenderer({ isDirty, isInvalid, isTouched });
    }
  }

  return (
    <div
      className={clsx(context.className, className)}
      data-scope={DATA_SCOPE}
      data-part={"root"}
      {...(error ? { "data-error": !!error } : {})}
    >
      {_label ? (
        <label data-scope={DATA_SCOPE} data-part={"label"} htmlFor={_id}>
          {_label}
        </label>
      ) : null}
      <div data-scope={DATA_SCOPE} data-part={"control"}>
        <input
          autoComplete={"off"}
          inputMode={"text"}
          name={_name}
          {...rest}
          id={_id}
          data-scope={DATA_SCOPE}
          data-part={"input"}
        />
      </div>
      {error && error !== true ? (
        <div data-scope={DATA_SCOPE} data-part={"error"}>
          {error}
        </div>
      ) : null}
    </div>
  );
}
