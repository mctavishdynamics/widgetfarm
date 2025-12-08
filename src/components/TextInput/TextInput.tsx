import { clsx } from "clsx";
import { type InputHTMLAttributes, type Ref, useId } from "react";
import type { ErrorType } from "../../ErrorType";
import type { FormStateProps } from "../../FormStateProps";
import type { LabelRendererType } from "../../types/LabelRendererType";
import type { LabelType } from "../../types/LabelType";
import { renderLabel } from "../../utils/renderLabel";
import { useTextInputContext } from "./useTextInputContext";

export interface TextInputProps
  extends
    Omit<InputHTMLAttributes<HTMLInputElement>, "children">,
    FormStateProps {
  label?: LabelType;
  labelRenderer?: LabelRendererType;
  error?: ErrorType;
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

    ...rest
  } = props;

  const context = useTextInputContext();
  const usedId = useId();

  const _id = id || usedId;
  const _name = name || _id;

  return (
    <div
      className={clsx(context.className, className)}
      data-scope={DATA_SCOPE}
      data-part={"root"}
      {...(error ? { "data-error": !!error } : {})}
    >
      {renderLabel({ label, labelRenderer }, (label) => {
        return (
          <label data-scope={DATA_SCOPE} data-part={"label"} htmlFor={_id}>
            {label}
          </label>
        );
      })}
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
