import { IListSubscriptionsResponse } from './../api/orion-api';
import { DataTableModel } from './data-table-model';

export class SubscriptionsModel extends DataTableModel<IListSubscriptionsResponse>{
    constructor() {
        super();
        this.headers = ['Id', 'Description', 'Expires', 'Status', 'Throttling'];
    }
}