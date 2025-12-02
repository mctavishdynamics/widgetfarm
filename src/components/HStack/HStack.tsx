import { clsx } from "clsx";
import type { HTMLAttributes } from "react";
import styles from "./HStack.module.css";

interface HStackProps extends HTMLAttributes<HTMLDivElement> {
  gap?: number;
  inline?: boolean;
  className?: string;
}

export function HStack(props: HStackProps) {
  const {
    className = "",
    gap = 0,
    inline = false,
    style = {},
    ...rest
  } = props;

  return (
    <div
      {...rest}
      className={clsx(
        styles.HStack,
        {
          [styles.HStack__Inline]: inline,
        },
        className,
      )}
      style={{ gap: `${gap}px`, ...style }}
    />
  );
}
