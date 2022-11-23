import { FxLayoutExampleModule } from './fx-layout-example.module';

describe('FxLayoutExampleModule', () => {
  let fxLayoutExampleModule: FxLayoutExampleModule;

  beforeEach(() => {
    fxLayoutExampleModule = new FxLayoutExampleModule();
  });

  it('should create an instance', () => {
    expect(fxLayoutExampleModule).toBeTruthy();
  });
});
