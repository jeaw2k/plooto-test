const { BasePage } = require("./BasePage");

class AddNewBusinessAccountPage extends BasePage {
  constructor(page) {
    super(page);
    this.selectors = {
      ...this.selectors,
      otherCompaniesPage: '//li[contains(@class, "tab-click other-companies")]',
    };
  }

  async clickOtherCompanies() {
    await this.page.click(this.selectors.otherCompaniesPage);
  }
}

module.exports = { AddNewBusinessAccountPage };
