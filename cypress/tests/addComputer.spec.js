/// <reference types="cypress" />
import {
  addComputer,
  invalidIntroduceDataFormat,
  invalidDiscontinueDataFormat,
  requiredNameField,
} from "../pages/addComputer.page";
import { addNew, alertMsg } from "../pages/computer.page";

describe("Heroku Computer", () => {
  beforeEach(() => {
    cy.gotoComputerPage();
  });

  it("Able to add new Computer", () => {
    // Generate randoms inputs to create test variables
    const date = new Date();
    const computerName = `NEW_COMP ${date.toLocaleDateString()}-${date.toLocaleTimeString()}`;
    const introductionDate = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
    const discontinueDate = `${
      date.getFullYear() + 1
    }-${date.getMonth()}-${date.getDate()}`;
    const company = "Lincoln Laboratory";

    // Open add new computer page
    addNew();

    // Add new computer
    addComputer(computerName, introductionDate, discontinueDate, company);

    // Verify new computer has been added
    alertMsg().should("contain.text", `${computerName} has been created`);
  });

  it("Able to add new Computer with incorrect details", () => {
    // Generate randoms inputs to create test variables
    const date = new Date();
    const introductionDate = `${date.getFullYear()}-${date.getMonth()}`;
    const discontinueDate = `${date.getFullYear() + 1}-${date.getMonth()}}`;
    const company = "Lincoln Laboratory";

    // Open add new computer page
    addNew();

    // Add new computer with incorrect data and empty name
    addComputer(" ", introductionDate, discontinueDate, company);

    // Verify new computer has not been added
    // Error field should be visible
    requiredNameField().should("be.visible").should("have.text", "Required");
    invalidIntroduceDataFormat()
      .should("be.visible")
      .should("have.text", "Date ('yyyy-MM-dd')");
    invalidDiscontinueDataFormat()
      .should("be.visible")
      .should("have.text", "Date ('yyyy-MM-dd')");
  });
});
