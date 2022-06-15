const { EDIT_COMPUTER } = require("../locators/locators");

export function deleteComputer() {
  cy.get(EDIT_COMPUTER.deleteComputerBtn).click();
}
