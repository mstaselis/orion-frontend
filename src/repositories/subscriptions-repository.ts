import { ApiResponse } from './api-response';
import { Client, ListSubscriptionsResponse, Options14 } from './../api/orion-api';
import { inject } from 'aurelia-framework';
import { Repository } from './abstract-repository';
import { PagedRequest } from 'models/api/paged-request';

@inject(Client)
export class SubscriptionsRepository extends Repository {
    constructor(private orionClient: Client) {
        super();
    }

    async getSubscriptions(request: PagedRequest<Options14>): Promise<ApiResponse<ListSubscriptionsResponse[]>> {
        let orionResponse = await this.orionClient.list_Subscriptions(request.limit, request.offset, request.options);
        let response = this.buildResponse<ListSubscriptionsResponse[]>(orionResponse);

        return response;
    }
}