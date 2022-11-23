import { TilesLayoutExampleModule } from './tiles-layout-example.module';

describe('TilesLayoutExampleModule', () => {
  let tilesLayoutExampleModule: TilesLayoutExampleModule;

  beforeEach(() => {
    tilesLayoutExampleModule = new TilesLayoutExampleModule();
  });

  it('should create an instance', () => {
    expect(tilesLayoutExampleModule).toBeTruthy();
  });
});
