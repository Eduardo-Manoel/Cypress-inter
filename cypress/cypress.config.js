const { defineConfig } = require("cypress"); 


module.exports = defineConfig({
  projectId: 'mswjpr',
  viewportHeight: 880,
  viewportWidth: 1280,
  CYPRESS_RECORD_KEY: 'a72a2449-b6f1-40d2-a04c-839d991db88f',
  e2e: {
    supportFile: 'support/e2e.js',
    specPattern: 'e2e/**/*.cy.{js,jsx,ts,tsx}',
    baseUrl: 'http://localhost/',
    //slowTestThreshold: 1000,
    env: {
      user_name: "eduardo",
      user_password: "19202122",
      gitlab_access_token: "_NyV7MWBrHciGDHvcrMy",
      setupNodeEvents(on, config) {
        // implement node event listeners here
      }
    },
  },
});