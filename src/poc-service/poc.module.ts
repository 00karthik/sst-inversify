import 'reflect-metadata';
import { Container } from 'inversify';

import { PocDataService } from './poc-data.service';
import { PocService } from './poc.service';
import SERVICE_IDENTIFIER from './poc.identifier';

const container = new Container();

container.bind<PocDataService>(SERVICE_IDENTIFIER.POC_DATA_SERVICE).to(PocDataService);
container.bind<PocService>(SERVICE_IDENTIFIER.POC_SERVICE).to(PocService);

export default container;
