import { clsx } from "clsx";
import { type HTMLAttributes, useContext } from "react";
import { WidgetFarmContext } from "../../WidgetFarmContext.ts";
import type { WidgetBaseProps } from "../types/WidgetBaseProps.ts";

interface HStackProps extends WidgetBaseProps, HTMLAttributes<HTMLDivElement> {
  gap?: number;
  inline?: boolean;
}

export function HStack(props: HStackProps) {
  const {
    theme,
    className,
    gap = 0,
    inline = false,
    style = {},
    ...rest
  } = props;

  const context = useContext(WidgetFarmContext);
  const activeTheme = theme ?? context.theme;

  return (
    <div
      data-scope={"h-stack"}
      data-part={"content"}
      data-inline={inline}
      {...rest}
      className={clsx(activeTheme.HStack, className)}
      style={{ gap: `${gap}px`, ...style }}
    />
  );
}
