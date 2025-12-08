import { Page, Locator, expect } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly cartLink: Locator;
  readonly proceedToCheckoutButton: Locator;
  readonly continueOnCartButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartLink = page.getByRole('link', { name: 'Cart' });
    this.proceedToCheckoutButton = page.getByText('Proceed To Checkout');
    this.continueOnCartButton = page.getByRole('button', { name: 'Continue On Cart' });
  }

  async openCart() {
    await this.cartLink.click();
  }

  async verifyProduct(productName: string) {
    await expect(this.page.getByRole('cell', { name: productName })).toBeVisible();
  }

  async proceedToCheckout() {
    await this.proceedToCheckoutButton.click();
    await this.continueOnCartButton.click();
  }
}
