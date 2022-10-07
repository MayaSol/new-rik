const ready = require('../../js/utils/documentReady.js');
const Сhoices = require('choices.js');

ready(function() {
  console.log(Сhoices);
  var options = document.querySelectorAll('.product-options__select');
  for (select of options) {
    var choices = new Сhoices(select);
  }
});
