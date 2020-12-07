import { inject } from 'aurelia-framework';
import { Client } from "api/orion-api";

@inject(Client)
export class Subscriptions {
  message: string;

  constructor(private orionClient: Client) { }

  async activate(){
    this.message = (await this.orionClient.list_Subscriptions()).length.toString();
  }
}
