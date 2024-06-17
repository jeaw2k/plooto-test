const { test, expect } = require("../fixtures/base.fixture");

test.describe("Accounts Receivable Tests", () => {
    test.beforeEach(async ({ page, loginAsUser, siteURL }) => {
        await loginAsUser;
        await expect(page).toHaveURL(siteURL);
    });

    test('should navigate to Receivable, check all entered values and verify "Great Job!" text', async ({ page, accountsReceivable }) => {
        const memoValue = 'Memo';
        const amountValue = 100;

        await accountsReceivable.enterMemo(memoValue);
        await accountsReceivable.enterAmount(amountValue);
        const fromValue = await accountsReceivable.selectRequestFrom();

        await accountsReceivable.clickContinue();

        const fromValueOnPage = await accountsReceivable.getDisplayedFromValue();
        expect(fromValueOnPage).toBe(fromValue);

        const memoValueOnPage = await accountsReceivable.getDisplayedMemoValue();
        expect(memoValueOnPage).toBe(memoValue);

        const amountValueOnPage = await accountsReceivable.getDisplayedAmountValue();
        expect(parseFloat(amountValueOnPage)).toBe(amountValue);

        await accountsReceivable.clickRequestPayment();

        await accountsReceivable.waitForFormTitle();
        const formTitleText = await accountsReceivable.getFormTitleText();
        expect(formTitleText).toContain('Great Job!');
    });
});