// @ts-check
const { devices } = require('@playwright/test');
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });

/**
 * @see https://playwright.dev/docs/test-configuration
 * @type {import('@playwright/test').PlaywrightTestConfig}
 */

const config = {
    testDir: './tests',
    timeout: 100 * 1000,
    expect: {
        timeout: 5000
    },
    fullyParallel: false,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    workers: process.env.CI ? 2 : require('os').cpus().length,
    reporter: 'html',
    use: {
        actionTimeout: 0,
        trace: 'on-first-retry',
        animations: "disabled",
        animationTimeout: 6000,
    },
    actionTimeout: process.env.CI ? 2000 : 0,
    projects: [
        {
            name: "plooto",
            testMatch: 'tests/**/*.js',

            use: {
                channel: "chrome",
                headless: process.env.CI ? true : false,
                trace: process.env.CI ? "retain-on-failure" : "retain-on-failure",
                screenshot: process.env.CI ? "off" : "on",
                video: process.env.CI ? "off" : "retain-on-failure",
                permissions: ["geolocation"],
                baseURL: process.env.BASE_URL || "https://cac-q4-plto-ui-app-01.azurewebsites.net",
            },
        }
    ],
    outputDir: 'test-results/',
};

module.exports = config;
