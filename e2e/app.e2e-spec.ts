import { PunyakshetraaluPage } from './app.po';

describe('punyakshetraalu App', () => {
  let page: PunyakshetraaluPage;

  beforeEach(() => {
    page = new PunyakshetraaluPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
