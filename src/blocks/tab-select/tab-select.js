const ready = require('../../js/utils/documentReady.js');
const Tab = require("../../../node_modules/bootstrap/js/dist/tab.js");

ready(function() {
  const tabSelectAll = document.querySelectorAll('select[data-tab-select]');
  console.log(tabSelectAll);
  for (select of tabSelectAll) {
    select.addEventListener('change', function(event) {
      showActiveTab(this);
    });
  }

});

function showActiveTab(tabSelect) {
  console.log('showActiveTab');
  console.log(tabSelect);
  var trigger = document.querySelector('[data-bs-target="' + tabSelect.value + '"]');
  console.log(trigger);
  var tab = new Tab(trigger);
  tab.show();
}
