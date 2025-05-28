# Element inspection – saucedemo.com (2025-05-29)

| Element  | Tag / attrs                                  | Chosen locator                              | Reason |
|----------|----------------------------------------------|---------------------------------------------|--------|
| Username | input[id='user-name'] placeholder="Username" | page.getByPlaceholder('Username')           | Stable placeholder text |
| Password | input[id='password']  placeholder="Password" | page.getByPlaceholder('Password')           | Stable placeholder text |
| Login btn| input[id='login-button']  value="Login"      | page.getByRole('button', { name: 'Login' }) | Role + accessible name |
