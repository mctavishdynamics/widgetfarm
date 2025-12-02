import { clsx } from "clsx";
import { type ButtonHTMLAttributes } from "react";
import type { WidgetBaseProps } from "../types/WidgetBaseProps.ts";
import type { WidgetSizes } from "../types/WidgetSizes.ts";
import { useButtonContext } from "./useButtonContext.ts";

export type ButtonColor = "default" | "red" | "green" | "pink" | "purple";
export type ButtonVariant = "default" | "outline";

export interface ButtonProps
  extends WidgetBaseProps, ButtonHTMLAttributes<HTMLButtonElement> {
  size?: WidgetSizes;
  variant?: ButtonVariant;
  color?: ButtonColor;
}

export function Button(props: ButtonProps) {
  const {
    className = "",
    color = "default",
    disabled = false,
    size = "md",
    type = "button",
    variant = "default",
    ...rest
  } = props;

  const context = useButtonContext();

  return (
    <button
      data-scope={"button"}
      data-part={"button"}
      data-size={size}
      data-variant={variant}
      data-color={color}
      {...(disabled ? { disabled: true, "aria-disabled": true } : {})}
      {...rest}
      className={clsx(context.className, className)}
      type={type}
    />
  );
}
