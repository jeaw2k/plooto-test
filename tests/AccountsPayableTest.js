const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../pageobjects/LoginPage");
const { AccountsPayablePage } = require("../pageobjects/AccountsPayablePage");

test.describe("Accounts Payable Tests", () => {
  let accountsPayablePage;

  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.loginAs(process.env.USER_EMAIL, process.env.USER_PASSWORD);
    await expect(page).toHaveURL(process.env.APP_URL);

    accountsPayablePage = new AccountsPayablePage(page);
  });

  test('should navigate to Payable and verify "Great Job!" text', async () => {
    await accountsPayablePage.navigateToPayables();
    await accountsPayablePage.clickNewPayable();
    await accountsPayablePage.selectPayToField();
    await accountsPayablePage.selectDropdownOption();
    await accountsPayablePage.enterAmount(100);
    await accountsPayablePage.clickContinue();
    await accountsPayablePage.clickSendPayment();
    await accountsPayablePage.waitForFormTitle();
    const formTitleText = await accountsPayablePage.getFormTitleText();
    expect(formTitleText).toContain('Great Job!');
  });
});
