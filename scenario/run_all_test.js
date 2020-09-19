Feature('View Login');

Scenario('View SOY Coffee Latte',  (I) => {
    browser.waitForAngularEnabled(false);

    I.amOnPage('/watch?v=i6_FjvghDy8&list=UULqujoLL13N6Q3TNWrUZecQ');

    I.wait(30)

    I.seeElement('.style-scope ytd-video-primary-info-renderer');

    I.click('.ytp-next-button ytp-button');
});