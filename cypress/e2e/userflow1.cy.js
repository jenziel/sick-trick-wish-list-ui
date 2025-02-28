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
    cy.get('.card').should('have.length', 3)
    cy.get('.card').first().contains('p', 'regular treflip')
    cy.get('.card').first().contains('p', 'flat ground')
    cy.get('.card').first().contains('p', 'Link to Tutorial')
    cy.get('.card').first().contains('p', 'https://www.youtube.com/watch?v=XGw3YkQmNig')
    cy.get('.trick-container div:nth-child(2)').contains('p', 'switch heelflip')
    cy.get('.trick-container div:nth-child(2)').contains('p', 'stairs')
    cy.get('.trick-container div:nth-child(2)').contains('p', 'Link to Tutorial')
    cy.get('.trick-container div:nth-child(2)').contains('p', 'https://www.youtube.com/watch?v=9N9swrZU1HA')
    cy.get('.card').last().contains('p', 'regular frontside 50-50, backside 180 out')
    cy.get('.card').last().contains('p', 'ledge')
    cy.get('.card').last().contains('p', 'Link to Tutorial')
    cy.get('.card').last().contains('p', 'https://www.youtube.com/watch?v=9N9swrZU1HA')
   })

   it('keeps the value of each input synced with whatever a user types and displays it to the DOM upon clicking submit', () => {
    cy.get("select[name='stance']").select("regular").should('have.value', 'regular')
    cy.get("input[name='name']").type("hippie jump").should('have.value', 'hippie jump')
    cy.get("input[name='tutorial']").type("https://www.youtube.com/watch?v=Lp8GqGdObWo&ab_channel=BrailleSkateboarding").should('have.value', 'https://www.youtube.com/watch?v=Lp8GqGdObWo&ab_channel=BrailleSkateboarding')
    cy.get("select[name='obstacle']").select("Rail").should('have.value', 'Rail')
    cy.get('.submit-btn').click()
    cy.get('.card').should('have.length' , 4)
    cy.get('.card').last().contains('p', 'regular hippie jump')
    cy.get('.card').last().contains('p', 'rail')
    cy.get('.card').last().contains('p', 'Link to Tutorial')
    cy.get('.card').last().contains('p', 'https://www.youtube.com/watch?v=Lp8GqGdObWo&ab_channel=BrailleSkateboarding')
   })
})