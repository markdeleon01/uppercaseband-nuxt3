
describe('Test the about page', () => {
  it('visits the app about url', () => {
    cy.visit('/')
    cy.get('a[href="/About"]').click()

    //cy.get('#nav').find('.nuxt-link-exact-active').should('have.length', 1)
    //cy.contains('.nuxt-link-exact-active', 'About')
    cy.get('.about').should('have.length', 1)

    //cy.title().should('eq', 'U P P E R C A S E')
    cy.contains('h1', 'U P P E R C A S E')
    cy.contains('h2', 'Band Members')
    //cy.get('.member-item').should('have.length', 4)
    cy.get('.band-pic').should('have.length', 1)
    cy.get('.biography').should('have.length', 1)
  })
})
