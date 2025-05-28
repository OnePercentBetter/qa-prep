// @ts-check
import { test, expect } from '@playwright/test';


test.describe('Login Functionality', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
  });

  // TC: LOGIN_001  – happy path
  test('LOGIN_001 valid login redirects to inventory', async ({ page }) => {
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', {name: 'Login'}).click();
    await expect(page).toHaveURL(/.*inventory.html/);
    await expect(page.locator('.title')).toHaveText('Products');
  });
  
  // TC: LOGIN_004 – invalid password
  test('LOGIN_004 shows error banner for wrong password', async ({ page }) => {
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('wrong_password');
    await page.getByRole('button', {name: 'Login'}).click();
    await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface');
    await expect(page).toHaveURL('https://www.saucedemo.com/');
  });
})



