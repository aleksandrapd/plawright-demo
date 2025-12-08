import { HomePage } from '../pages/homePage.ts';
import { ProductsPage } from '../pages/productsPage.ts';
import { CartPage } from '../pages/cartPage.ts';
import { test, expect } from '@playwright/test';



test('add product to cart using POM', async ({ page }) => {
  const homePage = new HomePage(page);
  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);

  await homePage.goto();
  await homePage.acceptCookies();
  await homePage.navigateToProducts();

  await productsPage.selectProduct(3); 
  await productsPage.addToCart();
  await productsPage.continueShopping();

  await cartPage.openCart();
  await cartPage.verifyProduct('Stylish Dress');
  await cartPage.proceedToCheckout();
});