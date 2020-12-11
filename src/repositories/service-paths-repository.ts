import { ServicePathsModel } from './../models/service-paths-model';
import { Client, IRetrieveApiResourcesResponse } from 'api/orion-api';
import { inject } from 'aurelia-framework';
import { Repository } from './abstract-repository';

@inject(Client)
export class ServicePathsRepository extends Repository {
    constructor(private orionClient: Client) {
        super();
    }

    async getServicePaths(): Promise<ServicePathsModel> {
        let orionResponse = await this.orionClient.retrieve_API_Resources();
        let response = this.buildResponse<IRetrieveApiResourcesResponse>(orionResponse);        

        return new ServicePathsModel(response.items);
    }
}