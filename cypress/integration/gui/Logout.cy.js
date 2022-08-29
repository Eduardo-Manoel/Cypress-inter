/// <reference types="Cypress" />

describe('Logout',() => {
beforeEach (() => cy.Login ())
    it('successfully', () => {
        cy.Logout()

    cy.url().should('be.equal', `${Cypress.config('baseUrl')}users/sign_in`)
})
})