# CPA-PTS Search By Address Functional Test

## Test Case ID
CPA-PTS_Search_By_Address_Functional_Test

## Priority
P1

## Objective
Verify that searching by address returns expected results from CPA DB

## Prerequisites
- Access to City Pay Payments Online (https://stgcpy.csc.nycnet/)
- Valid property addresses for testing
- Internet connection
- Web browser (Chrome, Firefox, or Edge recommended)

## Test Data
The following addresses will be used for testing:
1. 59 VICTORY BLVD., STATEN ISLAND, NY 10301-2937
2. 27 FORT HILL CIR., STATEN ISLAND, NY 10301-1716
3. 31 FORT HILL CIR., STATEN ISLAND, NY 10301-1716
4. 436 SAINT MARKS PL., STATEN ISLAND, NY 10301-2434
5. 52 MONTGOMERY AVE., STATEN ISLAND, NY 10301-2407
6. 56 MONTGOMERY AVE., STATEN ISLAND, NY 10301-2407
7. 68 MONTGOMERY AVENUE, STATEN ISLAND, NY 10301
8. 2001 NEPTUNE AVE., BROOKLYN, NY 11224-2521
9. 10402 AVENUE K., BROOKLYN, NY 11236-4532
10. 48 CRESCENT AVE., STATEN ISLAND, NY 10301-1755

Note: Address search requires separate input fields:
- Street Number (e.g., "27" for FORT HILL CIR.)
- Street Name (e.g., "FORT HILL CIR")
- Borough (e.g., "STATEN ISLAND")
- Zip Code (optional)

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

### Step 5: Verify Search Results
1. Verify the following information is displayed for the searched address:
   - Property address
   - BBL number
   - Tax information
   - Payment history
   - Any outstanding balances
2. Verify all associated taxes and payments are reflected correctly

## Expected Results
- The Search Results page should be displayed successfully
- All associated taxes and payments should be reflected accurately
- The information displayed should match the expected data for the searched address

## Test Execution Notes
- Test each address from the test data set
- Document any discrepancies between expected and actual results
- Note any system performance issues or delays
- Capture screenshots of any errors or unexpected behavior
- Test with different address formats (e.g., with/without apartment numbers, different zip code formats)
- Verify address search form field requirements:
  * Street Number (required)
  * Street Name (required)
  * Borough (required)
  * Zip Code (optional)

### Address Variation Findings:
The system provides multiple variations of street names in the dropdown, which can affect address selection:
1. Abbreviations vs. Full Words:
   - "PL" vs "Place"
   - "ST" vs "Street"
   - "AVE" vs "Avenue"
   - "BLVD" vs "Boulevard"

2. Possessive Forms:
   - "Mark" vs "Mark's"
   - "Saint" vs "St"

3. Common Variations:
   - "Saint Marks" vs "St Mark"
   - "Saint Marks Place" vs "St Marks Pl"

### Conditional Pass Notes:
1. Address Selection Limitation:
   - System provides multiple variations of street names in dropdown
   - Users need to select the correct variation to find the property
   - All variations lead to the same property when selected correctly
   - Current pass status based on functional behavior with correct variation selection

## Pass/Fail Criteria
- PASS: All test steps execute successfully and expected results are achieved
- FAIL: Any test step fails or expected results are not achieved

## Test Environment
- Browser: [Version 129.0.2792.52 (Official build) (64-bit)]
- Network Environment: []
- Operating System: Windows 10

### Known Issues:
1. SSL Certificate Issue:
   - Network testing tools (like Cursor) fail SSL certificate validation
   - Certificate issuer "inspection.finance.nycnet" is not recognized
   - This affects any operations requiring SSL
   - Workaround: Use browser directly for testing instead of network testing tools

## Test Execution Date
06/11/2025

## Tester
Salah Alhudais

## Test Results
| Test Case | Status | Notes |
|-----------|--------|-------|
| 59 VICTORY BLVD | PASS | Property information displayed correctly, taxes and total owed shown accurately |
| 27 FORT HILL CIR | PASS | Property information displayed correctly, taxes and total owed shown accurately |
| 31 FORT HILL CIR | PASS | Property information displayed correctly, taxes and total owed shown accurately |
| 436 SAINT MARKS PL | PASS | Property information displayed correctly, taxes and total owed shown accurately |
| 52 MONTGOMERY AVE | PASS | Property information displayed correctly, taxes and total owed shown accurately |
| 56 MONTGOMERY AVE | PASS | Property information displayed correctly, taxes and total owed shown accurately |
| 68 MONTGOMERY AVENUE | PASS | Property information displayed correctly, taxes and total owed shown accurately |
| 2001 NEPTUNE AVE | PASS | Property information displayed correctly, taxes and total owed shown accurately |
| 10402 AVENUE K | PASS | Property information displayed correctly, taxes and total owed shown accurately |
| 48 CRESCENT AVE | PASS | Property information displayed correctly, taxes and total owed shown accurately |

## Summary
- Total Test Cases: 10
- Passed: 10
- Failed: 0
- Pass Rate: 100%

All test cases passed successfully with no failures. The system correctly displayed property information, tax amounts, and total owed amounts for all addresses tested. The only noted limitation is the address variation in the dropdown selection, which requires users to select the correct variation to find the property.

## Test Execution Date
06/11/2025

## Tester
Salah Alhudais 