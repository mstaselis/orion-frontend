import { IRetrieveApiResourcesResponse } from './../../api/orion-api';
import { bindable } from 'aurelia-framework';

export class DisplayItem {
  @bindable() resources: IRetrieveApiResourcesResponse;    
}
