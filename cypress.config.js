import { defineConfig } from "cypress";
import dotenv from "dotenv";

import createBundler from "@bahmutov/cypress-esbuild-preprocessor";

import {
  addCucumberPreprocessorPlugin,
} from "@badeball/cypress-cucumber-preprocessor";

import { createEsbuildPlugin } from "@badeball/cypress-cucumber-preprocessor/esbuild";

dotenv.config()

export default defineConfig({
  e2e: {

    specPattern: "cypress/e2e/**/**/*.feature",
    baseUrl: process.env.BASE_URL,
    env: {
      loginEmail: process.env.EMAIL,
      password: process.env.PASSWORD,
      apiBaseUrl: 'https://reqres.in/api',
    },
    
    async setupNodeEvents(on, config) {

      await addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );
      config.env = {
        ...config.env,
        "cypress-cucumber-preprocessor": {
          json: {
            enabled: true,
            output: "..."
          }
        }
      };
      return config;
    },
  },
});