import { injectable } from 'inversify';

@injectable()
export class PocDataService {
  public get(): string {
    const desc = `data-layer`;
    return desc;
  }
}
