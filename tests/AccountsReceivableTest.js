const { test, expect } = require("./fixtures");

test.describe("Accounts Receivable Tests", () => {

    test.beforeEach(async ({ page, loginAsUser }) => {
        await loginAsUser;
        await expect(page).toHaveURL(process.env.APP_URL);
    });

    test('should navigate to Receivable and verify "Great Job!" text', async ({ page, accountsReceivable }) => {
        const formTitleText = await accountsReceivable.getFormTitleText();
        expect(formTitleText).toContain('Great Job!');
    });
});
