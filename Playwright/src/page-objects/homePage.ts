import { expect, type Locator, type Page } from '@playwright/test';
import { BasePage } from './basePage';

export class HomePage extends BasePage {
  readonly page: Page;
  private url: string;
  private financeLink: any;
  private titleRegExp: RegExp;
  private searchBar: any;
  private searchButton: any;
  private searchResultHeader: any;
  private aboutButton: any;
  private aboutPageHeader: any;
  private exchangeRatesButton: any;
  private currencyUSD: any;
  private contactsLink: any;
  private contactsHeader: any;
  private advertiseventLink: any;
  private advertiseventHeader: any;
  private importantButton: any;
  private importantHeader: any;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.url = 'https://3dnews.ru/';
    this.financeLink = page.locator(
      'a[href="/it-finance"][title="it-финансы"]'
    );
    this.searchBar = page.locator('//input[@name="query-input"]');
    this.searchButton = page.locator('//input[@name="search"]');
    this.searchResultHeader = page.locator('span.cctitle');
    this.aboutButton = page.locator('//a[@href="/about" and text()="О сайте"]');
    this.aboutPageHeader = page.locator(
      '//span[@class="cctitle" and text()="About 3DNews"]'
    );
    this.titleRegExp = /Все самое интересное из мира IT-индустрии/;
    this.exchangeRatesButton = page.locator(
      '//span[@id="toggle_currencyTicker"]'
    );
    this.currencyUSD = page.locator('//span[@class="cvUSD"]');
    this.contactsLink = page.locator(
      '//a[@class="footer" and text()="Контакты"]'
    );
    this.contactsHeader = page.locator(
      '//span[@class="cctitle" and text()="Контакты"]'
    );
    this.advertiseventLink = page.locator(
      '//a[@class="footer" and text()="Реклама"]'
    );
    this.advertiseventHeader = page.locator(
      '//span[@class="cctitle" and text()="Требования к размещению рекламных материалов"]'
    );

    this.importantButton = page.locator(
      '//a[@href="/news/#important" and text()="Главное"]'
    );
    this.importantHeader = page.locator('//span[@class="bcfirst" and text()="Технологии и рынок IT. Новости"]')
  }

  async openPage() {
    await super.openPage(this.url);
  }

  async clickOnFinanceLink() {
    await this.financeLink.click();
  }

  async checkTitle() {
    await expect(this.page).toHaveTitle(this.titleRegExp);
  }

  async searchFromMain() {
    await this.searchBar.fill('123');
    await this.searchButton.click();
  }

  async checkSearchIsWorking() {
    await expect(this.searchResultHeader).toBeVisible();
  }

  async aboutButtonClick() {
    await this.aboutButton.click();
  }

  async checkAboutPage() {
    await expect(this.aboutPageHeader).toBeVisible();
  }

  async checkCurrencyBlock() {
    await this.exchangeRatesButton.click();
    await expect(this.currencyUSD).toBeVisible();
  }

  async checkContactsLink() {
    await this.contactsLink.click();
    await expect(this.contactsHeader).toContainText('Контакты');
  }

  async checkAdvertisementLink() {
    await this.advertiseventLink.click();
    await expect(this.advertiseventHeader).toContainText(
      'Требования к размещению рекламных материалов'
    );
  }

  async checkImportantButton() {
    await this.importantButton.click();
    await expect(this.importantHeader).toContainText(
      'Технологии и рынок IT. Новости'
    );
  }
}
