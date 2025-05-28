// @ts-check
import { test, expect } from '@playwright/test';


// TC: TITLE_CHECK
test('page has correct title', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await expect(page).toHaveTitle(/Swag Labs/);
});