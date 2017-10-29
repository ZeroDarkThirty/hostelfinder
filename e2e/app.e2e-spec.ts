import { HostelHuntPage } from './app.po';

describe('hostel-hunt App', () => {
  let page: HostelHuntPage;

  beforeEach(() => {
    page = new HostelHuntPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
