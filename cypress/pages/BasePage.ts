class BasePage {
  
waitForPageLoad() {
    cy.document()
        .its('readyState')
        .should('eq', 'complete')
    }
  }

  export default new BasePage();