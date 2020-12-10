import { ApiResponse } from './api-response';
import { OrionResponse } from './../api/orion-api';

export abstract class Repository {
    protected buildResponse<T>(orionResponse: OrionResponse<T>): ApiResponse<T> {
        let response: ApiResponse<T> = new ApiResponse<T>();
        response.items = orionResponse.result;
        response.totalNumber = orionResponse.headers['fiware-total-count']

        return response;
    }
}