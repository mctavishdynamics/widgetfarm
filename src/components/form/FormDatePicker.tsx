import { parseDate } from "@ark-ui/react";
import {
  type FieldValues,
  get,
  type Path,
  type RegisterOptions,
  useController,
  useFormContext,
} from "react-hook-form";
import { DatePicker, type DatePickerProps } from "../DatePicker/DatePicker.tsx";
import { getErrorMessage } from "./utils/getErrorMessage.tsx";

export interface FormDatePickerProps<TFieldValues extends FieldValues>
  extends DatePickerProps {
  name: Path<TFieldValues>;
  rules?: Omit<
    RegisterOptions<TFieldValues, Path<TFieldValues>>,
    "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
  >;
}

export function FormDatePicker<TFieldValues extends FieldValues>(
  props: FormDatePickerProps<TFieldValues>,
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
    <DatePicker
      iso8601
      ref={field.ref}
      name={field.name}
      value={field.value ? [parseDate(field.value)] : []}
      onValueChange={({ valueAsString }) => field.onChange(valueAsString[0])}
      onBlur={field.onBlur}
      error={getErrorMessage(get(formState.errors, name))}
      isDirty={isDirty}
      isTouched={isTouched}
      isInvalid={invalid}
      {...rest}
    />
  );
}
