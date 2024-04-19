describe('game page renders', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://prem-server-80f72a145ae6.herokuapp.com/api/v1/premresults', {
      statusCode: 200,
      fixture: 'prem-results'
    }).as('premResults')
    .visit('http://localhost:3000/')
    .wait('@premResults')
    cy.intercept('GET', 'https://prem-server-80f72a145ae6.herokuapp.com/api/v1/premstats', {
      statusCode: 200,
      fixture: 'prem-stats'
    }).as('premStats')
  })

  it('should navigate to game page from different pages', () => {
    cy.get('.nav-links-container').children().last().click()
    cy.get('h1').contains('Who Put More in the Back of the Net?')
    cy.get('.nav-links-container').children().eq(1).click()
    cy.get('.game-footer').click()
    cy.get('h1').contains('Who Put More in the Back of the Net?')
    cy.get('#club').select('Arsenal')
    cy.get('.form-btn').click()
    cy.get('.game-footer').click()
    cy.get('h1').contains('Who Put More in the Back of the Net?')
    cy.get('.nav-links-container').children().first().click()
    cy.get('.game-footer').click()
    cy.get('h1').contains('Who Put More in the Back of the Net?')
  })

  it('should let you play the game', () => {
    cy.get('.nav-links-container').children().last().click()
    cy.get('h2').contains('Rules to Play:')
    cy.get('.rules').children().should('have.length', 5)
    cy.get('.rules').children().first().contains('Two Premier League top goal scorers')
    cy.get('.rules').children().last().contains('If the goal amount is the same')
    cy.get('.ready-btn').click()
    cy.get('.correct').contains('Number Correct In A Row:')
    cy.get('.player-details').first().children().should('have.length', 5)
    cy.get('.player-details').last().children().should('have.length', 5)
    cy.get('.game-btn').first().contains('Select').click()
    cy.get('.player-details').first().children().should('have.length', 6)
    cy.get('.player-details').last().children().should('have.length', 6)
    cy.get('.game-result').children().should('have.length', 2)
    cy.get('.game-refresh-btn').contains('Play!').click()
    cy.get('.player-details').first().children().should('have.length', 5)
    cy.get('.player-details').last().children().should('have.length', 5)
  })

  it('should check if it is a winner', () => {
    cy.get('.nav-links-container').children().last().click()
    cy.get('.ready-btn').click()
    cy.get('.game-btn').first().click().then(() => {
      cy.get('.game-result').then(($result) => {
        if($result.text().includes('Master Class')) {
          cy.get('.correct').should('contain', '1')
        } else {
          cy.get('.correct').should('contain', '0')
        }
      })
    })
  })
  
  it('should show error if api fails', () => {
    cy.intercept('GET', 'https://prem-server-80f72a145ae6.herokuapp.com/api/v1/premstats', {
      statusCode: 500
    }).as('premStats')
    cy.get('.nav-links-container').children().last().click()
    cy.get('.ready-btn').click()
    cy.get('.api-error').children().first().contains('We are encountering issues.')
    cy.get('.back-home-btn').click()
    cy.get('h1').contains('Premier Tally')
  })
})
