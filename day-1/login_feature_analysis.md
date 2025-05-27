Purpose of the login feature:
Protecting individual user-curated data from unauthorized access.

Positive Login Cases:

P-01:
Valid Standard Login:
Steps:
  1. Go to login page
  2. Enter username=standard_user
  3. Enter password=secret_sauce
  4. Click login
Expected Result:
  Browser navigates to /inventory.html
  page header reads 'products'

P-02:
"Remember Me” keeps user logged-in
Steps:
  1. Go to login page
  2. Check Remember Me box
  3. Enter valid creds → Login
  4. Close browser tab & reopen site

P-03:
Successful login redirects only once
Steps:
  1. Enter valid creds → Login
  2. Observe network activity in DevTools


Negative Login Cases:

N-01: Invalid Password
Steps:
  Enter standard_user / bad_pass → Login
Expected Result:
  Error Banner appears with text "username and password do not match records"

N-02: Blank Fields
Steps:
  Leave username & password empty → Click Login
Expected result:
  inline validation: username field outlined red; message “Username is required.”


N-03: Invalid username:
Steps:
  Enter no_such_user/secret_sauce -> login
Expected Result:
  Same error banner as N-01

N-04: Server 500 on login API (simulate with dev-tools or mock)
Steps:
  Intercept /login request, force 500 response → try login
Expected Result:
  UI shows generic error “Service temporarily unavailable. Please try later.”; no stack trace

N-05: Slow network (10 s delay)
Steps:
  Throttle network in DevTools → valid login
Expected Result:
A spinner appears within 1 s; login succeeds once response arrives; no JS errors  

