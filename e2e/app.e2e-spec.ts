import { DirtyPage } from './app.po';

describe('dirty App', function() {
  let page: DirtyPage;

  beforeEach(() => {
    page = new DirtyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
