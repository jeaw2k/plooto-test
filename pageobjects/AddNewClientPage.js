const { AddNewPage } = require("./AddNewPage")

class AddNewClientPage extends AddNewPage {
  constructor(page) {
    super(page);
    this.selectors = {
      ...this.selectors,
      addNewClientButton: '//body//div[@id="applicationHost"]//div[@class="tab-content"]//div[@class="tab-content"]//button[1]',
    };
  }

  async clickAddNewClient() {
    await this.page.click(this.selectors.addNewClientButton);
  }
}

module.exports = { AddNewClientPage };
