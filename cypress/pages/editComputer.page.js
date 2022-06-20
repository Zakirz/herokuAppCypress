const { EDIT_COMPUTER, ADD_COMPUTER } = require("../locators/locators");

export function deleteComputer() {
  cy.get(EDIT_COMPUTER.deleteComputerBtn).click();
}

export function updateComputer(
  name,
  introducedDate,
  discontinuedDate,
  company
) {
  cy.get(ADD_COMPUTER.computerNameInput).clear().type(name);
  cy.get(ADD_COMPUTER.introducedDateInput).clear().type(introducedDate);
  cy.get(ADD_COMPUTER.discontinuedDateInput).clear().type(discontinuedDate);
  cy.get(ADD_COMPUTER.companyDropDown).select(company);
  cy.get(EDIT_COMPUTER.saveComputerBtn).click();
}

export function verifyComputerDetails(
  name,
  introducedDate,
  discontinuedDate,
  company
) {
  cy.get(ADD_COMPUTER.computerNameInput).should("have.value", name);
  cy.get(ADD_COMPUTER.introducedDateInput).should(
    "contain.value",
    introducedDate
  );
  cy.get(ADD_COMPUTER.discontinuedDateInput).should(
    "contain.value",
    discontinuedDate
  );
  cy.get(ADD_COMPUTER.companyDropDown + " option[selected]").should(
    "have.text",
    company
  );
}
