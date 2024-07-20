import { expect, type Locator, type Page } from '@playwright/test';

import {BasePage} from './basePage';
import {HomePage} from './homePage';
import {FinancePage} from './financePage';

export default class PageFactory {
  static getPage(page: Page, pageName: string) {
    switch (pageName) {
      case 'HomePage':
        return new HomePage(page);
      case 'FinancePage':
        return new FinancePage(page);
      default:
        return new BasePage(page);
    }
  }
}
