Feature('View Login');

Scenario('View SOY Coffee Latte',  (I) => {
  video(I, 'lWeG8LHVv_E', 'SOY Coffee Latte / Susu Kedelai rasa Kopi Favorite', 60)
});

Scenario('View SUSU KEDELAI',  (I) => {
  video(I, 'j4JcY9nYoy0', 'SUSU KEDELAI / SUSU KACANG KEDELAI / SOYBEAN MILK / SOY MILIK', 60)
});

Scenario('View LEMON LIME WATER',  (I) => {
  video(I, 'w5MnQ6-voo0', 'LEMON LIME WATER / Lemon Yakult', 60)
});

Scenario('View Dalgona Coffee',  (I) => {
  video(I, '_nRV3uO3X9w', 'Dalgona Coffee', 60)
});

Scenario('View Sop Sayur',  (I) => {
  video(I, 'HqFTDYyCzgg', 'Sop Sayur', 60)
});

function video(I, vid, title, time=60) {
    browser.waitForAngularEnabled(false);

    I.amOnPage('/watch?v='+vid);

    I.wait(10)

    I.seeInTitle(title);

    I.click('.ytp-large-play-button');

    I.wait(100)
}