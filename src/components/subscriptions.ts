import { PagedRequest } from 'models/api/paged-request';
import { Options14 } from './../api/orion-api';
import { inject } from 'aurelia-framework';
import { SubscriptionsModel } from 'models/subscriptions-model';
import { SubscriptionsRepository } from 'repositories/subscriptions-repository';

@inject(SubscriptionsRepository)
export class Subscriptions {
  message: string;
  model: SubscriptionsModel;

  constructor(private repository: SubscriptionsRepository) {
    this.model = new SubscriptionsModel();
  }

  async activate() {
    let req: PagedRequest<Options14> = {
      limit: 10,
      offset: 0
    };

    let response = (await this.repository.getSubscriptions(req));
    this.model.items = response.items;

    console.log(response.totalNumber);
  }
}
