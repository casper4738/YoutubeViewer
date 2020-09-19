const constants = require('./scenario/constants');

exports.config = {
  tests: './scenario/*_test.js',
  output: './output',
  helpers: {
    customHelper: {
      require: './scenario/custom_helper.js',
    },
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
            // "--incognito",
            "--headless",
            "--disable-gpu",
            "--disable-cache"
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
  },
  multiple: {
    parallel: {
      // Splits tests into 2 chunks
      chunks: 2
    }
  }
};
