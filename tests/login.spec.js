// @ts-check
import { test, expect } from '@playwright/test';


// TC: TITLE_CHECK
test('page has correct title', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await expect(page).toHaveTitle(/Swag Labs/);
});

test('successful login', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', {name: 'Login'}).click();
  await expect(page).toHaveURL(/.*inventory.html/);
  await expect(page.locator('.title')).toHaveText('Products');
});


