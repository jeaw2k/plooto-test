const { BasePage } = require("./BasePage");

class AccountsReceivablePage extends BasePage {
    constructor(page) {
        super(page);
        this.selectors = {
            ...this.selectors,
            receivableLink: '//a[normalize-space()="Receivables"]',
            newReceivableButton: '//button[normalize-space()="New Receivable"]',
            manuallyEnterDetails: '//div[@class="dashboard-button-text px-du-2"]',
            memoInput: '//input[@id="memo"]',
            fromInput: '//input[@id="requestFrom0"]',
            requestPaymentsButton: '//button[normalize-space()="Request Payments"]',
        };
    }

    async navigateToReceivables() {
        await this.navigateTo(process.env.LOGIN_URL);
        await this.page.click(this.selectors.receivableLink);
    }

    async clickNewReceivable() {
        await this.clickNewEntry(this.selectors.newReceivableButton, this.selectors.manuallyEnterDetails);
    }

    async enterMemo(memo) {
        await this.page.fill(this.selectors.memoInput, memo);
    }

    async selectRequestFrom() {
        await this.page.click(this.selectors.fromInput);
        await this.page.type(this.selectors.fromInput, 'Darth');
        await this.page.waitForTimeout(700); // Adjust the timeout as needed
        await this.page.keyboard.press('Tab'); // Press Tab to select the first option
    }
}

module.exports = { AccountsReceivablePage };
