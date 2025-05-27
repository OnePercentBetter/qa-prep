| **Req ID** | **Requirement Description**                                         | **Test Case IDs**         |
|:----------:|:--------------------------------------------------------------------|:-------------------------:|
| R-01       | Accept valid credentials and redirect to dashboard                  | LOGIN_001, LOGIN_003      |
| R-02       | Persist session when “Remember Me” is checked                       | LOGIN_002                 |
| R-03       | Reject invalid credentials with correct error banner                | LOGIN_004                 |
| R-04       | Handle backend failures with generic error & no stacktrace          | LOGIN_005                 |
| R-05       | Show spinner & complete login on slow networks, no JS errors        | LOGIN_006                 |
