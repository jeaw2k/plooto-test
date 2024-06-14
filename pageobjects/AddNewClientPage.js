const { BasePage } = require("./BasePage");

class AddNewClientPage extends BasePage {
  constructor(page) {
    super(page);
    this.selectors = {
      ...this.selectors,
      addNewClientButton: '//body//div[@id="applicationHost"]//div[@class="tab-content"]//div[@class="tab-content"]//button[1]',
      accountingFirmSelect: '//div[@id="company-info-accounting-firm-company"]',
      businessNameInput: '//input[@id="company-info-business-name"]',
      businessPhoneInput: '//input[@id="company-info-business-phone-number"]',
      extensionInput: '//input[@id="company-info-business-phone-extension"]',
      payToInput: 'input[id*="payTo"]',
      // dropdownOption: '//input[@data-testid="payTo"]/following-sibling::ul/li[1]',
    };
  }

  async clickAddNewClient() {
    await this.page.click(this.selectors.addNewClientButton);
  }

  async selectAccountingFirm() {
    await this.page.click(this.selectors.accountingFirmSelect);
    await this.page.keyboard.press('PageUp');
    await this.page.keyboard.press('Enter');
  }

  async enterBusinessName(name) {
    await this.page.fill(this.selectors.businessNameInput, name);
  }

  async enterBusinessPhone(phone) {
    await this.page.fill(this.selectors.businessPhoneInput, phone);
  }

  async enterBusinessPhone(phone) {
    await this.page.fill(this.selectors.extensionInput, phone);
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

module.exports = { AddNewClientPage };
