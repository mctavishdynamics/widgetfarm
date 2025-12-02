import { IconChevronDown, IconChevronRight } from "@tabler/icons-react";
import {
  type Cell,
  type ColumnDef,
  getCoreRowModel,
  getExpandedRowModel,
  type Row,
  useReactTable,
} from "@tanstack/react-table";
import { type ReactNode, useMemo } from "react";
import styles from "./DataTable.module.css";
import { DataTable_BodyCell } from "./components/DataTable_BodyCell.tsx";
import { DataTable_BodyRow } from "./components/DataTable_BodyRow.tsx";
import { DataTable_HeaderCell } from "./components/DataTable_HeaderCell.tsx";
import { DataTable_HeaderRow } from "./components/DataTable_HeaderRow.tsx";
import { getTanstackTableColumns } from "./lib/getTanstackTableColumns.ts";

export type DataTable_BaseRow = { id: string };

export type DataTable_ColumnDef<GenericRow extends DataTable_BaseRow> = {
  suppress?: boolean;

  key?: string;
  field: Extract<keyof GenericRow, string>;
  title: string;
  size?: number;

  cellRenderer?: (props: {
    row: Row<GenericRow>;
    cell: Cell<GenericRow, unknown>;
  }) => ReactNode;
};

interface DataTableProps<GenericRow extends DataTable_BaseRow> {
  data: Array<GenericRow & { id: string }>;
  columns: Array<DataTable_ColumnDef<GenericRow>>;
  callback?: (row: GenericRow) => void;

  expandable?: boolean;
  expandedRenderer?: (props: { row: Row<GenericRow> }) => ReactNode;
  expandedClassName?: string;
}

export function DataTable<GenericRow>(
  props: DataTableProps<GenericRow & DataTable_BaseRow>,
) {
  const {
    data = [],
    columns = [],
    expandable = false,
    expandedRenderer,
    expandedClassName = "",
  } = props;

  const tanstackTableColumns = useMemo(() => {
    const columnDefsToPrepend: Array<
      ColumnDef<GenericRow & DataTable_BaseRow>
    > = [];

    if (expandable) {
      columnDefsToPrepend.push({
        id: "expander",
        size: 32,
        meta: {
          size: 32,
          asChild: true,
        },
        header: () => null,
        cell: ({ row }) => {
          return row.getCanExpand() ? (
            <div className={styles.DataTable_Expander}>
              {row.getIsExpanded() ? (
                <button onClick={() => row.toggleExpanded()}>
                  <IconChevronDown size={16} />
                </button>
              ) : (
                <button onClick={() => row.toggleExpanded()}>
                  <IconChevronRight size={16} />
                </button>
              )}
            </div>
          ) : null;
        },
      });
    }

    return [
      ...columnDefsToPrepend,
      ...getTanstackTableColumns<GenericRow>(columns),
    ];
  }, [columns, expandable]);

  // TODO: Expose this via a prop.
  function getRowCanExpand() {
    return expandable;
  }

  const tanstackTable = useReactTable({
    data,
    columns: tanstackTableColumns,
    getRowCanExpand: getRowCanExpand,
    getCoreRowModel: getCoreRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
  });

  return (
    <div className={styles.DataTable}>
      <table>
        <thead className={styles.DataTable_Header}>
          {tanstackTable.getHeaderGroups().map((headerGroup) => {
            return (
              <DataTable_HeaderRow
                key={headerGroup.id}
                headerGroup={headerGroup}
              >
                {headerGroup.headers.map((header) => (
                  <DataTable_HeaderCell key={header.id} header={header} />
                ))}
              </DataTable_HeaderRow>
            );
          })}
        </thead>
        <tbody className={styles.DataTable_Body}>
          {tanstackTable.getRowModel().rows.map((row) => (
            <DataTable_BodyRow
              key={row.id}
              row={row}
              expandedRenderer={expandedRenderer}
              expandedClassName={expandedClassName}
            >
              {row.getVisibleCells().map((cell) => (
                <DataTable_BodyCell key={cell.id} cell={cell} />
              ))}
            </DataTable_BodyRow>
          ))}
        </tbody>
      </table>
    </div>
  );
}
