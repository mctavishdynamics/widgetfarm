import { type HeaderGroup } from "@tanstack/react-table";
import type { PropsWithChildren } from "react";
import styles from "../DataTable.module.css";
import type { DataTable_BaseRow } from "../DataTable.tsx";

export interface DataTable_HeaderRow_Props<GenericRow>
  extends PropsWithChildren {
  headerGroup: HeaderGroup<GenericRow & DataTable_BaseRow>;
}

export function DataTable_HeaderRow<GenericRow>(
  props: DataTable_HeaderRow_Props<GenericRow>,
) {
  const { headerGroup, children } = props;

  return (
    <tr key={headerGroup.id} className={styles.DataTable_HeaderRow}>
      {children}
    </tr>
  );
}
