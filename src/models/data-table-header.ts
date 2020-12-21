export interface ISortedHeader {
    headerKey: string;
    direction: string;
    isUsed?: boolean;
}

export class DataTableHeader {
    header: string;
    sorted?: ISortedHeader;
}