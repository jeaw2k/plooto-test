const { test, expect } = require("../fixtures/base.fixture");

test.describe("Add New Client Test", () => {

  test.beforeEach(async ({ page, loginAsUser, siteURL }) => {
    await loginAsUser;
    await page.waitForLoadState('networkidle');
    await expect(page).toHaveURL(siteURL);
  });

  test('Create new client account', async ({ page, newClient }) => {
    await newClient.enterBusinessName('Xerox');
    await newClient.enterBusinessPhone('5555555555');
    await newClient.enterExtension('1234');
    await newClient.selectCountry();
    await newClient.selectSpecifyBusiness();
    
    await newClient.clickContinueButton();
    
    await newClient.clickBuildPlanButton();
    
    await newClient.clickConfirmButton();
    
    await newClient.clickGotItButton();
    
    await expect(page).toHaveURL("https://cac-q4-plto-ui-app-01.azurewebsites.net/#user/dashboard/dashboardWizard");
  });
});
