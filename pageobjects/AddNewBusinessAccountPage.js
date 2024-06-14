class AddNewBusinessAccountPage {
  constructor(page) {
    this.fields = {
      businessPage: {
        otherCompaniesPage: () => '//li[contains(@class, "tab-click other-companies")]',
        addNewCompanyButton: () => '//div[@id="select_my_companies"]//button[1]',
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
    this.page = page;
  }

    async clickOtherCompanies() {
      await this.page.click(this.fields.businessPage.otherCompaniesPage());
    }

    async clickAddNewCompany() {
      await this.page.click(this.fields.businessPage.addNewCompanyButton());
    }

    async selectAccountingFirm() {
      await this.page.click(this.fields.businessPage.accountingFirmSelect());
      await this.pressPageUpAndEnter();
    }

    async enterBusinessName(name) {
      await this.page.fill(this.fields.businessPage.businessNameInput(), name);
    }

    async enterBusinessPhone(phone) {
      await this.page.fill(this.fields.businessPage.businessPhoneInput(), phone);
    }

    async enterExtension(number) {
      await this.page.fill(this.fields.businessPage.extensionInput(), number);
    }

    async selectCountry() {
      await this.page.click(this.fields.businessPage.countrySelect());
      await this.pressPageUpAndEnter();
    }

    async selectSpecifyBusiness() {
      await this.page.click(this.fields.businessPage.specifyBusinessSelect());
      await this.pressPageUpAndEnter();
    }

    async clickContinueButton() {
      await this.page.click(this.fields.businessPage.continueButton());
    }

    async clickBuildPlanButton() {
      await this.page.click(this.fields.businessPage.buildPlanButton());
    }

    async clickConfirmButton() {
      await this.page.click(this.fields.businessPage.confirmButton());
    }

    async clickGotItButton() {
      await this.page.click(this.fields.businessPage.gotItButton());
    }

    async pressPageUpAndEnter() {
      await this.page.keyboard.press('PageUp');
      await this.page.keyboard.press('Enter');
    }
}

module.exports = {AddNewBusinessAccountPage};
