import { clsx } from "clsx";
import type { HTMLAttributes } from "react";
import styles from "./VStack.module.css";

interface VStackProps extends HTMLAttributes<HTMLDivElement> {
  gap?: number;
}

export function VStack(props: VStackProps) {
  const { gap = 0, style = {}, className = "", ...rest } = props;

  return (
    <div
      data-scope={"v-stack"}
      data-part={"content"}
      {...rest}
      className={clsx(styles.VStack, className)}
      style={{ gap: `${gap}px`, ...style }}
    />
  );
}
