const { BasePage } = require("./BasePage");

class AccountsReceivablePage extends BasePage {
    constructor(page) {
        super(page);
        this.selectors = {
            ...this.selectors,
            receivableLink: 'text=Receivables',
            newReceivableButton: 'text=New Receivable',
            manuallyEnterDetails: 'xpath=//div[contains(text(),"Manually Enter Receivable Details")]',
            memo: '#memo',
            fromInput: 'xpath=//input[@id="requestFrom0"]',
            dropdownOption: 'xpath=/html[1]/body[1]/div[6]/ul[1]/li[1]',
            requestPaymentsButton: 'text=Request Payments',
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
        await this.page.fill(this.selectors.memo, memo);
    }

    async selectRequestFrom() {
        await this.page.click(this.selectors.fromInput);
        await this.page.type(this.selectors.fromInput, 'Darth');
        await this.page.waitForTimeout(700); // Adjust the timeout as needed
        await this.page.keyboard.press('Tab'); // Press Tab to select the first option
    }
}

module.exports = { AccountsReceivablePage };
