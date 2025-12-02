import type { FieldError } from "react-hook-form";

export function getErrorMessage(error?: FieldError) {
  if (error === undefined) return undefined;

  if (error.message) {
    return error.message.toString();
  } else if (error.type === "required") {
    return "This field is required";
  } else {
    return "Error";
  }
}
