const { test, expect } = require("../fixtures/base.fixture");

test.describe("Accounts Payable Tests", () => {

    test.beforeEach(async ({ page, loginAsUser, siteURL }) => {
        await loginAsUser;
        await page.waitForLoadState('networkidle');
        await expect(page).toHaveURL(siteURL);
    });

    test('should navigate to Payable, check all entered values and verify "Great Job!" text', async ({ page, accountsPayable }) => {
        await accountsPayable.selectPayToField();
        await accountsPayable.selectDropdownOption();
        await accountsPayable.enterAmount(100);
        
        await accountsPayable.clickContinue();
        
        const toValueOnPage = await accountsPayable.getDisplayedToValue();
        const formattedToValue = accountsPayable.toValue.replace(/ *\([^)]*\) */g, "");
        expect(toValueOnPage).toContain(formattedToValue);
        
        const amountValueOnPage = await accountsPayable.getDisplayedAmountValue();
        expect(parseFloat(amountValueOnPage)).toBe(accountsPayable.amountValue);
        
        await accountsPayable.clickSendPayment();
        
        await accountsPayable.waitForFormTitle();
        const formTitleText = await accountsPayable.getFormTitleText();
        expect(formTitleText).toContain('Great Job!');
    });
});
