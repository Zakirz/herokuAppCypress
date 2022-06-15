const { ADD_COMPUTER } = require("../locators/locators");

function addComputer(name, introducedDate, discontinuedDate, company) {
  cy.get(ADD_COMPUTER.computerNameInput).type(name);
  cy.get(ADD_COMPUTER.introducedDateInput).type(introducedDate);
  cy.get(ADD_COMPUTER.discontinuedDateInput).type(discontinuedDate);
  cy.get(ADD_COMPUTER.companyDropDown).select(company);
  cy.get(ADD_COMPUTER.createComputerBtn).click();
}

function cancelAddComputer() {
  cy.get(ADD_COMPUTER.cancelBtn).click();
}
