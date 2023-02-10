const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    env: {
      API_URL: 'https://reqres.in',
    },
  },
  fixturesFolder: false,
})