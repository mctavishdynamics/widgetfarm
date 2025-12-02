import {
  type FieldValues,
  get,
  type Path,
  type RegisterOptions,
  useController,
  useFormContext,
} from "react-hook-form";
import {
  NumberInput,
  type NumberInputProps,
} from "../NumberInput/NumberInput.tsx";
import { getErrorMessage } from "./utils/getErrorMessage.tsx";

export interface FormNumberInputProps<TFieldValues extends FieldValues>
  extends NumberInputProps {
  name: Path<TFieldValues>;
  rules?: Omit<
    RegisterOptions<TFieldValues, Path<TFieldValues>>,
    "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
  >;
}

export function FormNumberInput<TFieldValues extends FieldValues>(
  props: FormNumberInputProps<TFieldValues>,
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
    <NumberInput
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
