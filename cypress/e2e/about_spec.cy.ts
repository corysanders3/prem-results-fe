describe('about page renders', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://prem-server-80f72a145ae6.herokuapp.com/api/v1/premresults', {
      statusCode: 200,
      fixture: 'prem-results'
    }).as('premResults')
    .visit('http://localhost:3000/')
    .wait('@premResults')
  })

  it('navigates to about page', () => {
    cy.get('.nav-links-container').children().eq(1).click()
    cy.get('h1').contains('Premier Tally')
    cy.get('h2').contains('Tracking England Football Triumphs')
    cy.get('.about-p').contains('The English Premier League is the top')
    cy.get('.pyramid-img').should('have.attr', 'alt')
    cy.get('.game-blurb').contains('Like playing games??')
    cy.get('.nav-links-container').children().first().click()
    cy.get('.story-main').children().first().contains('Premier League Top Moments...')
  })
})