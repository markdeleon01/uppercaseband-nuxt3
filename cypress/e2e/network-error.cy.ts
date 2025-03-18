/* eslint-disable no-undef */
// https://docs.cypress.io/api/introduction/api.html

describe('Test the network error page', () => {
  it('visits the app network error url', () => {
    cy.visit('/')

    //cy.get('#nav').find('.nuxt-link-exact-active').should('have.length', 1)
    //cy.contains('.nuxt-link-exact-active', 'Home')
    cy.get('.home').should('have.length', 1)
    //cy.title().should('eq', 'U P P E R C A S E')
    cy.contains('h1', 'U P P E R C A S E')

    cy.visit('/NetworkIssue/')
    cy.get('.network-issue').should('have.length', 1)
    //cy.title().should('eq', 'U P P E R C A S E')
    cy.contains('h1', 'Uh-Oh!')
    cy.contains('h3', 'Unable to retrieve page content.')
    cy.get('.back').should('have.length', 1)
  })
})
