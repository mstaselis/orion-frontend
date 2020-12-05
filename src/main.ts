import { Client } from 'api/orion-api';
import { HttpClient } from 'aurelia-fetch-client';
import { Aurelia } from 'aurelia-framework';
import environment from './environment';

export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .feature('resources');

  aurelia.use.developmentLogging(environment.debug ? 'debug' : 'warn');

  if (environment.testing) {
    aurelia.use.plugin('aurelia-testing');
  }

  let http = new HttpClient();
  http.configure(config => {
    config
      .useStandardConfiguration()
      .withDefaults({
        headers: {         
        }
      })      
  });

  aurelia.container.registerInstance(HttpClient, http); 
  aurelia.container.registerHandler(Client, c => new Client(environment.orionUrl, c.get(HttpClient)));

  aurelia.start().then(() => aurelia.setRoot());
}
