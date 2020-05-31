const constants = require('./scenario/constants');

exports.config = {
  tests: './scenario/*_test.js',
  output: './output',
  helpers: {
    Protractor: {
      url: 'https://www.youtube.com',
      driver: 'hosted',
      browser: 'chrome',
      restart: true,
      smartWait: 35000,
      rootElement: 'body',
      capabilities: {
        "chromeOptions": {
          "args": [
            "--incognito",
            "--headless",
            "--disable-gpu",
            "--disable-cache",
            `--window-size=${constants.dimensions.desktop.width},${constants.dimensions.desktop.height}`
          ]
        }
      }
    }
  },
  include: {
    I: './scenario/custom_steps.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'scenario',
  plugins: {
    allure: {
      enabled: true
    }
  }
};
