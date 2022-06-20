/// <reference types="cypress" />
import { addNewComputer } from "../pages/addComputer.page";
import {
  addNew,
  alertMsg,
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

describe("Configure Computer", () => {
  beforeEach(() => {
    cy.gotoComputerPage();
  });

  it("Able to add and update new computer", () => {
    // Generate randoms inputs to create test variables
    const date = new Date();
    const computerName = `NEW_COMP ${date.toLocaleDateString()}-${date.toLocaleTimeString()}`;
    let month = date.getMonth() + 1;
    if (month <= 9) {
      month = "0" + month;
    }
    const introductionDate = `${date.getFullYear()}-${month}-${date.getDate()}`;
    const discontinueDate = `${
      date.getFullYear() + 1
    }-${month}-${date.getDate()}`;
    const company = "Lincoln Laboratory";

    const updatedComputerName = `UPDATED_COMP ${date.toLocaleDateString()}-${date.toLocaleTimeString()}`;
    const updatedIntroductionDate = `${
      date.getFullYear() + 1
    }-${month}-${date.getDate()}`;
    const updatedDiscontinueDate = `${
      date.getFullYear() + 2
    }-${month}-${date.getDate()}`;
    const updatedCompany = "Netronics";

    // Open add new computer page
    addNew();

    // Add new computer
    addNewComputer(computerName, introductionDate, discontinueDate, company);

    // Verify new computer has been added
    alertMsg().should("contain.text", `${computerName} has been created`);

    // filter  and select computer in table
    filter(computerName);

    // select the computer
    selectComputerInTable(computerName);

    // update the computer and verify the alert
    updateComputer(
      updatedComputerName,
      updatedIntroductionDate,
      updatedDiscontinueDate,
      updatedCompany
    );
    alertMsg().should(
      "contain.text",
      `Computer ${updatedComputerName} has been updated`
    );

    // search for computer with old name and verify should not exist
    filter(computerName);
    getComputerPageTitle().should("have.text", "No computers found");

    // search for computer with updated name and verify existence and details are correct
    filter(updatedComputerName);
    verifyComputerExistsInTable(updatedComputerName);
    selectComputerInTable(updatedComputerName);
    verifyComputerDetails(
      updatedComputerName,
      updatedIntroductionDate,
      updatedDiscontinueDate,
      updatedCompany
    );

    // finally delete the computer
    deleteComputer();
    alertMsg().should("contain.text", " Computer has been deleted");
  });
});
