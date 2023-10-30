// Write a test to check the user flow of adding a new trick to the DOM.

describe('new trick should appear upon submitting the form', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/tricks', {
      statusCode: 200,
      fixture: 'tricks.json'
    }).as('getTricks')
    cy.visit('http://localhost:3000')
  });
  it('shows a new trick when the user clicks the submit button', () => {
    
  })
})