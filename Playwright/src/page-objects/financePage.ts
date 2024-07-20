import { expect, type Locator, type Page } from '@playwright/test';
import { BasePage } from './basePage';

export class FinancePage extends BasePage {
  readonly page: Page;
  private url: string;
  private titleRegExp: any;
  private financeHeader: any;
  private overviewTitle: any;
  private universalHeader: any;
  private universalFooter: any;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.url = 'https://3dnews.ru/it-finance';
    this.titleRegExp = /IT-финансы/;
    this.financeHeader = page.locator(
      '//span[@class="bcfirst" and text()="IT-финансы"]'
    );
    this.overviewTitle = page.locator(
      '//span[@class="left strong" and text()="Свежие обзоры"]'
    );
    this.universalFooter = page.locator(
      '//div[contains(@class, "footer-sub")]'
    );
    this.universalHeader = page.locator('//div[@id="stripe"]');
  }

  async openPage() {
    await super.openPage(this.url);
  }

  async checkTitle() {
    await expect(this.page).toHaveTitle(this.titleRegExp);
  }

  async checkHeader() {
    await expect(this.financeHeader).toBeVisible();
  }

  async checkOverviewTitle() {
    await expect(this.overviewTitle).toBeVisible();
  }

  async checkFooterAndHeader() {
    await expect(this.universalFooter).toBeVisible();
    await expect(this.universalHeader).toBeVisible();
  }
}
