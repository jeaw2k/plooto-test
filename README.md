# E2E testing of the 4 main functions of Plooto.

## Author:

- Task completed by Yura Spizhoviy, according to the information provided by Plooto

## Main goal

- The goal of this task is to automate the process of make new payment, collect new payment, add new client and add new company using Playwright.

## Description of tests

### 1. Make new payment:

- User auto-login to the site
- Go to the "Payables" page
- Manually enter the data for payment
- Send the payment 
- Verification of entered data on "Confirm Payments" page
- Get a successful page

### 2. Collect new payment:

- User auto-login to the site
- Go to the "Receivables" page
- Manually enter the data for payment
- Verification of entered data on "Confirm Payments" page
- Request the payment 
- Get a successful page

### 3. Create new user/client:

- User auto-login to the site
- Go to the company profile
- Add a new client
- Choose a client plan 
- Confirm your subscription 
- Get a successful page

### 4. Create new company:

- User auto-login to the site
- Go to the company profile
- Add a new company
- Choose a client plan 
- Confirm your subscription 
- Get a successful page

## Installation

### Steps to install the project:

1. Cloning the repository

```shell
git clone https://github.com/jeaw2k/plooto-test
```

2. Move to the directory

```shell
cd plooto-test
```

3. Installing required dependencies

```shell
npm install
```

4. Installing playwright

```shell
npx install playwright
```

# Command Line

## Running a test file

```shell
npx playwright test --project="plooto" --headed tests/TestName.js
```

# Credentials

## Enter the credentials in the .env file

```sh
USER_EMAIL=""
USER_PASSWORD=""
```

