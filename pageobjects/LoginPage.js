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
        await this.page.goto(process.env.LOGIN_URL);
        if (!await this.__isLoggedIn()) {
            await this.__login(email, password);
        }
    }

    async __login(email, password) {
        // await this.page.goto();
        await this.page.fill(this.fields.loginPage.emailInp(), email);
        await this.page.fill(this.fields.loginPage.inputPasswordSelector(), password);
        await this.page.click(this.fields.loginPage.loginBtnSel());
    }

    async __isLoggedIn() {
        try {
            await this.page.waitForURL(process.env.APP_URL, { timeout: 5000 });
            return true;
        } catch (error) {
            return false;
        }
    }
}

module.exports = { LoginPage };
