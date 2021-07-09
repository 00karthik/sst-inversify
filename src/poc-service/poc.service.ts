import { inject, injectable } from 'inversify';
import SERVICE_IDENTIFIER from './poc.identifier';

import { PocDataService } from './poc-data.service';

@injectable()
export class PocService {
  public name: string;
  public dataService: PocDataService;
  public constructor(@inject(SERVICE_IDENTIFIER.POC_DATA_SERVICE) pocDataService: PocDataService) {
    this.name = 'Samurai';
    this.dataService = pocDataService;
  }
  public getData(): string {
    return `${this.name} ${this.dataService.get()}`;
  }
}
