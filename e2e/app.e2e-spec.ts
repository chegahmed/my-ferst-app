import { MyFerstAppPage } from './app.po';

describe('my-ferst-app App', () => {
  let page: MyFerstAppPage;

  beforeEach(() => {
    page = new MyFerstAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
