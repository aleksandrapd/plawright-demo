import { test, expect } from '@playwright/test';

test('GET user data from JSONPlaceholder', async ({ request }) => {
  const response = await request.get('https://jsonplaceholder.typicode.com/users/1');

  expect(response.status()).toBe(200);

  const user = await response.json();

  expect(user.id).toBe(1);
  expect(user.username).toBeTruthy();
  expect(user.email).toContain('@');

  console.log('User data:', user);
});