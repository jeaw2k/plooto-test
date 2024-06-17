const { test, expect } = require("../fixtures/base.fixture");

test.describe("Add New Client Test", () => {

  test.beforeEach(async ({ page, loginAsUser, siteURL }) => {
    await loginAsUser;
    await page.waitForLoadState('networkidle');
    await expect(page).toHaveURL(siteURL);
  });

  test('Create new business account', async ({ page, newBusinessAccount }) => {
    await newBusinessAccount.selectAccountingFirm();
    await newBusinessAccount.enterBusinessName('X Wing');
    await newBusinessAccount.enterBusinessPhone('5555554444');
    await newBusinessAccount.enterExtension('1221');
    await newBusinessAccount.selectCountry();
    await newBusinessAccount.selectSpecifyBusiness();

    await newBusinessAccount.clickContinueButton();

    await newBusinessAccount.clickBuildPlanButton();

    await newBusinessAccount.clickConfirmButton();
    
    await newBusinessAccount.clickGotItButton();

    await expect(page).toHaveURL("https://cac-q4-plto-ui-app-01.azurewebsites.net/#user/dashboard/dashboardWizard");
  });
});
