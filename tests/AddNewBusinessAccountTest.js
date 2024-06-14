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

  test('Create new business account', async ({ page }) => {
    await addNewBusinessAccountPage.clickOtherCompanies();
    await addNewBusinessAccountPage.clickAddNewCompany();
    await addNewBusinessAccountPage.selectAccountingFirm();
    await addNewBusinessAccountPage.enterBusinessName('X Wing');
    await addNewBusinessAccountPage.enterBusinessPhone('5555554444');
    await addNewBusinessAccountPage.enterExtension('1221');
    await addNewBusinessAccountPage.selectCountry();
    await addNewBusinessAccountPage.selectSpecifyBusiness();
    await addNewBusinessAccountPage.clickContinueButton();
    await addNewBusinessAccountPage.clickBuildPlanButton();
    await addNewBusinessAccountPage.clickConfirmButton();
    await addNewBusinessAccountPage.clickGotItButton();
    await expect(page).toHaveURL("https://cac-q4-plto-ui-app-01.azurewebsites.net/#user/dashboard/dashboardWizard");
  });
});
