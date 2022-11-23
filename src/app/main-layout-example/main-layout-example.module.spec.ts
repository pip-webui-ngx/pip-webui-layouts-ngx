import { MainLayoutExampleModule } from './main-layout-example.module';

describe('MainLayoutExampleModule', () => {
  let mainLayoutExampleModule: MainLayoutExampleModule;

  beforeEach(() => {
    mainLayoutExampleModule = new MainLayoutExampleModule();
  });

  it('should create an instance', () => {
    expect(mainLayoutExampleModule).toBeTruthy();
  });
});
