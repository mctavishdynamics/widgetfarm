import { clsx } from "clsx";
import { type HTMLAttributes, useContext } from "react";
import { WidgetFarmContext } from "../../WidgetFarmContext.ts";
import type { WidgetBaseProps } from "../types/WidgetBaseProps.ts";

interface VStackProps extends WidgetBaseProps, HTMLAttributes<HTMLDivElement> {
  gap?: number;
}

export function VStack(props: VStackProps) {
  const { theme, className, gap = 0, style = {}, ...rest } = props;

  const context = useContext(WidgetFarmContext);
  const activeTheme = theme ?? context.theme;

  return (
    <div
      data-scope={"v-stack"}
      data-part={"content"}
      {...rest}
      className={clsx(activeTheme.VStack, className)}
      style={{ gap: `${gap}px`, ...style }}
    />
  );
}
