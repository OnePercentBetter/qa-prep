# CPA-PTS Add Items to Cart Functional Test

## Test Case ID
CPA-PTS_Add_Items_to_Cart_Functional_Test

## Priority
P1

## Objective
Verify that users can successfully add tax items to their cart for payment

## Prerequisites
- Access to City Pay Payments Online (https://stgcpy.csc.nycnet/)
- Valid property addresses with current taxes due
- Internet connection
- Web browser (Chrome, Firefox, or Edge recommended)

## Test Data
The following addresses with current taxes due will be used for testing:
1. 59 VICTORY BLVD., STATEN ISLAND, NY 10301-2937 (Multiple tax types)
2. 12 CRESCENT AVE., STATEN ISLAND, NY 10301 (Property Tax with interest)
3. 2001 NEPTUNE AVE., BROOKLYN, NY 11224-2521 (Property Tax and DOF Dishonored Payment)
4. 48 CRESCENT AVE., STATEN ISLAND, NY 10301-1755 (Single Property Tax entry)

## Test Steps

### Step 1: Access the Application
1. Open a web browser
2. Navigate to https://stgcpy.csc.nycnet/
3. Verify the City Pay Payments Online page loads successfully

### Step 2: Navigate to Property Taxes
1. Locate the "Common payments and forms" section
2. Click on "Property Taxes (Pay as a Guest)" option
3. Verify the Property Taxes page loads successfully

### Step 3: Select Address Search
1. Verify that the Search Criteria are displayed in the form of tabs:
   - Search by BBL
   - Search by Address
2. Click the "Search by Address" tab
3. Verify the address search form is displayed

### Step 4: Perform Address Search
1. Enter the street number in the "Street Number" field
2. Enter the street name in the "Street Name" field
3. Select the borough from the dropdown
4. (Optional) Enter the zip code
5. Click the "Search" button
6. Verify the Search Results page loads successfully

### Step 5: Add Items to Cart
1. Verify the "Add selected items to cart" button is present
2. Select one or more tax items from the list
3. Click the "Add selected items to cart" button
4. Verify the items are added to the cart
5. Verify the cart total updates correctly

### Step 6: Verify Cart Contents
1. Verify the cart icon shows the correct number of items
2. Verify the cart total matches the sum of selected items
3. Verify the selected items are listed in the cart

## Expected Results
- Users can successfully add tax items to their cart
- Cart total updates correctly based on selected items
- Cart icon reflects the correct number of items
- Selected items are properly listed in the cart

## Test Execution Notes
- Test with different combinations of tax items
- Verify cart behavior with single and multiple items
- Document any discrepancies between expected and actual results
- Note any system performance issues or delays
- Capture screenshots of any errors or unexpected behavior
- Note any address variation issues in the dropdown selection

## Pass/Fail Criteria
- PASS: All test steps execute successfully and expected results are achieved
- FAIL: Any test step fails or expected results are not achieved

## Test Environment
- Browser: [Version 129.0.2792.52 (Official build) (64-bit)]
- Network Environment: []
- Operating System: Windows 10

## Test Execution Date
06/11/2025

## Tester
Salah Alhudais

## Test Results
| Test Case | Status | Notes |
|-----------|--------|-------|
| 59 VICTORY BLVD | PASS | - Successfully added items to cart
- Cart shows 3 items
- Payment Total: $2,075.56
- Multiple tax types present (Property Tax, DOB Sign Charge, HPD Emergency Demolition)
- Cart icon updates correctly
- Items remain in cart after selection |

## Summary
- Total Test Cases: 1
- Passed: 1
- Failed: 0
- Pass Rate: 100%

### Test Execution Details:
1. Address: 59 VICTORY BLVD., STATEN ISLAND, NY 10301-2937
   - Successfully searched by address
   - Found correct property
   - Multiple tax items available for selection
   - Cart functionality working as expected
   - Payment total calculated correctly 