// @ts-check
import { test, expect } from '@playwright/test';

test.describe('CPA-PTS Search By BBL Functional Test', () => {
  test.beforeEach(async ({ page }) => {
    // Step 1: Access the Application
    await page.goto('https://stgcpy.csc.nycnet/');
    await expect(page).toHaveTitle(/City Pay/);
  });

  // TC: BBL_SEARCH_001 - P1 Priority - Basic BBL Search Test
  test('BBL_SEARCH_001 should successfully search by BBL and display results', async ({ page }) => {
    // Step 2: Navigate to Property Taxes
    await page.getByText('Property Taxes (Pay as a Guest)').click();
    
    // Step 3: Verify Search Criteria Tabs
    await expect(page.getByText('Search by BBL')).toBeVisible();
    await expect(page.getByText('Search by Address')).toBeVisible();
    
    // Verify "Search by BBL" tab is selected by default
    await expect(page.locator('[data-testid="bbl-tab"]').or(page.getByRole('tab', { name: 'Search by BBL' }))).toHaveAttribute('aria-selected', 'true');
    
    // Step 4: Perform BBL Search with test data
    const testBBL = '5000160150'; // Using a BBL from test data that has known good results
    
    await page.getByPlaceholder('Enter BBL').or(page.locator('input[name="bbl"]')).fill(testBBL);
    await page.getByRole('button', { name: 'Search' }).or(page.locator('button[type="submit"]')).click();
    
    // Step 5: Verify Search Results
    await expect(page).toHaveURL(/.*search.*results.*/);
    
    // Verify property information is displayed
    await expect(page.getByText(/Property/i)).toBeVisible();
    await expect(page.getByText(/Tax/i)).toBeVisible();
    
    // Verify BBL appears in results
    await expect(page.getByText(testBBL)).toBeVisible();
    
    // Verify financial information sections are present
    await expect(page.locator('text=/Total.*Owed/i').or(page.locator('text=/Amount.*Due/i'))).toBeVisible();
  });

  // TC: BBL_SEARCH_002 - Test with BBL that has no current taxes
  test('BBL_SEARCH_002 should handle BBL with no current taxes', async ({ page }) => {
    await page.getByText('Property Taxes (Pay as a Guest)').click();
    
    const testBBL = '5000280093'; // BBL with no current taxes from test data
    
    await page.getByPlaceholder('Enter BBL').or(page.locator('input[name="bbl"]')).fill(testBBL);
    await page.getByRole('button', { name: 'Search' }).or(page.locator('button[type="submit"]')).click();
    
    // Verify results page loads
    await expect(page).toHaveURL(/.*search.*results.*/);
    
    // Verify property information is displayed
    await expect(page.getByText(testBBL)).toBeVisible();
    
    // Verify "No data available" or $0.00 current amount due
    await expect(
      page.getByText(/No data available/i)
        .or(page.getByText(/\$0\.00/))
        .or(page.getByText(/Amount Due Today.*\$0/))
    ).toBeVisible();
  });

  // TC: BBL_SEARCH_003 - Test with BBL that has current taxes
  test('BBL_SEARCH_003 should display tax details for BBL with current taxes', async ({ page }) => {
    await page.getByText('Property Taxes (Pay as a Guest)').click();
    
    const testBBL = '5000170091'; // BBL with current taxes from test data
    
    await page.getByPlaceholder('Enter BBL').or(page.locator('input[name="bbl"]')).fill(testBBL);
    await page.getByRole('button', { name: 'Search' }).or(page.locator('button[type="submit"]')).click();
    
    // Verify results page loads
    await expect(page).toHaveURL(/.*search.*results.*/);
    
    // Verify property information is displayed
    await expect(page.getByText(testBBL)).toBeVisible();
    
    // Verify tax table is present and shows data
    await expect(page.locator('table').or(page.getByText(/Property Tax/i))).toBeVisible();
    
    // Verify amounts are displayed (should not be $0.00)
    const amountElements = page.locator('text=/\\$[1-9][0-9,]*/');
    await expect(amountElements.first()).toBeVisible();
  });
}); 