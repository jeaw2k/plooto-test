const { BasePage } = require("./BasePage");

class AccountsPayablePage extends BasePage {
  constructor(page) {
    super(page);
    this.selectors = {
      ...this.selectors,
      payableLink: '//a[normalize-space()="Payables"]',
      newPayableButton: '//button[normalize-space()="New Payable"]',
      manuallyEnterDetails: '//div[contains(text(),"Manually Enter Payment Details")]',
      payToInput: '//input[@id="0_payToId"]',
    };
  }

  async navigateToPayables() {
    await this.navigateTo(process.env.LOGIN_URL);
    await this.page.click(this.selectors.payableLink);
  }

  async clickNewPayable() {
    await this.clickNewEntry(this.selectors.newPayableButton, this.selectors.manuallyEnterDetails);
  }

  async selectPayToField() {
    await this.page.click(this.selectors.payToInput);
    await this.page.waitForTimeout(1000); // Adjust the timeout as needed
  }

  async selectDropdownOption() {
    await this.page.keyboard.press('PageUp');
    await this.page.keyboard.press('Enter');
  }
}

module.exports = { AccountsPayablePage };
