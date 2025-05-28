## Day 2 Summary

- **Hello-world title test:** Verified Playwright scaffold with `tests/login.spec.js`, asserting the page title “Swag Labs”.
- **Element-inspection doc:** Raw HTML + locator decisions captured in `day2/element_inspection.md`.
- **Heading locator note:** Inventory page lacks a semantic `<h1>`; used stable CSS `.title` and asserted `toHaveText('Products')`.
- **Manual-doc sync:** Updated `login_test_cases.md` Actual & Status = **Pass** for LOGIN_001 and LOGIN_004.
- **Version control:** Pushed `day-2` branch and opened PR “Day-2: first Playwright automation”.

- **Locators & Element Targeting:**  
  - Inspected the DOM to identify stable, resilient selectors.
  - Used Playwright's recommended locators:  
    - `getByRole` (for accessible roles, e.g., button, textbox)
    - `getByPlaceholder` (for input placeholders)
    - `getByLabel`, `getByText`, `getByTestId` as needed
  - Avoided brittle CSS/XPath selectors unless absolutely necessary.

- **Test Automation:**  
  - Automated test cases:
    - `TC_LOGIN_001` (happy path login)
    - `TC_LOGIN_004` (invalid password scenario)
  - Ran tests across Chromium, Firefox, and WebKit for cross-browser coverage.
  - Updated the Requirements Traceability Matrix (RTM) to mark these cases as “Automated = Yes”.

- **Assertions:**  
  - Used Playwright's `expect()` assertions, including web-specific matchers like `toHaveText`, `toHaveTitle`, and `toHaveURL`.
  - Example:  
    ```js
    await expect(page.getByTestId('status')).toHaveText('Submitted');
    ```

- **Debugging Tools:**  
  - **Playwright Inspector** (`PWDEBUG=1`):  
    - Stepped through tests interactively.
    - Live-edited locators and observed actionability logs.
  - **Trace Viewer:**  
    - Recorded traces with `--trace on` or via test config.
    - Explored test execution timeline, DOM snapshots, network requests, console logs, and errors.
    - Used the Actions, Source, Call, Log, Network, and Attachments tabs to diagnose failures and understand test flow.
    - Opened traces via CLI (`npx playwright show-trace path/to/trace.zip`) or in the browser at [trace.playwright.dev](https://trace.playwright.dev).

- **Best Practices:**  
  - Prefer semantic locators for maintainability.
  - Use debugging tools to quickly identify and fix test failures.
  - Keep the RTM updated to reflect automation progress.

**Chrome DevTools – Custom Network Throttling Profile:**

- To simulate slow network conditions (e.g., for testing loading spinners or error handling), create a custom throttling profile in Chrome DevTools:
  - Open DevTools → Network tab → click the "No throttling" dropdown → "Add..." to create a new profile.
  - Set **Download** to `30 kb/s`, **Upload** to `30 kb/s`, and **RTT** (Round Trip Time) to `3000 ms` (3 s).
  - Name the profile (e.g., “Terribly Slow”).
  - Select this profile before running your test to observe app behavior under extreme latency/bandwidth constraints.

**References:**  
- [DevTools: Custom Throttling Settings](https://developer.chrome.com/docs/devtools/settings/throttling)
- [DevTools: Network Panel Reference](https://developer.chrome.com/docs/devtools/network/reference)
- [Playwright Locators](https://playwright.dev/docs/locators)
- [Playwright Assertions](https://playwright.dev/docs/test-assertions)
- [Playwright Debugging](https://playwright.dev/docs/debug)
- [Trace Viewer Guide](https://playwright.dev/docs/trace-viewer)
