/// <reference types="cypress" />

context("Heroku Add Computer", () => {
  it("Type into a DOM element", () => {
    cy.visit("/computers");
    cy.get(".action-email").type("fake@email.com");
  });
});
