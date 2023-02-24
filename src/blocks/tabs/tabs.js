const ready = require('../../js/utils/documentReady.js');
// const Tab = require("../../../node_modules/bootstrap/js/dist/tab.js");
const closest = require('closest');
var throttle = require('lodash.throttle');

ready(function() {

  var initalized = 0;

  let tabsSelect = document.querySelectorAll('.tabs__select');
  for (tabSelectEl of tabsSelect) {
    tabSelectEl.value = tabSelectEl.options[0].value;
  }

  initSelectTabsTrigger();

  window.addEventListener('resize', throttle(initSelectTabsTrigger, 100));

  function initSelectTabsTrigger() {
    if (initalized) {
      return;
    }
    if (document.documentElement.clientWidth > 767) {
      return;
    }
    for (tabSelectEl of tabsSelect) {
      tabSelectEl.addEventListener('change', function(event) {
        var trigger = document.getElementById(this.value);
        if (trigger) {
          trigger.click();
        }
      });
    }
    setInitialized();
  }

  function setInitialized() {
    initalized = 1;
  }

});
