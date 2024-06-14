class AddNewClientPage {
  constructor(page) {
    this.fields = {
      clientPage: {
        addNewClientButton: () => '//body//div[@id="applicationHost"]//div[@class="tab-content"]//div[@class="tab-content"]//button[1]',
        accountingFirmSelect: () => '//div[@id="company-info-accounting-firm-company"]',
        businessNameInput: () => '//input[@id="company-info-business-name"]',
        businessPhoneInput: () => '//input[@id="company-info-business-phone-number"]',
        extensionInput: () => '//input[@id="company-info-business-phone-extension"]',
        countrySelect: () => '//div[@id="company-info-country"]',
        specifyBusinessSelect: () => '//div[@id="company-info-business-classification"]',
        continueButton: () => '(//button[span[text()="Continue"]])[1]',
        buildPlanButton: () => '(//button[span[text()="Build Plan"]])[1]',
        confirmButton: () => '//button[span[text()="Confirm subscription"]]',
        gotItButton: () => '//button[normalize-space()="Got it"]',
      },
    };
      this.page = page
  }

  async clickAddNewClient() {
    await this.page.click(this.fields.clientPage.addNewClientButton());
  }

  async selectAccountingFirm() {
    await this.page.click(this.fields.clientPage.accountingFirmSelect());
    await this.pressPageUpAndEnter();
  }

  async enterBusinessName(name) {
    await this.page.fill(this.fields.clientPage.businessNameInput(), name);
  }

  async enterBusinessPhone(phone) {
    await this.page.fill(this.fields.clientPage.businessPhoneInput(), phone);
  }

  async enterExtension(number) {
    await this.page.fill(this.fields.clientPage.extensionInput(), number);
  }

  async selectCountry() {
    await this.page.click(this.fields.clientPage.countrySelect());
    await this.pressPageUpAndEnter();
  }

  async selectSpecifyBusiness() {
    await this.page.click(this.fields.clientPage.specifyBusinessSelect());
    await this.pressPageUpAndEnter();
  }

  async clickContinueButton() {
    await this.page.click(this.fields.clientPage.continueButton());
  }

  async clickBuildPlanButton() {
    await this.page.click(this.fields.clientPage.buildPlanButton());
  }

  async clickConfirmButton() {
    await this.page.click(this.fields.clientPage.confirmButton());
  }

  async clickGotItButton() {
    await this.page.click(this.fields.clientPage.gotItButton());
  }

  async pressPageUpAndEnter() {
    await this.page.keyboard.press('PageUp');
    await this.page.keyboard.press('Enter');
  }
}

module.exports = { AddNewClientPage };
