/// <reference types="Cypress" />


const cypress = require('cypress')
const faker = require('faker')
describe('Create Project', () => {
    beforeEach (() => cy.login ())

    it('successfully', ()=>{
        const project = {
            name: `project-${faker.random.uuid()}`,
            description: faker.random.words(10)
        }
        cy.gui_createProject(project)
        cy.url()
        .should ('be.equal', `${cypress.defineConfig('baseUrl')}${(Cypress.env('user_name'))}/${project.name}`)
        cy.contains(project.name)
        .should('be.visible')
        cy.contains(project.description)
        .should('be.visible')
    })
})

//(Cypress.env('user_name'))