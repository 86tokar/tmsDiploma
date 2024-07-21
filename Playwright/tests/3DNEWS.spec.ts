import { test, expect } from '@playwright/test';
import { HomePage } from '../src/page-objects/homePage';
import { FinancePage } from '../src/page-objects/financePage';
import PageFactory from '../src/page-objects/pageFactory';

test.describe.configure({ mode: 'serial', retries: 0 });
test.describe('First block', () => {
  test('Home page title', async ({ page }) => {
    // const homePage = new HomePage(page);
    const homePage = PageFactory.getPage(page, 'HomePage') as HomePage;
    await homePage.openPage();
    await homePage.checkTitle();
  });

  test('Finance page title', async ({ page }) => {
    // const homePage = new HomePage(page);
    const homePage = PageFactory.getPage(page, 'HomePage') as HomePage;
    // const financePage = new FinancePage(page);
    const financePage = PageFactory.getPage(page, 'FinancePage') as FinancePage;

    await homePage.openPage();
    await homePage.clickOnFinanceLink();
    await financePage.checkTitle();
  });

  test('Search from Main', async ({ page }) => {
    // const homePage = new HomePage(page);
    const homePage = PageFactory.getPage(page, 'HomePage') as HomePage;
    await homePage.openPage();
    await homePage.searchFromMain();
    await homePage.checkSearchIsWorking();
  });

  test('Currency block present', async ({ page }) => {
    // const homePage = new HomePage(page);
    const homePage = PageFactory.getPage(page, 'HomePage') as HomePage;
    await homePage.openPage();
    await homePage.checkCurrencyBlock();
  });

  test('Contacts link from footer', async ({ page }) => {
    // const homePage = new HomePage(page);
    const homePage = PageFactory.getPage(page, 'HomePage') as HomePage;
    await homePage.openPage();
    await homePage.checkContactsLink();
  });

  test('Advertisement link from footer', async ({ page }) => {
    // const homePage = new HomePage(page);
    const homePage = PageFactory.getPage(page, 'HomePage') as HomePage;
    await homePage.openPage();
    await homePage.checkAdvertisementLink();
  });

  test('About page check', async ({ page }) => {
    // const homePage = new HomePage(page);
    const homePage = PageFactory.getPage(page, 'HomePage') as HomePage;
    await homePage.openPage();
    await homePage.aboutButtonClick();
    await homePage.checkAboutPage();
  });

  test('Main News link from Home Page', async ({ page }) => {
    // const homePage = new HomePage(page);
    const homePage = PageFactory.getPage(page, 'HomePage') as HomePage;
    await homePage.openPage();
    await homePage.checkImportantButton();
  });

  test('Finance page Header and overview check', async ({ page }) => {
    // const financePage = new FinancePage(page);
    const financePage = PageFactory.getPage(page, 'FinancePage') as FinancePage;
    await financePage.openPage();
    await financePage.checkHeader();
    await financePage.checkOverviewTitle();
  });

  test('Header and footer are visible on Finance page', async ({
    page,
  }) => {
    // const financePage = new FinancePage(page);
    const financePage = PageFactory.getPage(page, 'FinancePage') as FinancePage;
    await financePage.openPage();
    await financePage.checkFooterAndHeader();
  });
});
