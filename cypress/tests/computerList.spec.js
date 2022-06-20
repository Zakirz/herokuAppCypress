/// <reference types="cypress" />
import { COMPUTER } from "../locators/locators";
import { addNewComputer } from "../pages/addComputer.page";
import {
  addNew,
  alertMsg,
  clickOnTableHeader,
  filter,
  getComputerPageTitle,
  selectComputerInTable,
  verifyComputerExistsInTable,
} from "../pages/computer.page";
import {
  deleteComputer,
  updateComputer,
  verifyComputerDetails,
} from "../pages/editComputer.page";

describe("Computer Table", () => {
  beforeEach(() => {
    cy.gotoComputerPage();
  });

  it("Able to sort computer wrt to list headers", () => {
    // filter  and select computer in table
    filter("Sort");

    // click on computer name and it should show sort down icon
    clickOnTableHeader("Computer name");

    // verify sorted
    cy.get(COMPUTER.computersList)
      .find("tr")
      .find("td a")
      .should("have.length", 2)
      .then(($els) => {
        return Cypress.$.makeArray($els).map((el) => el.innerText);
      })
      .should("deep.equal", ["ASort", "ZSort"]);

    // click on computer name again and it should show sort up icon
    clickOnTableHeader("Computer name");

    // verify sorted
    cy.get(COMPUTER.computersList)
      .find("tr")
      .find("td a")
      .should("have.length", 2)
      .then(($els) => {
        return Cypress.$.makeArray($els).map((el) => el.innerText);
      })
      .should("deep.equal", ["ZSort", "ASort"]);
  });
});
