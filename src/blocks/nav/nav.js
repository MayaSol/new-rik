const ready = require('../../js/utils/documentReady.js');
const Collapse = require("../../../node_modules/bootstrap/js/dist/collapse.js");

ready(function(){

    var navCollapsed = document.querySelectorAll('.navbar-collapse');

    for (collapsed of navCollapsed) {
      console.log(collapsed);
      collapsed.addEventListener('show.bs.collapse',function() {
        let navOpen = document.querySelectorAll('.navbar-collapse.show');
        for (other of navOpen) {
          if (other == this) {
            continue;
          } else {
            Collapse.getOrCreateInstance(other).hide();
          }
        }
      })
    }


});
