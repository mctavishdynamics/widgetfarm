import { clsx } from "clsx";
import type { InputHTMLAttributes, Ref } from "react";
import type { Type_CommonFormProps } from "../form/types/Type_CommonFormProps.ts";
import type { Type_Error } from "../form/types/Type_Error.ts";
import type { Type_Label } from "../form/types/Type_Label.ts";
import type { Type_LabelRenderer } from "../form/types/Type_LabelRenderer.ts";
import styles from "./TextInput.module.css";

export interface TextInputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    Type_CommonFormProps {
  label?: Type_Label;
  labelRenderer?: Type_LabelRenderer;

  error?: Type_Error;
  ref?: Ref<HTMLInputElement>;
}

const DATA_SCOPE = "text-input";

export function TextInput(props: TextInputProps) {
  const {
    id,
    name,

    label,
    labelRenderer,

    isDirty = false,
    isInvalid = false,
    isTouched = false,

    error,

    ...rest
  } = props;

  let _label = label;

  if (typeof labelRenderer === "function") {
    if (labelRenderer({ isDirty, isInvalid, isTouched })) {
      _label = labelRenderer({ isDirty, isInvalid, isTouched });
    }
  }

  return (
    <div
      className={clsx(styles.TextInput, {
        [styles.Error]: error,
      })}
      data-scope={DATA_SCOPE}
      data-part={"root"}
    >
      {_label ? (
        <label data-scope={DATA_SCOPE} data-part={"label"} htmlFor={id || name}>
          {_label}
        </label>
      ) : null}
      <div data-scope={DATA_SCOPE} data-part={"control"}>
        <input
          {...rest}
          id={id || name}
          data-scope={DATA_SCOPE}
          data-part={"input"}
          autoComplete={"off"}
          inputMode={"text"}
        />
      </div>
      {error ? (
        <div data-scope={DATA_SCOPE} data-part={"error"}>
          {error}
        </div>
      ) : null}
    </div>
  );
}
