import type { ColumnDef } from "@tanstack/react-table";
import type { DataTable_BaseRow, DataTable_ColumnDef } from "../DataTable.tsx";

export function getTanstackTableColumns<GenericRow>(
  columns: DataTable_ColumnDef<GenericRow & DataTable_BaseRow>[],
) {
  const columnDefs: Array<ColumnDef<GenericRow & DataTable_BaseRow>> = [];

  columns.forEach((column) => {
    const columnDef: ColumnDef<GenericRow & DataTable_BaseRow> = {
      id: column.key ? `${column.key}-${column.field}` : column.field,
      header: column.title,
      accessorKey: column.field,
    };

    const cellRenderer = column.cellRenderer;
    if (cellRenderer) {
      columnDef.cell = ({ row, cell }) => cellRenderer({ row, cell });
    }

    if (typeof column.size === "number") {
      columnDef.size = column.size;
    }

    columnDefs.push(columnDef);
  });

  return columnDefs;
}
