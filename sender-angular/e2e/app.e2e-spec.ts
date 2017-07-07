import { SenderAngularPage } from './app.po';

describe('sender-angular App', () => {
  let page: SenderAngularPage;

  beforeEach(() => {
    page = new SenderAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
