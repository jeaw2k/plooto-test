const { AddNewPage } = require("./AddNewPage")

class AddNewBusinessAccountPage extends AddNewPage {
  constructor(page) {
    super(page);
    this.selectors = {
      ...this.selectors,
      otherCompaniesPage: '//li[contains(@class, "tab-click other-companies")]',
      addNewCompanyButton: '//div[@id="select_my_companies"]//button[1]',
    };
  }

  async clickOtherCompanies() {
    await this.page.click(this.selectors.otherCompaniesPage);
  }

  async clickAddNewCompany() {
    await this.page.click(this.selectors.addNewCompanyButton);
  }
}

module.exports = { AddNewBusinessAccountPage };
