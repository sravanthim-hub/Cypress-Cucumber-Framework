import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import { testData } from "../../testData/constants";
import { getContext } from "../../../support/testContext";

const { pages } = getContext()

const loginEmail = Cypress.env("loginEmail");
const password = Cypress.env("password");


Given("user is on login page", () => {
  cy.visit("login");
});

When("user login with {string} and {string}", (
  email:string, password: string) => {
    pages.login.login(email, password)
  })

Then("user should not be able to login successfully", () => {
    pages.login.getLoginFailedMessage().should('contain.text',testData.loginFailedWarningMessage)
});

Then("user should login successfully", () => {
  pages.myAccount.getTitle().should('contain.text','My Account');
});

When("user login with valid credentials", () => {
  pages.login.login(loginEmail,password)
})