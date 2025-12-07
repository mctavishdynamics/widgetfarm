import { clsx } from "clsx";
import { type ButtonHTMLAttributes } from "react";
import type { FormStateProps } from "../../FormStateProps.ts";
import { useButtonContext } from "./useButtonContext.ts";

export type ButtonColor = "default" | "red" | "green" | "pink" | "purple";
export type ButtonVariant = "default" | "outline";

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>, FormStateProps {
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
  variant?: ButtonVariant;
  color?: ButtonColor;
}

const DATA_SCOPE = "button";

export function Button(props: ButtonProps) {
  const {
    className = "",
    disabled = false,
    type = "button",

    color = "default",
    size = "md",
    variant = "default",

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    isInvalid,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    isDirty,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    isTouched,

    ...rest
  } = props;

  const context = useButtonContext();

  return (
    <div
      data-scope={DATA_SCOPE}
      data-part={"root"}
      data-color={color}
      data-size={size}
      data-variant={variant}
      className={clsx(context.className, className)}
    >
      <button
        data-scope={DATA_SCOPE}
        data-part={"button"}
        type={type}
        {...(disabled ? { disabled: true, "aria-disabled": true } : {})}
        {...rest}
      />
    </div>
  );
}
