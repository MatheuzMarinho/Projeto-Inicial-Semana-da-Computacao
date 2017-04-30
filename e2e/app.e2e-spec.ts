import { PowerPointPage } from './app.po';

describe('power-point App', () => {
  let page: PowerPointPage;

  beforeEach(() => {
    page = new PowerPointPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
