class AccountsPayablePage {
  constructor(page) {
    this.fields = {
      payablePage: {
        payableLink: () => '//a[normalize-space()="Payables"]',
        newPayableButton: () => '//button[normalize-space()="New Payable"]',
        manuallyEnterDetails: () => '//div[contains(text(),"Manually Enter Payment Details")]',
        payToInput: () => '//input[@id="0_payToId"]',
        amountInput: () => '//input[@id="0_amount"]',
        continueButton: () => '//button[@type="submit"]',
        sendPaymentButton: () => '//button[normalize-space()="Send Payment"]',
        understandButton: () => '//button[normalize-space()="I Understand"]',
        formTitle: () => '//h3[@class="form-title mt-du-4"]',
      },
    };
    this.page = page;
  }

  async navigateToPayables() {
    await this.navigateTo(process.env.LOGIN_URL);
    await this.page.waitForLoadState('networkidle');
    await this.page.click(this.fields.payablePage.payableLink());
  }

  async clickNewPayable() {
    await this.clickNewEntry(this.fields.payablePage.newPayableButton(), this.fields.payablePage.manuallyEnterDetails());
  }

  async selectPayToField() {
    await this.page.click(this.fields.payablePage.payToInput());
    await this.page.waitForTimeout(1000); // Adjust the timeout as needed
  }

  async selectDropdownOption() {
    await this.page.keyboard.press('PageUp');
    await this.page.keyboard.press('Enter');
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
    await this.page.fill(this.fields.payablePage.amountInput(), amount.toString());
  }

  async clickContinue() {
    await this.page.click(this.fields.payablePage.continueButton());
  }

  async clickSendPayment() {
    await this.page.click(this.fields.payablePage.sendPaymentButton());
    await this.page.click(this.fields.payablePage.understandButton());
  }

  async waitForFormTitle() {
    await this.page.waitForSelector(this.fields.payablePage.formTitle());
  }

  async getFormTitleText() {
    const element = await this.page.$(this.fields.payablePage.formTitle());
    return await element.innerText();
  }

  async waitForElement(selector) {
    await this.page.waitForSelector(selector, { state: 'visible' });
  }
}

module.exports = { AccountsPayablePage };
