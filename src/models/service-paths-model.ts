import { IRetrieveApiResourcesResponse } from "api/orion-api";

export class ServicePathsModel {
    result: IRetrieveApiResourcesResponse;

    constructor(result: IRetrieveApiResourcesResponse){
        this.result = result;
    }
}
