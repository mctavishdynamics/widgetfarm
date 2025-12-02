import { type Cell, flexRender } from "@tanstack/react-table";
import styles from "../DataTable.module.css";
import type { DataTable_BaseRow } from "../DataTable.tsx";

export type DataTable_BodyCell_Props<GenericRow> = {
  cell: Cell<GenericRow & DataTable_BaseRow, unknown>;
};

export function DataTable_BodyCell<GenericRow>(
  props: DataTable_BodyCell_Props<GenericRow>,
) {
  const { cell } = props;

  const meta = cell.column.columnDef
    .meta as typeof cell.column.columnDef.meta & {
    asChild?: boolean;
  };
  let asChild = false;

  if (meta && meta.asChild) {
    asChild = true;
  }

  return (
    <td
      className={styles.DataTable_BodyCell}
      style={{ width: `${cell.column.getSize()}px` }}
    >
      {asChild ? (
        flexRender(cell.column.columnDef.cell, cell.getContext())
      ) : (
        <div className={styles.DataTable_BodyCell_Body}>
          {flexRender(cell.column.columnDef.cell, cell.getContext())}
        </div>
      )}
    </td>
  );
}
