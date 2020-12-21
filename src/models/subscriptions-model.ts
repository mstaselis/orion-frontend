import { IListSubscriptionsResponse, Options14 } from './../api/orion-api';
import { DataTableModel } from './data-table-model';

export class SubscriptionsModel extends DataTableModel<IListSubscriptionsResponse>{
    private PAGE_SIZE = 10;

    req = {
        limit: this.PAGE_SIZE,
        offset: 0,
        options: Options14.Count
    };

    constructor(items: IListSubscriptionsResponse[] = null, total: number = null) {
        super();
        this.headers = [
            {
                header: 'Id',
                sorted: {
                    headerKey: 'id',
                    direction: 'asc'
                }
            },
            {
                header: 'Description'
            },
            {
                header: 'Expires'
            },
            {
                header: 'Status'
            },
            {
                header: 'Throttling'
            }
        ];
        this.items = items;
        this.total = total;
        this.pageSize = this.PAGE_SIZE;
    }

    setOffset(offset: number) {
        this.req.offset = offset;
    }
}