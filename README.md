# Selenium Automation Practice

A small browser-automation project using JavaScript, Node.js, Selenium WebDriver, and Google Chrome. It contains page-object classes and example scripts for logging in to and registering an account on the [Demo Web Shop](https://demowebshop.tricentis.com/).

## Requirements

- Node.js and npm
- Google Chrome
- An internet connection to access the Demo Web Shop

Selenium WebDriver 4 uses Selenium Manager to locate or manage the browser driver when needed.

## Setup

From the project directory, install the dependencies:

```powershell
npm install
```

## Run the examples

Run either example directly with Node.js:

```powershell
node ".\tests\loginPagetests,js"
node ".\tests\registerPagetest.js"
```

The scripts open Chrome and interact with the live Demo Web Shop. The registration example uses a fixed email address, so a subsequent run may fail if that address has already been registered. Update the sample values in the relevant test file before running it again.

> **Note:** The `test` script in `package.json` currently points to `automation.js`, which is not present in this repository. Use the direct commands above to run the examples.

## Project structure

```text
.
├── pages/
│   ├── loginPage.js          # Login page object and browser actions
│   └── registerPage.js       # Registration page object and browser actions
├── tests/
│   ├── loginPagetests,js     # Login workflow example
│   └── registerPagetest.js   # Registration workflow example
├── base.html
├── base.mjs
├── package.json
└── package-lock.json
```

## Notes

- These are workflow examples, not a configured test-runner suite; they do not currently include automated assertions.
- The login example also contains sample credentials. Replace them with a test account you control before running the script.
