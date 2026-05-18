import { Page, Locator } from '@playwright/test';

export class BasePage {
  readonly page: Page;
  readonly headerTitle: Locator;

  constructor(page: Page) {
    this.page = page;
    this.headerTitle = page.locator('.oxd-topbar-header-title');
  }

  async goTo(url: string) {
    await this.page.goto(url, { 
      waitUntil: 'networkidle' 
    });
  }

  async clickElement(locator: Locator) {
    await locator.waitFor({ state: 'visible' });
    await locator.click();
  }
}