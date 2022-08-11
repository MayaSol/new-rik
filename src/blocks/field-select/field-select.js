/* global document */

const ready = require('../../js/utils/documentReady.js');

ready(function(){

 var selectWrappers = document.querySelectorAll('.field-select__wrapper');

 for (selectWrapper of selectWrappers) {
  selectWrapper.addEventListener('click', function(event) {
    var select = this.querySelector('select');
    if (select) {
      select.click();
    }
  })
 }

});
