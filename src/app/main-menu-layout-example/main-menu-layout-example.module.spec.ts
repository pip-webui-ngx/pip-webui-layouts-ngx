import { MainMenuLayoutExampleModule } from './main-menu-layout-example.module';

describe('MainMenuLayoutExampleModule', () => {
  let mainMenuLayoutExampleModule: MainMenuLayoutExampleModule;

  beforeEach(() => {
    mainMenuLayoutExampleModule = new MainMenuLayoutExampleModule();
  });

  it('should create an instance', () => {
    expect(mainMenuLayoutExampleModule).toBeTruthy();
  });
});
