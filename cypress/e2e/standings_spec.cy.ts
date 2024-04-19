describe('standings page renders', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://prem-server-80f72a145ae6.herokuapp.com/api/v1/premresults', {
      statusCode: 200,
      fixture: 'prem-results'
    }).as('premResults')
    .visit('http://localhost:3000/')
    .wait('@premResults')
  })

  it('navigates to standings page', () => {
    cy.get('.form-btn').click()
    cy.get('.error-form').contains('Please select either a club or year.')
    cy.get('#club').select('Arsenal')
    cy.get('.form-btn').click()
    cy.get('.year').contains('All Finishes')
    cy.get('.league-table').children().eq(1).children().eq(1).contains('Arsenal (2023)**')
    cy.get('.league-table').children().last().children().last().contains('Europa League via league finish')
    cy.get('#year').select('2023')
    cy.get('.form-btn').click()
    cy.get('.league-table').children().eq(1).children().eq(1).contains('Manchester City')
    cy.get('.league-table').children().last().children().last().contains('Relegated')
    cy.get('#club').select('Leicester City')
    cy.get('#year').select('2022')
    cy.get('.form-btn').click()
    cy.get('.league-table').children().eq(1).children().eq(1).contains('Leicester City')
    cy.get('#club').select('Burnley')
    cy.get('#year').select('2023')
    cy.get('.form-btn').click()
    cy.get('.not-found').children().first().contains('Sorry, that club did not play in the Premier League that year.')
    cy.get('.not-found').children().last().contains('Back To Home')
  })

  it('should show error if api fails', () => {
    cy.intercept('GET', 'https://prem-server-80f72a145ae6.herokuapp.com/api/v1/premresults', {
      statusCode: 500
    }).as('premFail')
    .visit('http://localhost:3000/')
    .wait('@premFail')
    cy.get('.api-error').contains('Unable to get football data right now.')
  })
})