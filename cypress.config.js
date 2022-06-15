const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    baseUrl: "http://computer-database.herokuapp.com",
    specPattern: "cypress/tests/*.spec.*",
    chromeWebSecurity: false,
    pageLoadTimeout: 60000,
    downloadsFolder: "cypress/downloads",
  },
});
