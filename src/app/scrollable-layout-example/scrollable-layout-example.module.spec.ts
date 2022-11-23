import { ScrollableLayoutExampleModule } from './scrollable-layout-example.module';

describe('ScrollableLayoutExampleModule', () => {
  let scrollableLayoutExampleModule: ScrollableLayoutExampleModule;

  beforeEach(() => {
    scrollableLayoutExampleModule = new ScrollableLayoutExampleModule();
  });

  it('should create an instance', () => {
    expect(scrollableLayoutExampleModule).toBeTruthy();
  });
});
