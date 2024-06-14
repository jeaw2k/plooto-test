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
      countrySelect: '//div[@id="company-info-country"]',
      specifyBusinessSelect: '//div[@id="company-info-business-classification"]',
      continueButton: '(//button[span[text()="Continue"]])[1]',
      buildPlanButton: '(//button[span[text()="Build Plan"]])[1]',
      confirmButton: '//button[span[text()="Confirm subscription"]]',
      gotItButton: '//button[normalize-space()="Got it"]',
    };
  }

  async clickAddNewClient() {
    await this.page.click(this.selectors.addNewClientButton);
  }

  async selectAccountingFirm() {
    await this.page.click(this.selectors.accountingFirmSelect);
    await this.pressPageUpAndEnter();
  }

  async enterBusinessName(name) {
    await this.page.fill(this.selectors.businessNameInput, name);
  }

  async enterBusinessPhone(phone) {
    await this.page.fill(this.selectors.businessPhoneInput, phone);
  }

  async enterExtension(number) {
    await this.page.fill(this.selectors.extensionInput, number);
  }

  async selectCountry() {
    await this.page.click(this.selectors.countrySelect);
    await this.pressPageUpAndEnter();
  }

  async selectSpecifyBusiness() {
    await this.page.click(this.selectors.specifyBusinessSelect);
    await this.pressPageUpAndEnter();
  }

  async clickContinueButton() {
    await this.page.click(this.selectors.continueButton);
  }

  async clickBuildPlanButton() {
    await this.page.click(this.selectors.buildPlanButton);
  }

  async clickConfirmButton() {
    await this.page.click(this.selectors.confirmButton);
    await this.page.click(this.selectors.gotItButton);
  }

  async pressPageUpAndEnter() {
    await this.page.keyboard.press('PageUp');
    await this.page.keyboard.press('Enter');
  }
}

module.exports = { AddNewClientPage };
