describe('home page renders', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://prem-server-80f72a145ae6.herokuapp.com/api/v1/premresults', {
      statusCode: 200,
      fixture: 'prem-results'
    }).as('premResults')
    .visit('http://localhost:3000/')
    .wait('@premResults')
  })

  it('loads the homepage', () => {
    cy.get('h1').contains('Premier Tally')
    cy.get('.nav-links-container').children().first().contains('Home')
    cy.get('.nav-links-container').children().last().contains('Game')
    cy.get('.search-header').contains('See past season standings by season end year, team, or both:')
    cy.get('#club').children().first().contains('Choose a club')
    cy.get('#club').children().last().contains('Wolves')
    cy.get('#club').children().should('have.length', 24)
    cy.get('#year').children().first().contains('Choose a year')
    cy.get('#year').children().last().contains(2022)
    cy.get('#year').children().should('have.length', 3)
    cy.get('.story-main').children().first().contains('Premier League Top Moments...')
    cy.get('.video-a').should('not.have.attr', 'href', '#undefined')
    cy.get('.video-a').children().first().contains('Video')
    cy.get('.game-blurb').contains('Like playing games??')
  })
})