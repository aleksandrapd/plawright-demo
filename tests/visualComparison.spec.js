import { HomePage } from '../pages/homePage';
import { ProductsPage } from '../pages/productsPage';
import { CartPage } from '../pages/cartPage';
import { test, expect } from '@playwright/test';

let homePage;
let productsPage;
let cartPage;

test.beforeEach(async ({ page }) => {
  homePage = new HomePage(page);
  productsPage = new ProductsPage(page);
  cartPage = new CartPage(page);
});

test('add product to cart - visual check using toHaveScreenshot()', async ({ page }) => {

  await homePage.goto();
  await homePage.acceptCookies();
  await homePage.navigateToProducts();
  await productsPage.selectProduct(3);
  await productsPage.addToCart();
  await productsPage.continueShopping();
  await cartPage.openCart();

  await expect(page).toHaveScreenshot();  

  await cartPage.verifyProduct('Stylish Dress');
  await cartPage.proceedToCheckout();
});


test('add product to cart - visual check with pre-uploaded screenshot', async ({ page }) => {


  await homePage.goto();
  await homePage.acceptCookies();
  await homePage.navigateToProducts();
  await productsPage.selectProduct(3);
  await productsPage.addToCart();
  await productsPage.continueShopping();
  await cartPage.openCart();

  expect(await page.screenshot()).toMatchSnapshot('blouse.jpg');

  await cartPage.verifyProduct('Stylish Dress');
  await cartPage.proceedToCheckout();
});