import { 
    getById,
    getByClass,
    getByText } from "./helpers";

declare global {
    namespace Cypress {
        interface Chainable {
            getById: typeof getById
            getByClass: typeof getByClass
            getByText: typeof getByText
        }
    }
}


Cypress.Commands.add('getById', getById)
Cypress.Commands.add('getByClass', getByClass)
Cypress.Commands.add('getByText', getByText)