export const getById =(id:string):Cypress.Chainable =>{
    return cy.get(`[id="${id}"]`)
}
export const getByClass =(className:string):Cypress.Chainable =>{
    return cy.get(`[class="${className}"]`)
}

export const getByText =(textValue:string):Cypress.Chainable =>{
    return cy.get(`[text="${textValue}"]`)
}

export function getApiHeader() {
    return {
        "x-api-key": "free_user_3E88BbvGbZkiCVzfUMRLm4Y7JmM" 
    }
}