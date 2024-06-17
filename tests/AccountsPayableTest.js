const { test, expect } = require("./fixtures");

test.describe("Accounts Payable Tests", () => {

    test.beforeEach(async ({ page, loginAsUser }) => {
        await loginAsUser;
        await expect(page).toHaveURL(process.env.APP_URL);
    });

    test('should navigate to Payable and verify "Great Job!" text', async ({ page, accountsPayable }) => {
        const formTitleText = await accountsPayable.getFormTitleText();
        expect(formTitleText).toContain('Great Job!');
    });
});
