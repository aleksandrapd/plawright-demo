import { test, expect } from '@playwright/test';


test('add product to card and proceed to checkout', async ({ page }) => {

  await page.goto('https://automationexercise.com/');

  //accept cookies
  await page.getByRole('button', { name: 'Consent' }).click();

  //select product and add to cart
  await page.getByRole('link', { name: 'Products' }).click();
  await page.getByRole('link', { name: 'View Product' }).nth(3).click();
  await page.getByRole('button', { name: 'Add to cart' }).click();
  await page.getByRole('button', { name: 'Continue Shopping' }).click();
  await page.getByRole('link', { name: 'Cart' }).click();

  //verify product in cart and proceed to checkout
  await expect(page.getByRole('heading', { name: 'Stylish Dress' })).toBeVisible();
  await page.getByRole('cell', { name: 'Product Image' }).click();
  await page.getByText('Proceed To Checkout').click();
  await page.getByRole('button', { name: 'Continue On Cart' }).click();
  
});



test('create an account', async ({ page }) => {
  await page.goto('https://automationexercise.com/');
  await page.getByRole('button', { name: 'Consent' }).click();
  await page.getByRole('link', { name: 'Signup / Login' }).click();
  await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill('ivanka@ivankova.com');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'Name' }).fill('ivanka');
  await page.getByRole('textbox', { name: 'Name' }).press('Tab');
  await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill('ivanka@ivankova.com');
  await page.getByRole('button', { name: 'Signup' }).click();
  await page.getByRole('radio', { name: 'Mrs.' }).check();
  await page.getByRole('textbox', { name: 'Password *' }).fill('admin');
  await page.locator('#days').selectOption('8');
  await page.locator('#months').selectOption('8');
  await page.locator('#years').selectOption('1996');
  await page.getByRole('textbox', { name: 'First name *' }).fill('ivank');
  await page.getByRole('textbox', { name: 'First name *' }).press('Tab');
  await page.getByRole('textbox', { name: 'Last name *' }).fill('ivanka');
  await page.getByLabel('Country *').selectOption('United States');
  await page.getByRole('button', { name: 'Create Account' }).click();
  await page.getByRole('textbox', { name: 'Address * (Street address, P.' }).fill('a');
  await page.getByRole('textbox', { name: 'Address * (Street address, P.' }).fill('test');
  await page.getByRole('textbox', { name: 'State *' }).fill('texas');
  await page.getByRole('textbox', { name: 'City * Zipcode *' }).fill('test');
  await page.locator('#zipcode').fill('11');
  await page.getByRole('textbox', { name: 'Mobile Number *' }).fill('1');
  await page.getByRole('button', { name: 'Create Account' }).click();
  await expect(page.getByText('Account Created!')).toBeVisible();
});
