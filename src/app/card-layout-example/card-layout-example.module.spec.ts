import { CardLayoutExampleModule } from './card-layout-example.module';

describe('CardLayoutExampleModule', () => {
  let cardLayoutExampleModule: CardLayoutExampleModule;

  beforeEach(() => {
    cardLayoutExampleModule = new CardLayoutExampleModule();
  });

  it('should create an instance', () => {
    expect(cardLayoutExampleModule).toBeTruthy();
  });
});
