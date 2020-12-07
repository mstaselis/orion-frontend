import { Client, IRetrieveApiResourcesResponse } from 'api/orion-api';
import { inject, bindable } from 'aurelia-framework';

@inject(Client)
export class ServicePaths {
  paths: IRetrieveApiResourcesResponse;

  constructor(private orionClient: Client) {
  }

  async activate() {
    this.paths = await this.orionClient.retrieve_API_Resources();
  }
}
