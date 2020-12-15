import { bindable } from 'aurelia-framework';
export class DialogConfirm  {
  @bindable confirmOpen;

  cancel = () =>{
    this.confirmOpen = false;
  }
}
