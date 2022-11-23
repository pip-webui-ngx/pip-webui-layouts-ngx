import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should contain "Layouts" in appbar', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Layouts');
  });
});
