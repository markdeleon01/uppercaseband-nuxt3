
describe('Test the not found page', () => {
  it('visits the app not found url', () => {
    cy.visit('/')

    //cy.get('#nav').find('.nuxt-link-exact-active').should('have.length', 1)
    //cy.contains('.nuxt-link-exact-active', 'Home')
    cy.get('.home').should('have.length', 1)
    //cy.title().should('eq', 'U P P E R C A S E')
    cy.contains('h1', 'U P P E R C A S E')

    /*
    cy.visit('/blahblahblah')
    cy.get('.error').should('have.length', 1)
    cy.contains('.title', 'This page could not be found')
    cy.get('.description').should('have.length', 1)
    cy.contains('.description', 'Back to the home page')
    */

    cy.visit('/NotFound')
    cy.get('.not-found').should('have.length', 1)
    //cy.title().should('eq', 'U P P E R C A S E')
    cy.contains('h1', 'Oops!')
    cy.contains('h3', 'looking for is not available.')
    cy.get('.back').should('have.length', 1)
  })
})
