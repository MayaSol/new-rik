const ready = require('../../js/utils/documentReady.js');

ready(function() {
  var float = document.querySelector('.cart-page__total');
  if (float && document.documentElement.clientWidth >= 1024) {
    var floatBlock = new StickySidebar('.cart-page__total', {
      containerSelector: '.cart-page__aside',
      innerWrapperSelector: '.cart-page__total-inner',
      resizeSensor: true,
      topSpacing: 100,
    //   topSpacing: 20,
    //   bottomSpacing: 20
    });
  }
});
