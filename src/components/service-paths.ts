import { ServicePathsModel } from './../models/service-paths-model';
import { Client } from 'api/orion-api';
import { inject } from 'aurelia-framework';
import { ServicePathsRepository } from 'repositories/service-paths-repository';

@inject(ServicePathsRepository)
export class ServicePaths {
  model: ServicePathsModel;

  constructor(private repository: ServicePathsRepository) {
  }

  async activate() {
    this.model = await this.repository.getServicePaths();
  }
}
