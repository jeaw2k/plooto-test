const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../pageobjects/LoginPage");
const { AccountsReceivablePage } = require("../pageobjects/AccountsReceivablePage");

require("dotenv").config();

test.describe("Accounts Receivable Tests", () => {
    let accountsReceivablePage;

    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.loginAs(process.env.USER_EMAIL, process.env.USER_PASSWORD);
        await expect(page).toHaveURL(process.env.APP_URL);

        accountsReceivablePage = new AccountsReceivablePage(page);
    });

    test('should navigate to Receivable and verify "Great Job!" text', async () => {
        await accountsReceivablePage.navigateToReceivables();
        await accountsReceivablePage.clickNewReceivable();
        await accountsReceivablePage.enterMemo('Memo');
        await accountsReceivablePage.enterAmount(100);
        await accountsReceivablePage.selectRequestFrom();
        await accountsReceivablePage.clickContinue();
        await accountsReceivablePage.clickRequestPayment();

        await accountsReceivablePage.waitForFormTitle();

        const formTitleText = await accountsReceivablePage.getFormTitleText();
        expect(formTitleText).toContain('Great Job!');
    });
});
