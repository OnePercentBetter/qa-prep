class LoginPage {
    constructor(page) {
        this.page = page;
        this.username = this.page.getByPlaceholder('Username');
        this.password = this.page.getByPlaceholder('Password');
        this.loginButton = this.page.getByRole('button', {name: 'Login'});

    }

    async goto() {
      await this.page.goto('https://www.saucedemo.com/');
    }
    
    async login(username, password) {
      await this.username.fill(username);
      await this.password.fill(password);
      await this.loginButton.click();
    }

    async assertLoginError(errorMessage) {
      await expect(this.page.locator('[data-test="error"]')).toContainText(errorMessage);
    }
}

export { LoginPage };