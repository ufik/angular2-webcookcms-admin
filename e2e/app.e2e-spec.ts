import { WebcookcmsAppPage } from './app.po';

describe('webcookcms-app App', function() {
  let page: WebcookcmsAppPage;

  beforeEach(() => {
    page = new WebcookcmsAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
