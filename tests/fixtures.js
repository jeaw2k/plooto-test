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
        await use(page);
    },
    
    accountsPayable: async ({ page }, use) => {
        const accountsPayablePage = new AccountsPayablePage(page);
        await accountsPayablePage.navigateToPayables();
        await accountsPayablePage.clickNewPayable();
        await accountsPayablePage.selectPayToField();
        await accountsPayablePage.selectDropdownOption();
        await accountsPayablePage.enterAmount(100);
        await accountsPayablePage.clickContinue();
        await accountsPayablePage.clickSendPayment();
        await accountsPayablePage.waitForFormTitle();
        await use(accountsPayablePage);
    },

    accountsReceivable: async ({ page }, use) => {
        const accountsReceivablePage = new AccountsReceivablePage(page);
        await accountsReceivablePage.navigateToReceivables();
        await accountsReceivablePage.clickNewReceivable();
        await accountsReceivablePage.enterMemo('Memo');
        await accountsReceivablePage.enterAmount(100);
        await accountsReceivablePage.selectRequestFrom();
        await accountsReceivablePage.clickContinue();
        await accountsReceivablePage.clickRequestPayment();
        await accountsReceivablePage.waitForFormTitle();
        await use(accountsReceivablePage);
    },

    newBusinessAccount: async ({ page }, use) => {
        const addNewBusinessAccountPage = new AddNewBusinessAccountPage(page);
        await addNewBusinessAccountPage.clickOtherCompanies();
        await addNewBusinessAccountPage.clickAddNewCompany();
        await addNewBusinessAccountPage.selectAccountingFirm();
        await addNewBusinessAccountPage.enterBusinessName('X Wing');
        await addNewBusinessAccountPage.enterBusinessPhone('5555554444');
        await addNewBusinessAccountPage.enterExtension('1221');
        await addNewBusinessAccountPage.selectCountry();
        await addNewBusinessAccountPage.selectSpecifyBusiness();
        await addNewBusinessAccountPage.clickContinueButton();
        await addNewBusinessAccountPage.clickBuildPlanButton();
        await addNewBusinessAccountPage.clickConfirmButton();
        await addNewBusinessAccountPage.clickGotItButton();
        await use(addNewBusinessAccountPage);
    },

    newClient: async ({ page }, use) => {
        const addNewClientPage = new AddNewClientPage(page);
        await addNewClientPage.clickAddNewClient();
        await addNewClientPage.selectAccountingFirm();
        await addNewClientPage.enterBusinessName('Xerox');
        await addNewClientPage.enterBusinessPhone('5555555555');
        await addNewClientPage.enterExtension('1234');
        await addNewClientPage.selectCountry();
        await addNewClientPage.selectSpecifyBusiness();
        await addNewClientPage.clickContinueButton();
        await addNewClientPage.clickBuildPlanButton();
        await addNewClientPage.clickConfirmButton();
        await addNewClientPage.clickGotItButton();
        await use(addNewClientPage);
    },
});

module.exports = { test, expect: base.expect };
