import { PocService } from './poc.service';
import { PocDataService } from './poc-data.service';

// application container is shared by all unit tests
import container from './poc.module';
import SERVICE_IDENTIFIER from './poc.identifier';

describe('Service layer', () => {
  beforeEach(() => {
    // create a snapshot so each unit test can modify
    // it without breaking other unit tests
    container.snapshot();
  });

  afterEach(() => {
    // Restore to last snapshot so each unit test
    // takes a clean copy of the application container
    container.restore();
  });

  // each test is executed with a snapshot of the container

  it('Mocking data service layer', () => {
    let mock = {
      get: () => {
        return 'hit with mock';
      },
    };

    container.unbind(SERVICE_IDENTIFIER.POC_DATA_SERVICE);
    container.bind<PocDataService>(SERVICE_IDENTIFIER.POC_DATA_SERVICE).toConstantValue(mock);
    let pocService = container.get<PocService>(SERVICE_IDENTIFIER.POC_SERVICE);
    console.log(pocService.getData());
    expect(pocService.getData()).toBe('Samurai hit with mock');
  });
});
