class BasePage {
  constructor(page) {
    this.page = page;
    this.selectors = {
      amountInput: '//input[@id="amount"]',
      continueButton: '//button[@type="submit"]',
      sendPaymentButton: '//button[normalize-space()="Send Payment"]',
      understandButton: '//button[normalize-space()="I Understand"]',
      formTitle: '//h3[@class="form-title mt-du-4"]',
    };
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
    await this.page.fill(this.selectors.amountInput, amount.toString());
  }

  async clickContinue() {
    await this.page.click(this.selectors.continueButton);
  }

  async clickSendPayment() {
    await this.page.click(this.selectors.sendPaymentButton);
    await this.page.click(this.selectors.understandButton);
  }

  async clickRequestPayment() {
    await this.page.click(this.selectors.requestPaymentsButton);
    await this.page.click(this.selectors.understandButton);
  }

  async waitForFormTitle() {
    await this.page.waitForSelector(this.selectors.formTitle);
  }

  async getFormTitleText() {
    const element = await this.page.$(this.selectors.formTitle);
    return await element.innerText();
  }

  async waitForElement(selector) {
    await this.page.waitForSelector(selector, { state: 'visible' });
  }
}

module.exports = { BasePage };
