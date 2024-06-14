const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../pageobjects/LoginPage");
const { AddNewClientPage } = require("../pageobjects/AddNewClientPage");

test.describe("Add New Client Test", () => {
  let addNewClientPage;

  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.loginAs(process.env.USER_EMAIL, process.env.USER_PASSWORD);

    addNewClientPage = new AddNewClientPage(page);
  });

  test('Create new client account', async ({ page }) => {
    await addNewClientPage.clickAddNewClient();
    await addNewClientPage.selectAccountingFirm();
    await addNewClientPage.enterBusinessName('Xerox');
    await addNewClientPage.enterBusinessPhone('5555555555');
    await addNewClientPage.enterExtension('1234');
    await addNewClientPage.selectCountry();
    await addNewClientPage.selectSpecifyBusiness();
    await addNewClientPage.clickContinueButton();
    await addNewClientPage.clickBuildPlanButton();
    await addNewClientPage.clickConfirmButton();
    await addNewClientPage.clickGotItButton();
    await expect(page).toHaveURL("https://cac-q4-plto-ui-app-01.azurewebsites.net/#user/dashboard/dashboardWizard");
  });
});
