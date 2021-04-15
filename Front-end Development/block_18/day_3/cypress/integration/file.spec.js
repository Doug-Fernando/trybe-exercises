import '@testing-library/cypress/add-commands';

// context('Utilities', () => {
it('Cypress._ - call a lodash method', () => {
  cy.visit('http://localhost:3000/');
  cy.findByRole('button', { name: /Increment/i }).should('exist');
  cy.findByRole('button', { name: /decrement/i }).should('exist');
});

it('alkdlaks', () => {
  cy.visit('http://localhost:3000/');
  cy.findByRole('button', { name: /Increment/i }).click();
  cy.findByRole('button', { name: /Increment/i }).click();
  cy.findByRole('button', { name: /Increment/i }).click();
  cy.findByRole('button', { name: /Increment/i }).click();
  cy.get('.counter').contains('4');
});
// });
