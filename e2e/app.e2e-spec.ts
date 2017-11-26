import { AppPage } from './app.po';

describe('exercisejmsg App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should open main page', () => {
    page.navigateTo();
    expect(page.getSpanTitle()).toEqual('Exercise by Jose Maria Sobrinos Garcia');
  });

  it('should open main page, click comment button and navigate to user page', () => {
    page.navigateTo();
    expect(page.getCommentButton()).toBe("message"); // it is a comment button
    page.clickUserCommentButton();
    // check toolbar is on the top of the page
    expect(page.getSpanTitle()).toBe("Exercise by Jose Maria Sobrinos Garcia");
    // check user detail page is opened
    expect(page.getH3Text()).toBe("User information");

  });
});
