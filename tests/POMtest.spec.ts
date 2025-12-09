import { HomePage } from '../pages/homePage';
import { ProductsPage } from '../pages/productsPage';
import { CartPage } from '../pages/cartPage';
import { test, expect } from '@playwright/test';

let homePage: HomePage;
let productsPage: ProductsPage;
let cartPage: CartPage;

test.beforeEach(async ({ page }) => {
  homePage = new HomePage(page);
  productsPage = new ProductsPage(page);
  cartPage = new CartPage(page);
});

test('add product to cart using POM', async ({ page }) => {

  await homePage.goto();
  //await homePage.acceptCookies();
  await homePage.navigateToProducts();

  await productsPage.selectProduct(3); 
  await productsPage.addToCart();
  await productsPage.continueShopping();

  await cartPage.openCart();
  await cartPage.verifyProduct('Stylish Dress');
  await cartPage.proceedToCheckout();
});