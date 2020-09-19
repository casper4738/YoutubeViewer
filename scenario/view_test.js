Feature('specific');

Scenario('TERONG BAKAR UNGU COBEK-COBEK',  (I) => {
  video(I, 'v_XE_xTgs2c')
});

Scenario('COBEK-COBEK',  (I) => {
  video(I, 's1HIqEfQbMI')
});

Scenario('Ikan Mairo Goreng',  (I) => {
  video(I, 'YXQBOffajHU')
});

Scenario('MIE GORENG MAMA MERTUA',  (I) => {
  video(I, 'ed4NERrShVc')
});

Scenario('SAMBAL GORENG KENTANG MAMA',  (I) => {
  video(I, 'fE58PhbFbTc')
});

Scenario('IKAN KAKAP FILLET REBUS PALING ENAK',  (I) => {
  video(I, 'pmUdwCnK_h4')
});

Scenario('SUSU KEDELAI',  (I) => {
  video(I, 'j4JcY9nYoy0')
});

Scenario('LEMON LIME WATER',  (I) => {
  video(I, 'w5MnQ6-voo0')
});

Scenario('Dalgona Coffee',  (I) => {
  video(I, '_nRV3uO3X9w')
});

Scenario('Sop Sayur',  (I) => {
  video(I, 'HqFTDYyCzgg')
});

Scenario('KACANG MENTE CANTIK',  (I) => {
  video(I, '70Qk10IHugg')
});

Scenario('CAH KANGKUNG BAWANG PUTIH',  (I) => {
  video(I, '31lyZyCdaR8')
});

Scenario('IKAN KAKAP FILLET REBUS PALING ENAK',  (I) => {
  video(I, 'pmUdwCnK_h4')
});

Scenario('PARAPE BANDENG MAMA',  (I) => {
  video(I, 'XnhWuxlHaec')
});



function video(I, vid) {
    browser.waitForAngularEnabled(false);

    I.amOnPage('/watch?v='+vid);

    I.wait(10);

    I.waitForTextOrLocatorVisible('.ytp-large-play-button', 60);

    let time = 300 + getRandomInt(60) + getRandomInt(30);
    I.wait(time)
    
    I.wait(5 +  getRandomInt(10));
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
