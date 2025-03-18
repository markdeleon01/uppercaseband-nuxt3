
describe('Test the events page', () => {
  it('visits the app events url', () => {
    cy.visit('/')
    cy.get('a[href="/Events"]').click()

    //cy.get('#nav').find('.nuxt-link-exact-active').should('have.length', 1)
    //cy.contains('.nuxt-link-exact-active', 'Events')
    cy.get('.events').should('have.length', 1)

    //cy.title().should('eq', 'U P P E R C A S E')
    cy.contains('h1', 'U P P E R C A S E')
    cy.contains('h2', 'Events')
    //cy.get('.event-item').should('have.length', 6)
  })
})
