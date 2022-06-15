/**
 * Navigate to computer page
 */
Cypress.Commands.add("gotoComputerPage", () => {
  cy.visit("/computers");
});
