const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://magento.softwaretestingboard.com/',
    chromeWebSecurity: false,
    defaultCommandTimeout: 7000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  
});