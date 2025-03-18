describe('Test the discography page', () => {
  it('visits the app discography url', () => {
    cy.visit('/')
    cy.get('a[href="/Discography"]').click()

    //cy.get('#nav').find('.nuxt-link-exact-active').should('have.length', 1)
    //cy.contains('.nuxt-link-exact-active', 'Discography')
    cy.get('.discography').should('have.length', 1)

    //cy.title().should('eq', 'U P P E R C A S E')
    cy.contains('h1', 'U P P E R C A S E')
    cy.contains('h2', 'Discography')
    //cy.get('.release-item').should('have.length', 6)
  })
})
