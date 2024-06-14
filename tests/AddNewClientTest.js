const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../pageobjects/LoginPage");
const { AddNewClientPage } = require("../pageobjects/AddNewClientPage");

require("dotenv").config();

test.describe("Add New Client Test", () => {
  let addNewClientPage;

  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.loginAs(process.env.USER_EMAIL, process.env.USER_PASSWORD);

    addNewClientPage = new AddNewClientPage(page);
  });

  test('test test', async () => {
    await addNewClientPage.clickAddNewClient();
    await addNewClientPage.selectAccountingFirm();
    await addNewClientPage.enterBusinessName('Death Star');
    await addNewClientPage.enterBusinessPhone('5555555555');

  });
});
