/// <reference types="Cypress" />

Cypress.Commands.add('Login', function () {
   cy.visit('/')
   cy.get("[data-qa-selector='login_field']")
      .type(Cypress.env('user_name'))
   cy.get("[data-qa-selector='password_field']")
      .type(Cypress.env('user_password'))
   cy.get("[data-qa-selector='sign_in_button']")
      .click()
})

Cypress.Commands.add('Logout', () => {
   cy.get('.qa-user-avatar')
      .click()
   cy.contains('Sign out')
      .click()
})
Cypress.Commands.add('gui_createProject', project => {
   cy.visit('project/new')
   cy.get('#project_name')
      .type(project.name)
   cy.get('#project_description')
      .type(project.description)
   cy.get('qa-initialize-with-readme-checkbox')
      .check()
   cy.contains('Create project')
      .click()
})