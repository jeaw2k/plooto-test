const { BasePage } = require("./BasePage");

class AccountsPayablePage extends BasePage {
  constructor(page) {
    super(page);
    this.selectors = {
      ...this.selectors,
      payableLink: 'text=Payables',
      newPayableButton: 'text=New Payable',
      manuallyEnterDetails: '//div[contains(text(),"Manually Enter Payment Details")]',
      payToInput: 'input[id*="payTo"]',
      // dropdownOption: '//input[@data-testid="payTo"]/following-sibling::ul/li[1]',
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
    // await this.page.click(this.selectors.dropdownOption);
    await this.page.keyboard.press('PageUp');
    await this.page.keyboard.press('Enter');
  }
}

module.exports = { AccountsPayablePage };
