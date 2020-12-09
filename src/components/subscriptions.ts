import { ListSubscriptionsResponse } from './../api/orion-api';
import { DataTableModel } from './../models/data-table-model';
import { inject, bindable } from 'aurelia-framework';
import { Client } from "api/orion-api";
import { SubscriptionsModel } from 'models/subscriptions-model';

@inject(Client)
export class Subscriptions {
  message: string;
  model: SubscriptionsModel;

  constructor(private orionClient: Client) {
    this.model = new SubscriptionsModel();      
  }

  async activate() {
    this.model.items = (await this.orionClient.list_Subscriptions());
  }
}
