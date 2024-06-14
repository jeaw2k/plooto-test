const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../pageobjects/LoginPage");
const { AddNewBusinessAccountPage } = require("../pageobjects/AddNewBusinessAccountPage");

test.describe("Add New Client Test", () => {
  let addNewBusinessAccountPage;

  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.loginAs(process.env.USER_EMAIL, process.env.USER_PASSWORD);

    addNewBusinessAccountPage = new AddNewBusinessAccountPage(page);
  });

  test('Create new business account', async () => {
    await addNewBusinessAccountPage.clickOtherCompanies();
  });
});
