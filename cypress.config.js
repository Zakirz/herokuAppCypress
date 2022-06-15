const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  video: false,
  viewportHeight: 720,
  viewportWidth: 1280,
  e2e: {
    baseUrl: "http://computer-database.herokuapp.com",
    specPattern: "cypress/tests/*.spec.*",
    chromeWebSecurity: false,
    pageLoadTimeout: 60000,
    downloadsFolder: "cypress/downloads",
    defaultCommandTimeout: 30000,
  },
});
