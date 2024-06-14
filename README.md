# plooto-test

## Setup

Install [Node](https://nodejs.org/) project dependencies:

```sh
npm install
```

Install browser binaries:

```sh
npx playwright install
```

## Credentials
Enter the credentials in the .env file

```sh
USER_EMAIL=""
USER_PASSWORD=""
```

## Usage

Run test in debug mode:

```sh
npx playwright test --project="plooto" --headed --debug tests/TestName.js
```
