import { DataTableHeader } from "./data-table-header";

export class DataTableModel<T> {
    headers: DataTableHeader[];
    items: T[];
    total: number;  
    pageSize: number;  
}