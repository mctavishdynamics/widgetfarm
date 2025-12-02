import type { HTMLAttributes } from "react";
import styles from "./Center.module.css";

type CenterProps = HTMLAttributes<HTMLDivElement>;

export const Center = (props: CenterProps) => {
  return <div {...props} className={styles.Center} />;
};
