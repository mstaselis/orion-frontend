import { IRetrieveApiResourcesResponse } from './../../api/orion-api';
import { bindable } from 'aurelia-framework';

export class DisplayItem {
  @bindable() resources: IRetrieveApiResourcesResponse;   

  activate(){
    console.log(this.resources.entities_url);
  }
}
