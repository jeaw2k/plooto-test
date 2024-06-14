const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../pageobjects/LoginPage");

test("login test", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.loginAs(process.env.USER_EMAIL, process.env.USER_PASSWORD);
  await expect(page).toHaveURL(process.env.APP_URL);
});
