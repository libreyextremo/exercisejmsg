import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getSpanTitle() {
    return element(by.css('app-root span')).getText();
  }

  clickUserCommentButton() {
    return element(by.cssContainingText('button', 'message')).click();
  }

  getH3Text() {
    return element(by.css('app-root h3')).getText();
  }

  getCommentButton() {
    return element(by.cssContainingText('button', 'message')).getText();
  }


}
