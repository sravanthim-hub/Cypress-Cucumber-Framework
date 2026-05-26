import { When, Then } from '@badeball/cypress-cucumber-preprocessor'
import { getApiHeader } from '../../support/helpers';

let response: Cypress.Response<any>
const apiBaseUrl = Cypress.env("apiBaseUrl");

When('I send a POST request to {string}', (endpoint: string) => {
  cy.fixture('createUser').then((requestBody) => {
    cy.request({
      method: 'POST',
      url: `${apiBaseUrl}${endpoint}`,
      headers: getApiHeader(),
      body: requestBody
    })
  }).then((res) => {
    response = res
  })
})

When('I send a PUT request to {string}', (endpoint: string) => {
  cy.fixture('updateUser').then((requestBody) => {
    cy.request({
      method: 'PUT',
      url: `${apiBaseUrl}${endpoint}`,
      headers: getApiHeader(),
      body: requestBody
    })
  }).then((res) => {
    response = res
  })
})

Then('the response status should be {int}', (status: number) => {
  expect(response.status).to.eq(status)
})

Then('the response should contain user {int} and {string}', (id: number, email:string) => {
  expect(response.body.id).to.eq(id)
  expect(response.body.email).to.eq(email)
})