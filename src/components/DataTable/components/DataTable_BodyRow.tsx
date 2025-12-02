import { type Row } from "@tanstack/react-table";
import clsx from "clsx";
import type { PropsWithChildren, ReactNode } from "react";
import styles from "../DataTable.module.css";
import type { DataTable_BaseRow } from "../DataTable.tsx";

export interface DataTable_BodyRow_Props<GenericRow> extends PropsWithChildren {
  row: Row<GenericRow & DataTable_BaseRow>;
  expandedRenderer?: (props: {
    row: Row<GenericRow & DataTable_BaseRow>;
  }) => ReactNode;
  expandedClassName?: string;
}

export function DataTable_BodyRow<GenericRow>(
  props: DataTable_BodyRow_Props<GenericRow>,
) {
  const { children, row, expandedRenderer, expandedClassName = "" } = props;

  return (
    <>
      <tr className={styles.DataTable_BodyRow}>{children}</tr>
      {row.getIsExpanded() && (
        <tr
          data-table-expanded-row={true}
          className={clsx(
            styles.DataTable_Table_Body_Row,
            styles.DataTable_Table_Body_ExpandedRow,
            expandedClassName
          )}
        >
          <td
            colSpan={row.getVisibleCells().length}
            className={clsx(
              styles.DataTable_Table_Body_Row_Cell,
              styles.DataTable_Table_Body_ExpandedRow_Cell,
            )}
          >
            {expandedRenderer ? expandedRenderer({ row }) : null}
          </td>
        </tr>
      )}
    </>
  );
}
