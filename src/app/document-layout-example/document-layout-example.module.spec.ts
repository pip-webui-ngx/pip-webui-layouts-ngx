import { DocumentLayoutExampleModule } from './document-layout-example.module';

describe('DocumentLayoutExampleModule', () => {
  let documentLayoutExampleModule: DocumentLayoutExampleModule;

  beforeEach(() => {
    documentLayoutExampleModule = new DocumentLayoutExampleModule();
  });

  it('should create an instance', () => {
    expect(documentLayoutExampleModule).toBeTruthy();
  });
});
