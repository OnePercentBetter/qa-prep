# Element inspection – saucedemo.com (2025-05-29)

| Element              | Tag / attrs                                  | Chosen locator                              | Reason                      |
|----------------------|----------------------------------------------|---------------------------------------------|-----------------------------|
| Username             | input[id='user-name'] placeholder="Username" | page.getByPlaceholder('Username')           | Stable placeholder text     |
| Password             | input[id='password']  placeholder="Password" | page.getByPlaceholder('Password')           | Stable placeholder text     |
| Login btn            | input[id='login-button']  value="Login"      | page.getByRole('button', { name: 'Login' }) | Role + accessible name      |
| Products page title  | div.title                                    | page.locator('.title')                      | class is constant           |
| Error banner         | div[data-test="error"]                       | page.locator('[data-test="error"]')         | Stable and explicit locator |
