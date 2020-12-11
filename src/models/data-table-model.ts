import { Pager } from "resources/elements/pager";

export class DataTableModel<T> {
    headers: string[];
    items: T[];
    total: number;  
    pageSize: number;  
}