const { ADD_COMPUTER } = require("../locators/locators");

export function addComputer(name, introducedDate, discontinuedDate, company) {
  cy.get(ADD_COMPUTER.computerNameInput).type(name);
  cy.get(ADD_COMPUTER.introducedDateInput).type(introducedDate);
  cy.get(ADD_COMPUTER.discontinuedDateInput).type(discontinuedDate);
  cy.get(ADD_COMPUTER.companyDropDown).select(company);
  cy.get(ADD_COMPUTER.createComputerBtn).click();
}

export function cancelAddComputer() {
  cy.get(ADD_COMPUTER.cancelBtn).click();
}

export function requiredNameField() {
  return cy.get(ADD_COMPUTER.computerNameHelp);
}
export function invalidIntroduceDataFormat() {
  return cy.get(ADD_COMPUTER.introducedDateHelp);
}
export function invalidDiscontinueDataFormat() {
  return cy.get(ADD_COMPUTER.discontinuedDateHelp);
}
