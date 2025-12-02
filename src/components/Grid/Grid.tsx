import { clsx } from "clsx";
import { type CSSProperties, type HTMLAttributes, useContext } from "react";
import { WidgetFarmContext } from "../../WidgetFarmContext.ts";
import type { WidgetBaseProps } from "../types/WidgetBaseProps.ts";

interface GridProps extends WidgetBaseProps, HTMLAttributes<HTMLDivElement> {
  templateColumns?: CSSProperties["gridTemplateColumns"];
  autoRows?: boolean;
  gap?: number;
}

export function Grid(props: GridProps) {
  const {
    theme,
    className,
    gap = 0,
    templateColumns = "1fr",
    autoRows = false,
    style,
    ...rest
  } = props;

  const context = useContext(WidgetFarmContext);
  const activeTheme = theme ?? context.theme;

  return (
    <div
      data-scope={"grid"}
      data-part={"content"}
      {...rest}
      className={clsx(activeTheme.Grid, className)}
      style={{
        gap: `${gap}px`,
        gridTemplateColumns: templateColumns,
        gridAutoRows: autoRows ? "auto" : "initial",
        ...style,
      }}
    />
  );
}
