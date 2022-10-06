const ready = require('../../js/utils/documentReady.js');

ready(function() {
  const selects = document.querySelectorAll('.page-select__input');
  for (var select of selects) {
      select.addEventListener('change',function() {
        console.log(this.value);
        console.log(document.location.origin);
        document.location.href = document.location.origin + this.value;
      })
  }
});
