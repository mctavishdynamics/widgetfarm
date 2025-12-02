import { clsx } from "clsx";
import { type HTMLAttributes, useContext } from "react";
import { WidgetFarmContext } from "../../WidgetFarmContext.ts";
import type { WidgetBaseProps } from "../types/WidgetBaseProps.ts";

interface BadgeProps
  extends WidgetBaseProps, Exclude<HTMLAttributes<HTMLDivElement>, "fill"> {
  fill?: boolean;
}

export const Badge = (props: BadgeProps) => {
  const { theme, className, fill = false, ...rest } = props;

  const context = useContext(WidgetFarmContext);
  const activeTheme = theme ?? context.theme.Badge;

  return (
    <div
      data-scope={"badge"}
      data-part={"badge"}
      data-fill={fill}
      {...rest}
      className={clsx(activeTheme, className)}
    />
  );
};
