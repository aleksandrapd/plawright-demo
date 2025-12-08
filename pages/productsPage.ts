import { Page, Locator, expect } from '@playwright/test';

export class ProductsPage {
  readonly page: Page;
  readonly viewProductLinks: Locator;
  readonly addToCartButton: Locator;
  readonly successMessage: Locator;
  readonly continueShoppingButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.viewProductLinks = page.getByRole('link', { name: 'View Product' });
    this.addToCartButton = page.getByRole('button', { name: 'Add to cart' });
    this.successMessage = page.getByText('Your product has been added');
    this.continueShoppingButton = page.getByRole('button', { name: 'Continue Shopping' });
  }

  async selectProduct(index: number = 0) {
    await this.viewProductLinks.nth(index).click();
  }

  async addToCart() {
    await this.addToCartButton.click();
    await expect(this.successMessage).toBeVisible();
  }

  async continueShopping() {
    await this.continueShoppingButton.click();
  }
}