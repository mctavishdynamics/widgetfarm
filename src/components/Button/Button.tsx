import { clsx } from "clsx";
import type { ButtonHTMLAttributes } from "react";
import type { FormStateProps } from "../../FormStateProps";
import { useButtonContext } from "./useButtonContext";

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

  const dataProps = Object.keys(rest)
    .filter((key) => key.startsWith("data-"))
    .reduce(
      (acc, key) => ({ ...acc, [key]: rest[key as keyof typeof rest] }),
      {},
    );

  const notDataProps = Object.keys(rest)
    .filter((key) => !key.startsWith("data-"))
    .reduce(
      (acc, key) => ({ ...acc, [key]: rest[key as keyof typeof rest] }),
      {},
    );

  return (
    <div
      data-scope={DATA_SCOPE}
      data-part={"root"}
      data-color={color}
      data-size={size}
      data-variant={variant}
      className={clsx(context.className, className)}
      hidden={rest.hidden}
      {...dataProps}
    >
      <button
        data-scope={DATA_SCOPE}
        data-part={"button"}
        data-button-part={"button"}
        type={type}
        {...(disabled ? { disabled: true, "aria-disabled": true } : {})}
        {...notDataProps}
      />
    </div>
  );
}
