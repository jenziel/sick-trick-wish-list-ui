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
    cy.get('h1').contains('Sick Trick Wish List')
  })
})