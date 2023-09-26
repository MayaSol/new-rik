const ready = require('../../js/utils/documentReady.js');

ready(function() {
  var float = document.querySelector('.article__float');
  if (float && float.clientHeight <= 720 && document.documentElement.clientWidth >= 1024) {
    var floatBlock = new StickySidebar('.article__float', {
      containerSelector: '.article__aside',
      innerWrapperSelector: '.article__float-container',
      resizeSensor: true,
      topSpacing: 100,
    //   topSpacing: 20,
    //   bottomSpacing: 20
    });
  }
});
