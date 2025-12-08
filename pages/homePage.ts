import { Page, Locator } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly consentButton: Locator;
  readonly productsLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.consentButton = page.getByRole('button', { name: 'Consent' });
    this.productsLink = page.getByRole('link', { name: 'Products' });
  }

  async goto() {
    await this.page.goto('https://automationexercise.com/');
  }

  async acceptCookies() {
    await this.consentButton.click();
  }

  async navigateToProducts() {
    await this.productsLink.click();
  }
}
