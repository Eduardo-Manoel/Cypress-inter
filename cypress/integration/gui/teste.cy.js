/// <reference types="Cypress" />

describe('Login', () => {
    it('successfully', () => {
      cy.Login()
  
      cy.get('.qa-user-avatar').should('exist')
    })
  })
  