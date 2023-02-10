const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    env: {
      API_URL: 'https://reqres.in',
    },
    experimentalRunAllSpecs: true,
  },
  fixturesFolder: false,
})