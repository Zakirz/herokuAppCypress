const { COMPUTER, ADD_COMPUTER } = require("../locators/locators");

function filterComputer(name) {
  cy.get(COMPUTER.searchInput).type(name);
  cy.get(COMPUTER.searchSubmitBtn).click();
}
