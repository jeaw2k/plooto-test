class AccountsReceivablePage {
constructor(page) {
        this.fields = {
            receivablePage: {
                receivableLink: () => '//a[normalize-space()="Receivables"]',
                newReceivableButton: () => '//button[normalize-space()="New Receivable"]',
                manuallyEnterDetails: () => '//div[@class="dashboard-button-text px-du-2"]',
                memoInput: () => '//input[@id="memo"]',
                fromInput: () => '//input[@id="requestFrom0"]',
                requestPaymentsButton: () => '//button[normalize-space()="Request Payments"]',
                amountInput: () => '//input[@id="amount"]',
                continueButton: () => '//button[@type="submit"]',
                sendPaymentButton: () => '//button[normalize-space()="Send Payment"]',
                understandButton: () => '//button[normalize-space()="I Understand"]',
                formTitle: () => '//h3[@class="form-title mt-du-4"]',
            },
        };
        this.page = page;
    }

    async navigateToReceivables() {
        await this.navigateTo(process.env.LOGIN_URL);
        await this.page.waitForLoadState('networkidle');

        await this.page.click(this.fields.receivablePage.receivableLink());
    }

    async clickNewReceivable() {
        await this.clickNewEntry(this.fields.receivablePage.newReceivableButton(), this.fields.receivablePage.manuallyEnterDetails());
    }

    async enterMemo(memo) {
        await this.page.fill(this.fields.receivablePage.memoInput(), memo);
    }

    async selectRequestFrom() {
        await this.page.click(this.fields.receivablePage.fromInput());
        await this.page.type(this.fields.receivablePage.fromInput(), 'Darth');
        await this.page.waitForTimeout(700); // Adjust the timeout as needed
        await this.page.keyboard.press('Tab'); // Press Tab to select the first option
    }

    async navigateTo(url) {
        await this.page.goto(url);
    }

    async clickNewEntry(buttonSelector, manuallyEnterDetailsSelector) {
        await this.page.click(buttonSelector);
        await this.page.waitForLoadState('networkidle');
        await this.waitForElement(manuallyEnterDetailsSelector);
        await this.page.click(manuallyEnterDetailsSelector);
        await this.page.waitForLoadState('networkidle');
    }

    async enterAmount(amount) {
        await this.page.fill(this.fields.receivablePage.amountInput(), amount.toString());
    }

    async clickContinue() {
        await this.page.click(this.fields.receivablePage.continueButton());
    }

    async clickSendPayment() {
        await this.page.click(this.fields.receivablePage.sendPaymentButton());
        await this.page.click(this.fields.receivablePage.understandButton());
    }

    async clickRequestPayment() {
        await this.page.click(this.fields.receivablePage.requestPaymentsButton());
        await this.page.click(this.fields.receivablePage.understandButton());
    }

    async waitForFormTitle() {
        await this.page.waitForTimeout(700); // Adjust the timeout as needed
        await this.page.waitForSelector(this.fields.receivablePage.formTitle());
    }

    async getFormTitleText() {
        const element = await this.page.$(this.fields.receivablePage.formTitle());
        return await element.innerText();
    }

    async waitForElement(selector) {
        await this.page.waitForSelector(selector, { state: 'visible' });
    }
}

module.exports = { AccountsReceivablePage };
