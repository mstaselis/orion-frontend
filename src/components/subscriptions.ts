import { ISortedHeader } from './../models/data-table-header';
import { inject } from 'aurelia-framework';
import { SubscriptionsModel } from 'models/subscriptions-model';
import { SubscriptionsRepository } from 'repositories/subscriptions-repository';

@inject(SubscriptionsRepository)
export class Subscriptions {
  model: SubscriptionsModel;
  modalOpen: boolean;

  constructor(private repository: SubscriptionsRepository) {
    this.model = new SubscriptionsModel();
  }

  async activate() {
    await this.getData();
    this.modalOpen = true;
  }

  async pageChanged(offset: number) {
    this.model.setOffset(offset);
    await this.getData();
  }

  async sort(sortParams: ISortedHeader) {
    await this.getData(sortParams);
  }

  private async getData(sortParams?: ISortedHeader) {
    this.model = (await this.repository.getSubscriptions(this.model.req));
  }
}
