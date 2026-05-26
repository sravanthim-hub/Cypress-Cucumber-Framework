const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "cypress/reports/cucumber-json",

  reportPath: "cypress/reports/html-report",

  displayDuration: true,

  metadata: {
    browser: {
      name: "chrome",
      version: "latest",
    },

    device: "Local machine",

    platform: {
      name: process.platform,
    },
  },

  customData: {
    title: "Execution Info",

    data: [
      {
        label: "Project",
        value: "Cypress Cucumber Framework",
      },

      {
        label: "Environment",
        value: "QA",
      },
    ],
  },
});