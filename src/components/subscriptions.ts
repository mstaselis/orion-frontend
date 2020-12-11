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
    await this.getData();
  }

  async pageChanged(offset: number) {   
    this.model.setOffset(offset);
    await this.getData();
  }

  private async getData(){
    this.model = (await this.repository.getSubscriptions(this.model.req));
  }
}
