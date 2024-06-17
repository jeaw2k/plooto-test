class AccountsReceivablePage {
constructor(page) {
        this.fields = {
            receivablePage: {
                receivableLink: () => '//a[normalize-space()="Receivables"]',
                newReceivableButton: () => '//button[normalize-space()="New Receivable"]',
                manuallyEnterDetails: () => '//div[@class="dashboard-button-text px-du-2"]',
                memoInput: () => '//input[@id="memo"]',
                memoDisplay: () => '//span[contains(@data-bind, "text:group.memo()")]',
                fromInput: () => '//input[@id="requestFrom0"]',
                fromSelected: () => '//li[contains(@class, "flexselect_selected")]',
                fromDisplay: () => '//span[contains(@data-bind, "text:requestFrom.payee().displayName")]',
                requestPaymentsButton: () => '//button[normalize-space()="Request Payments"]',
                amountInput: () => '//input[@id="amount"]',
                amountDisplay: () => '//span[contains(@data-bind, "currency:[payment.amount,paymentsGroupByCurrency.currency]")]',
                continueButton: () => '//button[@type="submit"]',
                requestPaymentButton: () => '//span[normalize-space()="Request Payments"]',
                understandButton: () => '//button[normalize-space()="I Understand"]',
                formTitle: () => '//h3[@class="form-title mt-du-4"]',
            },
        };
        this.page = page;
        this.memoValue = "";
        this.fromValue = "";
        this.amountValue = "";
    }

    async navigateToReceivables() {
        await this.page.goto('/#user');
        await this.page.waitForLoadState('networkidle');

        await this.page.click(this.fields.receivablePage.receivableLink());
    }

    async clickNewReceivable() {
        await this.clickNewEntry(this.fields.receivablePage.newReceivableButton(), this.fields.receivablePage.manuallyEnterDetails());
    }

    async enterMemo(memo) {
        await this.page.fill(this.fields.receivablePage.memoInput(), memo);
        this.memoValue = memo;
    }

    async getDisplayedMemoValue() {
        return await this.page.innerText(this.fields.receivablePage.memoDisplay());
    }

    async selectRequestFrom() {
        await this.page.click(this.fields.receivablePage.fromInput());
        await this.page.type(this.fields.receivablePage.fromInput(), 'Darth');
        await this.page.waitForTimeout(2000);
        await this.page.keyboard.press('Tab');
        const selectedElement = await this.page.$(this.fields.receivablePage.fromSelected());
        const selectedValue = await selectedElement.innerText();
        this.fromValue = selectedValue
    }

    async getDisplayedFromValue() {
        return await this.page.innerText(this.fields.receivablePage.fromDisplay());
    }

    async selectDropdownOption() {
        await this.page.keyboard.press('PageUp');
        await this.page.keyboard.press('Enter');
        const selectedElement = await this.page.$(this.fields.payablePage.payToSelected());
        const selectedValue = await selectedElement.innerText();
        this.toValue = selectedValue
    }

    async getDisplayedToValue() {
        return await this.page.innerText(this.fields.payablePage.payToDisplay());
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
        this.amountValue = amount;
    }

    async getDisplayedAmountValue() {
        return await this.page.innerText(this.fields.receivablePage.amountDisplay());
    }

    async clickContinue() {
        await this.page.click(this.fields.receivablePage.continueButton());
    }

    async clickRequestPayment() {
        await this.page.click(this.fields.receivablePage.requestPaymentButton());
        await this.page.click(this.fields.receivablePage.understandButton());
    }

    async clickRequestPayment() {
        await this.page.click(this.fields.receivablePage.requestPaymentsButton());
        await this.page.click(this.fields.receivablePage.understandButton());
    }

    async waitForFormTitle() {
        await this.page.waitForTimeout(700);
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
