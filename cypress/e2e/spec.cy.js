// Write tests covering what should be displayed on the page when the user first visits.

// Write a test that checks that when data is put into the form, the value is reflected in that form input.

// Write a test to check the user flow of adding a new trick to the DOM.

describe('On pageload I should see a title, a form with 4 input fields and submit button to add a new trick.  I should see trick cards describing tricks. ', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/tricks', {
      statusCode: 200,
      fixture: 'tricks.json'
    }).as('getTricks')
    cy.visit('http://localhost:3000')
  });
  
  it('should include all the info shown on the spec.', () => {
    cy.wait('@getTricks')
    cy.get('html').should('have.css', 'background-image')
    .and('include', 'goffbooks.com/wp-content/uploads/2020/02/9781951541187_002_iart-1024x664.jpg')
    cy.get('h1').contains('Sick Trick Wish List')
    cy.get('.stance').contains('Choose your stance')
    cy.get('.trick-name').should('have.attr', 'placeholder', 'Name of Trick')
    cy.get('.obstacle').contains('Choose your Obstacle')
    cy.get('.tutorial').should('have.attr', 'placeholder', 'Link to Tutorial')
    cy.get('.submit-btn').contains('Send it!')
    cy.get('.trick-container').first().contains('p', 'regular treflip')
    cy.get('.trick-container').first().contains('p', 'flat ground')
    cy.get('.trick-container').first().contains('p', 'Link to Tutorial')
    cy.get('.trick-container').first().contains('p', 'https://www.youtube.com/watch?v=XGw3YkQmNig')
    cy.get('.trick-container div:nth-child(2)').contains('p', 'switch heelflip')
    cy.get('.trick-container div:nth-child(2)').contains('p', 'stairs')
    cy.get('.trick-container div:nth-child(2)').contains('p', 'Link to Tutorial')
    cy.get('.trick-container div:nth-child(2)').contains('p', 'https://www.youtube.com/watch?v=9N9swrZU1HA')
    cy.get('.trick-container').last().contains('p', 'regular frontside 50-50, backside 180 out')
    cy.get('.trick-container').last().contains('p', 'ledge')
    cy.get('.trick-container').last().contains('p', 'Link to Tutorial')
    cy.get('.trick-container').last().contains('p', 'https://www.youtube.com/watch?v=9N9swrZU1HA')
   })
})