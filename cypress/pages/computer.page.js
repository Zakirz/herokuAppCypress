const { COMPUTER } = require("../locators/locators");

export function filter(name) {
  cy.get(COMPUTER.searchInput).type(name);
  cy.get(COMPUTER.searchSubmitBtn).click();
}

export function addNew() {
  cy.get(COMPUTER.addComputerBtn).click();
}

export function alertMsg() {
  return cy.get(COMPUTER.alert);
}
