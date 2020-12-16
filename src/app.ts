import { bindable, inject } from 'aurelia-framework';
import { NavigationInstruction, RouteConfig, Router, RouterConfiguration } from 'aurelia-router';
import { EventAggregator, Subscription } from 'aurelia-event-aggregator';

const MS_FOR_LOADER_BAR_TO_APPEAR = 50;

@inject(EventAggregator)
export class App {
  private router!: Router;
  private readonly subscriptions: Subscription[] = [];
  @bindable isLoading: boolean;

  constructor(private ea: EventAggregator) { }

  activate(): void {
    let processingSubscription = this.ea.subscribe('router:navigation:processing', this.showLoaderBar);
    let completeSubscription = this.ea.subscribe('router:navigation:complete', this.hideLoaderBar);
    let apiError = this.ea.subscribe('api:error', this.apiError);

    this.subscriptions.push(processingSubscription, completeSubscription, apiError);
  }

  deactivate(): void {
    for (let subscription of this.subscriptions) {
      subscription.dispose();
    }
  }

  configureRouter(config: RouterConfiguration, router: Router): void {
    this.router = router;

    const handleUnknownRoutes = (instruction: NavigationInstruction): RouteConfig => {
      return { route: 'not-found', moduleId: 'components/not-found' };
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
      { route: 'registrations', name: 'registrations', title: 'Registrations', nav: true, moduleId: 'components/registrations' },
      { route: 'service-paths', name: 'service-paths', title: 'Service paths', nav: true, moduleId: 'components/service-paths' }
    ]);
  }

  private showLoaderBar = (): void => {
    setTimeout(() => {
      if (this.router.isNavigating) {
        this.isLoading = true;
      }
  }, MS_FOR_LOADER_BAR_TO_APPEAR);
    
  };

  private hideLoaderBar = (): void => {
    this.isLoading = false;
  };

  private apiError = (data): void => {
    console.log(data);
  };
}
