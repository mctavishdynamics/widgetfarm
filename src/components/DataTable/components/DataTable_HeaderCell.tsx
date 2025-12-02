import { flexRender, type Header } from "@tanstack/react-table";
import styles from "../DataTable.module.css";
import type { DataTable_BaseRow } from "../DataTable.tsx";

export type DataTable_HeaderCell_Props<GenericRow> = {
  header: Header<GenericRow & DataTable_BaseRow, unknown>;
};

export function DataTable_HeaderCell<GenericRow>(
  props: DataTable_HeaderCell_Props<GenericRow>,
) {
  const { header } = props;

  return (
    <th
      data-table-column-cell={header.id}
      key={header.id}
      className={styles.DataTable_HeaderCell}
    >
      <div className={styles.DataTable_HeaderCell_Body}>
        {header.isPlaceholder
          ? null
          : flexRender(header.column.columnDef.header, header.getContext())}
      </div>
    </th>
  );
}
