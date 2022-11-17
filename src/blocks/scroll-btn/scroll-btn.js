const ready = require('../../js/utils/documentReady.js');

ready(function() {
  window.addEventListener("scroll", function() {
    var btnScroll = document.getElementsByClassName(".scroll-btn")[0];
    if (btnScroll) {
      btnScroll.style.display = "none";
    }
  });
});
