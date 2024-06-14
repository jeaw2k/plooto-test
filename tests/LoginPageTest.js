const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../pageobjects/LoginPage");

// Load environment variables
require("dotenv").config();

test("login test", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.loginAs(process.env.USER_EMAIL, process.env.USER_PASSWORD);
  await page.waitForTimeout(5000); // temporary solution
  await expect(page).toHaveURL(process.env.APP_URL);
});
