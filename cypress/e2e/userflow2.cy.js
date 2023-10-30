// Write a test that checks that when data is put into the form,
//  the value is reflected in that form input.

describe('Check that form is behaving as a controlled form would', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/tricks', {
      statusCode: 200,
      fixture: 'tricks.json'
    }).as('getTricks')
    cy.visit('http://localhost:3000')
  });

  it('keeps the value of each input synced with whatever a user types', () => {
    
  })
})