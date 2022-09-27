const ready = require('../../js/utils/documentReady.js');
const Tab = require("../../../node_modules/bootstrap/js/dist/tab.js");
const closest = require('closest');

ready(function() {

  let tabsSelect = document.querySelectorAll('.tab__select-wrapper');
  for (tabSelectEl of tabsSelect) {
    initSelectTabsTrigger(tabSelectEl);
  }

  function initSelectTabsTrigger(tabSelectEl) {
    if (document.documentElement.clientWidth < 767) {
      // var tabsSelect = document.getElementById('reviews-tab-select');
      tabSelectEl.addEventListener('change', function(event) {
        var parent = tabSelectEl.closest('.tab');
        var trigger = parent.querySelector('[data-bs-target="' + event.target.value + '_pane"]');
        if (trigger) {
          var tab = new Tab(trigger);
          tab.show();
        }
      });
    }
  }

});
