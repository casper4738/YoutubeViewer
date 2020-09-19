'use strict';

let Helper = codecept_helper;

class MyHelper extends Helper {
  async waitForTextOrLocatorVisible(textOrLocator, timeout) {
    const helper = this.helpers['Protractor']; // Or change to another Helper

    try {
      await helper.waitForElement(textOrLocator, timeout);
      await helper.click(textOrLocator);
      return true;
    } catch (err) {
      console.log('Skipping operation as element is not visible');
      console.log(err);
    }
    return false;
  }
}

module.exports = MyHelper;