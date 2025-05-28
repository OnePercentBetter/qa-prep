| **Req ID** | **Requirement Description**                                         | **Test Case IDs**                        | **Automated**         |
|:----------:|:--------------------------------------------------------------------|:-----------------------------------------|:---------------------:|
| R-01       | Accept valid credentials and redirect to dashboard                  | LOGIN_001 (Automated = Yes), LOGIN_003   | LOGIN_001: Yes        |
| R-02       | Persist session when “Remember Me” is checked                       | LOGIN_002                                |                       |
| R-03       | Reject invalid credentials with correct error banner                | LOGIN_004 (Automated = Yes)              | LOGIN_004: Yes        |
| R-04       | Handle backend failures with generic error & no stacktrace          | LOGIN_005                                |                       |
| R-05       | Show spinner & complete login on slow networks, no JS errors        | LOGIN_006                                |                       |
