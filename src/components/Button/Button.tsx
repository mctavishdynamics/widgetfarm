import { clsx } from "clsx";
import { type ButtonHTMLAttributes, useContext } from "react";
import { WidgetFarmContext } from "../../WidgetFarmContext.ts";
import type { WidgetBaseProps } from "../types/WidgetBaseProps.ts";
import type { WidgetSizes } from "../types/WidgetSizes.ts";

export type ButtonColor = "default" | "red" | "green";
export type ButtonVariant = "default" | "outline";

export interface ButtonProps
  extends WidgetBaseProps, ButtonHTMLAttributes<HTMLButtonElement> {
  size?: WidgetSizes;
  variant?: ButtonVariant;
  color?: ButtonColor;
}

export function Button(props: ButtonProps) {
  const {
    theme,

    className = "",
    type = "button",
    size = "md",
    variant = "default",
    color = "default",
    disabled = false,
    ...rest
  } = props;

  const context = useContext(WidgetFarmContext);

  const activeTheme = theme?.Button ?? context.theme.Button;

  return (
    <button
      data-scope={"button"}
      data-part={"button"}
      data-size={size}
      data-variant={variant}
      data-color={color}
      {...(disabled ? { disabled: true, "aria-disabled": true } : {})}
      {...rest}
      className={clsx(activeTheme, className)}
      type={type}
    />
  );
}
