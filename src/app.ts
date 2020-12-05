import { Client } from 'api/orion-api';
import { inject } from 'aurelia-dependency-injection';
import { NavigationInstruction, RouteConfig, Router, RouterConfiguration } from 'aurelia-router';

@inject(Client)
export class App {
  private router!: Router;

  constructor(private api: Client) {
  }

  activate() {
    /*this.api.list_Entities().then(data => {
      this.message = data.length.toString();
    })*/
  }

  configureRouter(config: RouterConfiguration, router: Router): void {
    this.router = router;

    const handleUnknownRoutes = (instruction: NavigationInstruction): RouteConfig => {
      return { route: 'not-found', moduleId: 'not-found' };
    }

    config.mapUnknownRoutes(handleUnknownRoutes);

    config.title = 'Orion';
    config.options.pushState = true;
    config.options.root = '/';
    config.map([
      { route: ['', 'home'], name: 'home', title: 'Home', nav: true, moduleId: 'components/index' },
      { route: 'entities', name: 'entities', title: 'Entities', nav: true, moduleId: 'components/entities' },
      { route: 'types', name: 'types', title: 'Types', nav: true, moduleId: 'components/types' },
      { route: 'subscriptions', name: 'subscriptions', title: 'Subscriptions', nav: true, moduleId: 'components/subscriptions' },
      { route: 'registrations', name: 'registrations', title: 'Registrations', nav: true, moduleId: 'components/registrations' }
    ]);
  }
}
