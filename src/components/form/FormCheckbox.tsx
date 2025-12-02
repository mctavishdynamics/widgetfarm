import {
  type FieldValues,
  get,
  type Path,
  type RegisterOptions,
  useController,
  useFormContext,
} from "react-hook-form";
import { TextInput, type TextInputProps } from "../TextInput/TextInput.tsx";
import { getErrorMessage } from "./utils/getErrorMessage.tsx";

export interface FormCheckboxProps<TFieldValues extends FieldValues>
  extends TextInputProps {
  name: Path<TFieldValues>;
  rules?: Omit<
    RegisterOptions<TFieldValues, Path<TFieldValues>>,
    "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
  >;
}

export function FormCheckbox<TFieldValues extends FieldValues>(
  props: FormCheckboxProps<TFieldValues>,
) {
  const { name, rules, ...rest } = props;

  const { control } = useFormContext<TFieldValues>();
  const {
    field,
    fieldState: { invalid, isTouched, isDirty },
    formState,
  } = useController<TFieldValues>({
    name,
    control,
    rules,
  });

  return (
    <TextInput
      ref={field.ref}
      name={field.name}
      value={field.value}
      onChange={field.onChange}
      onBlur={field.onBlur}
      error={getErrorMessage(get(formState.errors, name))}
      isDirty={isDirty}
      isTouched={isTouched}
      isInvalid={invalid}
      {...rest}
    />
  );
}
