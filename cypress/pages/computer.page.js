const { COMPUTER } = require("../locators/locators");

export function filter(name) {
  cy.get(COMPUTER.searchInput).clear().type(name);
  cy.get(COMPUTER.searchSubmitBtn).click();
}

export function addNew() {
  cy.get(COMPUTER.addComputerBtn).click();
}

export function alertMsg() {
  return cy.get(COMPUTER.alert);
}

export function selectComputerInTable(name) {
  cy.get(COMPUTER.computersList)
    .find("tr")
    .eq(1)
    .find("td")
    .contains(name)
    .click();
}

export function verifyComputerExistsInTable(name) {
  cy.get(COMPUTER.computersList)
    .find("tr")
    .eq(1)
    .find("td")
    .contains(name)
    .should("be.visible");
}

export function verifyComputerNotExistsInTable(name) {
  cy.get(COMPUTER.computersList)
    .find("tr")
    .eq(1)
    .find("td")
    .contains(name)
    .should("not.be.visible");
}

export function getComputerPageTitle() {
  return cy.get(COMPUTER.computerTitleHeader);
}

export function clickOnTableHeader(name) {
  cy.get(COMPUTER.computersList)
    .find("th")
    .contains(name)
    .should("be.visible")
    .click();
}
