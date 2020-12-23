import { bindable } from 'aurelia-framework';

export class DataTable {
  @bindable showSearch: boolean;

  constructor(){
    this.showSearch = false;
  }
}
