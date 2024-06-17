class LoginPage {
    constructor(page) {
        this.fields = {
            loginPage: {
                emailInp: () => '//*[@id="email"]',
                inputPasswordSelector: () => '//*[@id="passphrase"]',
                loginBtnSel: () => `//button[span[text()='Sign In']]`,
            },
        };
        this.page = page;
    }

    async loginAs(email, password) {
        await this.page.goto('/');
        await this.__login(email, password);
    }

    async __login(email, password) {
        await this.page.fill(this.fields.loginPage.emailInp(), email);
        await this.page.fill(this.fields.loginPage.inputPasswordSelector(), password);
        await this.page.click(this.fields.loginPage.loginBtnSel());
    }
}

module.exports = { LoginPage };
