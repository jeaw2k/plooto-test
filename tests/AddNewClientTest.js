const { test, expect } = require("./fixtures");

test.describe("Add New Client Test", () => {

  test.beforeEach(async ({ page, loginAsUser }) => {
    await loginAsUser;
    await expect(page).toHaveURL(process.env.APP_URL);
  });

  test('Create new client account', async ({ page, newClient }) => {
    await expect(page).toHaveURL("https://cac-q4-plto-ui-app-01.azurewebsites.net/#user/dashboard/dashboardWizard");
  });
});
