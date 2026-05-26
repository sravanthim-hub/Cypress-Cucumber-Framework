# Cypress Cucumber TypeScript Framework

A scalable Cypress automation framework using:

* Cypress
* TypeScript
* Cucumber (BDD)
* Page Object Model (POM)
* Faker
* Environment Variables
* Parallel Execution
* HTML Reporting

# Tech Stack

* Cypress
* TypeScript
* @badeball/cypress-cucumber-preprocessor
* Esbuild Preprocessor
* multiple-cucumber-html-reporter
* Faker

# Project Setup

## 1. Initialize npm

```bash
npm init -y
```

## 2. Install Cypress

```bash
npm install cypress --save-dev
```

# Install Dependencies

## Cucumber + Esbuild

```bash
npm install @badeball/cypress-cucumber-preprocessor --save-dev

npm install @bahmutov/cypress-esbuild-preprocessor esbuild --save-dev
```

## TypeScript

```bash
npm install typescript ts-node --save-dev
```

## Faker

```bash
npm install @faker-js/faker --save-dev
```

## Parallel Execution

```bash
npm install cypress-parallel --save-dev
```

## HTML Reporter

```bash
npm install multiple-cucumber-html-reporter --save-dev
```

### Framework

1. Page Object Model
   All UI interactions are encapsulated inside page classes to avoid duplication and improve maintainability.
2. Feature files
    Test Scenarios are written in Gherkin language using Cypress Cucumber 
3. Environment Driven Configuration
   Environment specific vallues such as baseUrl and login credentials are managed through `.env` file

# Folder Structure

```plaintext
cypress/
 ├── e2e/
 │    ├── features/              # seperate folder for each feature files and step definitions
 │             
 ├── fixtures/
 │
 ├── pages/                      # Page Object Model
 ├     ├── BasePage.ts
 ├     ├── LoginPage.ts
 ├     ├── MyAccountPage.ts
 ├     ├── RegistrationPage.ts
 │
 ├── reports/                    # Json file and html report
 │    ├── cucumber-json/
 │    └── html-report/
 │
 ├── scripts/                    # script for generating html report
 │    └── report.cjs
 │
 └── support/                    # helper functions
```

# Running Tests

* npm run test               # running all the tests in headless mode
* npm run test-ui            # open cypress to run the tests
* npm run test-test          # run the tests with @test tag
* npm run report             # generate json file for generating report 
* npm run test:report        # run the tests and generate html report
* npm run cy:parallel        # run the tests in parallel