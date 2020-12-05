import { Client } from 'api/orion-api';
import { inject } from 'aurelia-dependency-injection';
@inject(Client)
export class App {
  constructor(private api: Client){

  }
  public message: string = 'orion-frontend-api';

  activate(){
    this.api.list_Entities().then(data =>{
      this.message = data.length
      .toString();
    })
  }
}
