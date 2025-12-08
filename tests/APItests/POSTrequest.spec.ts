import { test, expect } from '@playwright/test';

test('POST new user to JSONPlaceholder', async ({ request }) => {
  const newUser = {
    name: 'Jane Doe',
    username: 'janedoe',
    email: 'jane@example.com'
  };

  const response = await request.post('https://jsonplaceholder.typicode.com/users', {
    data: newUser
  });

  expect(response.status()).toBe(201); 

  const createdUser = await response.json();

  expect(createdUser.name).toBe(newUser.name);
  expect(createdUser.username).toBe(newUser.username);

  console.log('Created user:', createdUser);
});