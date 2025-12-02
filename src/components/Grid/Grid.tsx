import { clsx } from "clsx";
import type { CSSProperties, HTMLAttributes } from "react";
import styles from "./Grid.module.css";

interface GridProps extends HTMLAttributes<HTMLDivElement> {
  templateColumns?: CSSProperties["gridTemplateColumns"];
  autoRows?: boolean;
  gap?: number;
}

export function Grid(props: GridProps) {
  const {
    className = "",
    gap = 0,
    templateColumns = "1fr",
    autoRows = false,
    style,
    ...rest
  } = props;

  return (
    <div
      {...rest}
      className={clsx(styles.Grid, className)}
      style={{
        gap: `${gap}px`,
        gridTemplateColumns: templateColumns,
        gridAutoRows: autoRows ? "auto" : "initial",
        ...style,
      }}
    />
  );
}
