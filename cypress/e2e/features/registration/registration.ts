import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";
import { getContext } from "../../../support/testContext";
import { testData } from "../../testData/constants";
import { registrationData } from "../../testData/registrationData";

const { pages } = getContext()

let users: any[] = [];


Given("user is on registration page", () => {
  pages.registration.visit()
});

When("user enters the following details", (dataTable: DataTable) => {
  users = dataTable.hashes();
  users.forEach(user => {
        pages.registration.registerUser(
            user.firstName,
            user.lastName,
            user.email,
            user.telephone,
            user.password
        )
    
        cy.get('.page-title').should('contain.text',testData.successRegistrationMessage)
        pages.myAccount.logout()
        pages.registration.visit()
    });
});

When("user enters the following details without agreeing privacy policy", () => {
  
    pages.registration.registerUserWithoutAgreeingPrivacyPolicy(
        registrationData.firstName,
        registrationData.lastName,
        registrationData.email,
        registrationData.telephone,
        registrationData.password
    )

})

Then("user should be registered successfully", () => {
  expect(users.length).to.be.greaterThan(0);

  cy.log(`Total users tested: ${users.length}`);
});

Then("warning message should be displayed", () => {
    pages.registration.getPrivacypolicyWarningMessage().should('contain.text',testData.privacyPolicyAlertMessage)
})

Then("user should not be registered", () => {
    cy.url().should('contain',"/register")
})

