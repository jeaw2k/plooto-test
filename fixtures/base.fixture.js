const base = require("@playwright/test");
const { LoginPage } = require("../pageobjects/LoginPage");
const { AccountsPayablePage } = require("../pageobjects/AccountsPayablePage");
const { AccountsReceivablePage } = require("../pageobjects/AccountsReceivablePage");
const { AddNewBusinessAccountPage } = require("../pageobjects/AddNewBusinessAccountPage");
const { AddNewClientPage } = require("../pageobjects/AddNewClientPage");

const test = base.test.extend({
    loginAsUser: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await loginPage.loginAs(process.env.USER_EMAIL, process.env.USER_PASSWORD);
        await page.waitForLoadState('networkidle');
        await use(page);
    },

    siteURL: async ({}, use) => {
        await use(process.env.SITE_URL || "/#user/company/select");
    },

    async waitForElement() {
        await this.page.waitForLoadState('networkidle');
    }

    accountsPayable: async ({ page }, use) => {
        const accountsPayablePage = new AccountsPayablePage(page);
        await accountsPayablePage.navigateToPayables();
        await accountsPayablePage.clickNewPayable();
        await use(accountsPayablePage);
    },

    accountsReceivable: async ({ page }, use) => {
        const accountsReceivablePage = new AccountsReceivablePage(page);
        await accountsReceivablePage.navigateToReceivables();
        await accountsReceivablePage.clickNewReceivable();
        await use(accountsReceivablePage);
    },

    newBusinessAccount: async ({ page }, use) => {
        const addNewBusinessAccountPage = new AddNewBusinessAccountPage(page);
        await addNewBusinessAccountPage.clickOtherCompanies();
        await addNewBusinessAccountPage.clickAddNewCompany();
        await use(addNewBusinessAccountPage);
    },

    newClient: async ({ page }, use) => {
        const addNewClientPage = new AddNewClientPage(page);
        await addNewClientPage.clickAddNewClient();
        await addNewClientPage.selectAccountingFirm();
        await use(addNewClientPage);
    },
});

module.exports = { test, expect: base.expect };
