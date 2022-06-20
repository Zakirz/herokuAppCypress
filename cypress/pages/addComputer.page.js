const { ADD_COMPUTER } = require("../locators/locators");

export function fillComputerDetails(
  name,
  introducedDate,
  discontinuedDate,
  company
) {
  cy.get(ADD_COMPUTER.computerNameInput).clear().type(name);
  cy.get(ADD_COMPUTER.introducedDateInput).clear().type(introducedDate);
  cy.get(ADD_COMPUTER.discontinuedDateInput).clear().type(discontinuedDate);
  cy.get(ADD_COMPUTER.companyDropDown).select(company);
}

export function addNewComputer(
  name,
  introducedDate,
  discontinuedDate,
  company
) {
  fillComputerDetails(name, introducedDate, discontinuedDate, company);
  clickCreateNewComputer();
}

export function clickCancel() {
  cy.get(ADD_COMPUTER.cancelBtn).click();
}

export function clickCreateNewComputer() {
  cy.get(ADD_COMPUTER.createComputerBtn).click();
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
