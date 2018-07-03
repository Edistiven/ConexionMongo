import { Angularproyecto5toPage } from './app.po';

describe('angularproyecto5to App', function() {
  let page: Angularproyecto5toPage;

  beforeEach(() => {
    page = new Angularproyecto5toPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
