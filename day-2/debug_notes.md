## Inspector findings – LOGIN_001 (intentional fail)
* Expected URL regex: /.*dashboard.html/
* Actual URL: https://www.saucedemo.com/inventory.html
Inspector paused at assertion → easy to see mismatch.


## Trace viewer notes
* Step timeline confirms click -> redirect -> wrong assertion.
* Network tab shows 302 to /inventory.html.
* DOM snapshot proves .title element present.
